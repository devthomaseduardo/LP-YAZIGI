/**
 * Builders puros (sem I/O) — geram conteúdo a partir de config.
 */

/**
 * @param {{ SITE: object, ROUTES: array, DISALLOW: string[], RESOURCES?: array }} cfg
 */
export function buildSitemap (cfg) {
  const { SITE, ROUTES } = cfg
  const lastmod = new Date().toISOString().slice(0, 10)

  const urls = ROUTES.map(r => {
    const loc = r.path === '/' ? SITE.url : `${SITE.url.replace(/\/$/, '')}${r.path}`
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq || 'monthly'}</changefreq>
    <priority>${r.priority ?? 0.5}</priority>
  </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

/**
 * @param {{ SITE: object, DISALLOW: string[] }} cfg
 */
export function buildRobots (cfg) {
  const { SITE, DISALLOW } = cfg
  const disallowLines = (DISALLOW || [])
    .map(p => `Disallow: ${p}`)
    .join('\n')

  return `User-agent: *
Allow: /
${disallowLines}

Sitemap: ${SITE.url.replace(/\/$/, '')}/sitemap.xml
`
}

/**
 * @param {{ SITE: object, ROUTES: array, RESOURCES?: array }} cfg
 * @see https://llmstxt.org
 */
export function buildLlms (cfg) {
  const { SITE, ROUTES, RESOURCES = [] } = cfg
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    `Idioma: ${SITE.locale || SITE.language || 'pt-BR'}`,
    `Site: ${SITE.url}`,
    '',
    '## Páginas',
    '',
  ]

  for (const r of ROUTES) {
    const loc = r.path === '/' ? SITE.url : `${SITE.url.replace(/\/$/, '')}${r.path}`
    lines.push(`- [${r.title}](${loc}): ${r.description || SITE.description}`)
  }

  if (RESOURCES.length) {
    lines.push('', '## Recursos', '')
    for (const res of RESOURCES) {
      lines.push(`- [${res.title}](${res.url}): ${res.description || ''}`)
    }
  }

  lines.push('')
  return lines.join('\n')
}

function escapeXml (s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
