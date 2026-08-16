/**
 * Fonte única de verdade para SEO / descoberta.
 * Edite aqui e rode: npm run seo
 */

export const SITE = {
  name: 'Yázigi Swiss Park',
  url: 'https://yazigiswisspark.com.br', // ajuste para o domínio de produção
  description:
    'Certificação Pearson, metodologia comprovada e turmas exclusivas em Campinas. Aprenda inglês e espanhol com quem forma cidadãos do mundo.',
  locale: 'pt-BR',
  language: 'pt',
}

/** Rotas indexáveis da landing (path relativo à raiz) */
export const ROUTES = [
  {
    path: '/',
    title: 'Yázigi Swiss Park — O Caminho para a Fluência Global',
    description: SITE.description,
    changefreq: 'weekly',
    priority: 1.0,
  },
]

/** Paths bloqueados no robots.txt (área admin, auth, etc.) */
export const DISALLOW = ['/admin', '/auth', '/api/']

/** Recursos extras para llms.txt (opcional) */
export const RESOURCES = [
  {
    title: 'WhatsApp da unidade',
    url: 'https://wa.me/5519991394250',
    description: 'Contato comercial e matrículas',
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/yazigi_swisspark/',
    description: 'Novidades e conteúdo da unidade Swiss Park',
  },
]
