#!/usr/bin/env node
/*
  Script para fazer upload dos vídeos em `src/assets/videos` para o Storage do Supabase
  e inserir metadados na tabela `videos`.

  Uso local (exemplo):
    SUPABASE_URL="https://..." SUPABASE_SERVICE_ROLE_KEY="<service-role-key>" node scripts/upload-videos.mjs

  Observação: este script exige uma chave de serviço (service role) para poder criar buckets e inserir registros no banco.
*/
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('Erro: defina SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY no ambiente antes de executar.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, { auth: { persistSession: false } });

const videosDir = path.join(process.cwd(), 'src', 'assets', 'videos');
const bucketName = 'videos';

async function ensureBucket() {
  const { data: buckets } = await supabase.storage.listBuckets();
  if (!buckets.find(b => b.name === bucketName)) {
    console.log(`Creating bucket: ${bucketName}`);
    const { error } = await supabase.storage.createBucket(bucketName, { public: true });
    if (error) throw error;
  }
}

async function uploadAndRecord(filePath) {
  const filename = path.basename(filePath);
  const storagePath = `uploads/${filename}`;
  const fileBuffer = fs.readFileSync(filePath);

  console.log(`Uploading ${filename} -> ${bucketName}/${storagePath}`);
  const { error: uploadError } = await supabase.storage.from(bucketName).upload(storagePath, fileBuffer, { upsert: true });
  if (uploadError) {
    console.error('Upload error:', uploadError.message || uploadError);
    return;
  }

  // Get public URL
  const { data: publicData } = supabase.storage.from(bucketName).getPublicUrl(storagePath);
  const publicUrl = publicData?.publicUrl || null;

  // Insert metadata into videos table
  const { data, error: insertError } = await supabase.from('videos').insert([{ title: filename, filename, storage_path: storagePath, public_url: publicUrl, metadata: {} }]).select();
  if (insertError) {
    console.error('DB insert error:', insertError.message || insertError);
  } else {
    console.log('Inserted DB record for', filename, 'id=', data?.[0]?.id || '(unknown)');
  }
}

async function main(){
  if (!fs.existsSync(videosDir)) {
    console.error('Diretório de vídeos não encontrado:', videosDir);
    process.exit(1);
  }

  await ensureBucket();

  const files = fs.readdirSync(videosDir).filter(f => f.toLowerCase().endsWith('.mp4'));
  if (files.length === 0) {
    console.log('Nenhum arquivo .mp4 encontrado em', videosDir);
    return;
  }

  for (const f of files) {
    await uploadAndRecord(path.join(videosDir, f));
  }

  console.log('Upload finalizado');
}

main().catch(err => { console.error(err); process.exit(1); });
