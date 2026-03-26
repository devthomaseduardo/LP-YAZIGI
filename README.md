# LP Yázigi Swiss Park

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)

Landing page e painel administrativo da unidade **Yázigi Swiss Park (Campinas/SP)**. O site apresenta cursos, benefícios, depoimentos em texto e vídeo, galeria, formulário de diagnóstico de inglês e captura de leads, com dados persistidos no **Supabase** e área **/admin** protegida por autenticação.

## Propósito

- **Marketing e conversão:** apresentar a marca, níveis, diferenciais (Pearson, metodologia, localização) e levar o visitante a WhatsApp, matrícula ou cadastro.
- **Geração de demanda:** registrar **leads** (nome, telefone, origem da seção) e respostas completas do **diagnóstico** para contato comercial e acompanhamento pedagógico.
- **Operação:** painel interno com totais e listagens de diagnósticos e leads para a equipe da unidade.

## Funcionalidades da landing (`/`)

| Área | Descrição |
|------|-----------|
| **Hero** | Mensagem principal, CTAs e destaques da unidade |
| **Benefícios** | Cards com argumentos de valor |
| **Público-alvo** | Perfis (crianças, adolescentes, adultos, empresas) |
| **Carrossel de imagens** | Destaques visuais automáticos |
| **Depoimentos** | Texto em carrossel e vídeos (metadados no Supabase / storage) |
| **Cursos / níveis** | Apresentação de modalidades e conteúdo |
| **Diagnóstico** | Fluxo em modal com perguntas e contato; grava em `diagnostic_results` |
| **Galeria** | Fotos e mídia com navegação adaptada (mobile/desktop) |
| **CTA final** | Chamada para ação e contato |
| **Rodapé** | Contato, redes, logo 75 anos, botão voltar ao topo |
| **WhatsApp flutuante** | Acesso rápido ao número da unidade |
| **Área do aluno** | Atalho conforme botão dedicado no layout |
| **Analytics** | Google Tag Manager configurado no `index.html` |

Comportamentos de UX: scroll suave, tema visual alinhado à marca (cores HSL em `src/index.css`), restrições globais de seleção/arraste de texto e imagem definidas no CSS.

## Autenticação e admin

| Rota | Função |
|------|--------|
| `/auth` | Login com e-mail e senha (**Supabase Auth**); validação com Zod |
| `/admin` | Exige sessão; exibe estatísticas, abas **Diagnósticos** e **Leads** com tabelas |

Logout limpa a sessão e redireciona para `/auth`.

## Stack (visível no GitHub)

| Camada | Tecnologia |
|--------|------------|
| Linguagem | **TypeScript** |
| UI | **React 18**, **React Router 6** |
| Build | **Vite 5** (`@vitejs/plugin-react-swc`) |
| Estilo | **Tailwind CSS**, **tailwindcss-animate**, tipografia Poppins |
| Componentes | **shadcn/ui** (Radix UI, class-variance-authority, tailwind-merge) |
| Formulários | **react-hook-form**, **Zod**, **@hookform/resolvers** |
| Dados remotos | **Supabase JS** (`@supabase/supabase-js`) |
| Cache / async | **TanStack React Query** |
| Carrosséis | **Embla Carousel** (+ autoplay onde aplicável) |
| Motion | **Framer Motion** |
| Gráficos (UI kit) | **Recharts** |
| Qualidade | **ESLint** + **typescript-eslint** |

Arquivos de configuração principais: `vite.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `eslint.config.js`.

## Requisitos

- **Node.js** 18 ou superior
- Conta **Supabase** com URL e chave **anon** (publishable) do projeto

## Instalação

```bash
git clone https://github.com/devthomaseduardo/LP-YAZIGI.git
cd LP-YAZIGI
npm install
```

Copie `.env.example` para `.env` ou `.env.local` e preencha:

```bash
cp .env.example .env.local
```

Variáveis:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY` (chave pública anon do Supabase)

## Scripts

| Comando | Efeito |
|---------|--------|
| `npm run dev` | Servidor de desenvolvimento (porta padrão **8080** no `vite.config`) |
| `npm run build` | Build de produção em `dist/` |
| `npm run build:dev` | Build em modo development |
| `npm run preview` | Servir o build localmente |
| `npm run lint` | ESLint |

## Banco e Supabase

Migrations em `supabase/migrations/` definem tabelas `diagnostic_results`, `leads` e `videos`, índices e **RLS** com políticas de `INSERT` público para formulários da landing. Detalhes em [docs/SUPABASE.md](docs/SUPABASE.md).

Fluxo recomendado: aplicar migrations no projeto Supabase (CLI ou SQL Editor), configurar **Auth** (usuários admin) e **Storage** (bucket de vídeos, se usar depoimentos em vídeo).

## Documentação técnica

- [Arquitetura e módulos](docs/ARCHITECTURE.md) — rotas, camadas, convenções
- [Supabase e dados](docs/SUPABASE.md) — tabelas, políticas, variáveis

## Deploy

O build gera artefatos estáticos em `dist/`, adequados para **Netlify**, **Vercel**, **Cloudflare Pages** ou qualquer host de SPA. Configure as mesmas variáveis `VITE_*` no painel do provedor.

Para SPA, garanta **fallback** para `index.html` nas rotas diretas (`/admin`, `/auth`).

## Licença

O repositório não inclui um arquivo `LICENSE` por padrão. Defina uma licença no repositório se for distribuir o código.
