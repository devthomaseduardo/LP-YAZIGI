# Supabase — dados e políticas

## Variáveis de ambiente (front-end)

| Variável | Uso |
|----------|-----|
| `VITE_SUPABASE_URL` | URL do projeto |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Chave anon (publishable), usada em `src/integrations/supabase/client.ts` |

Nunca commite chaves de **service role** no repositório.

## Tabelas (conforme migrations)

### `diagnostic_results`

Resultado do fluxo de diagnóstico: nome, telefone, e-mail opcional, nível atual, experiência, objetivo, dificuldade, prazo desejado, disponibilidade por semana, faixa etária e preferência de aula (presencial/online/etc.).

### `leads`

Interesse genérico: nome, telefone, e-mail opcional, `source` (origem na página), `message` e `metadata` (JSON opcional).

### `videos`

Metadados de vídeos (título, arquivo, caminho no storage, URL pública, JSON de metadados). Usado pelos depoimentos em vídeo na landing.

## Row Level Security (RLS)

As migrations habilitam RLS e criam políticas que permitem **INSERT** público (`anon`) em `diagnostic_results` e `leads`, adequado para formulários na SPA.

**Leitura no admin:** usuários autenticados precisam de políticas `SELECT` (e eventualmente `DELETE`/`UPDATE`) alinhadas ao papel (`authenticated`) ou a claims customizadas. Valide no **SQL Editor** do Supabase que as políticas atendem à equipe sem expor dados publicamente.

## Storage

Se os vídeos forem servidos pelo bucket (ex.: `videos`), mantenha regras que permitam leitura pública apenas do necessário e escrita restrita a contas de serviço ou painel.

## CLI (opcional)

```bash
supabase link --project-ref <ref>
supabase db push
```

Comandos exatos dependem da versão da CLI e do fluxo do projeto; consulte a [documentação oficial do Supabase](https://supabase.com/docs).
