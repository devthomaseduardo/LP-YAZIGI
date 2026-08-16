/**
 * Gera arquivos estáticos de descoberta em public/.
 * Uso: node scripts/seo/generate.mjs  |  npm run seo
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as config from './config.mjs'
import { buildSitemap, buildRobots, buildLlms } from './build.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '../..')
const PUBLIC_DIR = join(ROOT, 'public')

async function main () {
  await mkdir(PUBLIC_DIR, { recursive: true })

  const sitemap = buildSitemap(config)
  const robots = buildRobots(config)
  const llms = buildLlms(config)

  await Promise.all([
    writeFile(join(PUBLIC_DIR, 'sitemap.xml'), sitemap, 'utf8'),
    writeFile(join(PUBLIC_DIR, 'robots.txt'), robots, 'utf8'),
    writeFile(join(PUBLIC_DIR, 'llms.txt'), llms, 'utf8'),
  ])

  console.log('SEO gerado em public/:')
  console.log('  - sitemap.xml')
  console.log('  - robots.txt')
  console.log('  - llms.txt')
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
