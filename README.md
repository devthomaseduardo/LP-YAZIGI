# LP-YAZIGI

README completo para o projeto front-end criado com Vite + React + TypeScript e integração com Supabase.

## Visão geral

Este repositório contém a landing page / aplicação front-end para o projeto LP-YAZIGI.
É uma aplicação React moderna (Vite + TypeScript) com componentes reutilizáveis, integração com Supabase e uma estrutura compatível com deploy estático.

Resumo:
- Framework: React 18
- Bundler: Vite
- Linguagem: TypeScript
- Estilo: Tailwind CSS
- Backend-as-a-Service: Supabase (integrações em `src/integrations/supabase`)

## Status

Trabalhando; app pronta para desenvolvimento local e build de produção.

## Tecnologias principais

- Vite
- React + React Router
- TypeScript
- Tailwind CSS
- Supabase (client em `src/integrations/supabase/client.ts`)
- Radix UI (componentes acessíveis)
- React Query

## Estrutura do projeto (resumo)

- `src/` - código-fonte do front-end
  - `components/` - componentes da UI e seções da página
  - `hooks/` - hooks customizados
  - `integrations/supabase/` - cliente e tipos do Supabase
  - `pages/` - páginas (Index, Admin, Auth, NotFound)
  - `lib/` - utilitários
- `public/` - ativos estáticos
- `supabase/` - configuração e migrations relacionadas ao Supabase
- `package.json` - scripts & dependências

> Arquivos importantes: `vite.config.ts`, `tailwind.config.ts`, `src/main.tsx`, `src/App.tsx`.

## Scripts úteis (do `package.json`)

Os scripts disponíveis (capturados do `package.json`):

- `npm run dev` — inicia o servidor de desenvolvimento (Vite)
- `npm run build` — gera build de produção (Vite)
- `npm run build:dev` — build com modo `development`
- `npm run preview` — executa o preview do build (Vite Preview)
- `npm run lint` — executa ESLint no projeto

## Requisitos locais

- Node.js (recomendado >= 18)
- npm (ou pnpm/yarn se preferir, ajustar comandos)
- (Opcional) Supabase CLI, se quiser executar/migrar localmente

## Variáveis de ambiente

A aplicação usa Supabase. Crie um arquivo `.env.local` ou use seu provedor de CI com as variáveis abaixo:

```bash
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
# Se houver outras chaves específicas, adicione aqui
```

Observação: as variáveis públicas para o front-end geralmente começam com `VITE_` para serem expostas pelo Vite.

O cliente Supabase do projeto está em `src/integrations/supabase/client.ts` e lê as variáveis de ambiente apropriadas.

## Instalação (local)

1. Clone o repositório

```bash
git clone <repo-url>
cd "LP-YAZIGI"
```

2. Instale dependências

```bash
npm install
```

3. Copie as variáveis de ambiente

```bash
cp .env.example .env.local   # se existir um exemplo
# edite .env.local com suas chaves
```

4. Iniciar em modo desenvolvimento

```bash
npm run dev
```

Abra `http://localhost:5173` (ou a porta indicada pelo Vite) no navegador.

## Build e preview

Para gerar os arquivos de produção e testar o preview localmente:

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Integração / Supabase

- Configuração do Supabase no repositório: `supabase/config.toml`
- Migrations: `supabase/migrations/`

Se você usar a Supabase CLI localmente, comandos úteis:

```bash
supabase login
supabase projects create # (opcional)
supabase db push          # aplicar migrations (dependendo do setup)
```

(Verifique a documentação da Supabase e a configuração local antes de executar comandos que alterem dados.)

## Arquitetura & Contrato rápido

- Input: dados do usuário (formulários), envio de leads/diagnósticos via API (Supabase)
- Output: UI responsiva, páginas públicas e área admin com tabelas (ex.: `src/components/admin/`)
- Erros: validação nos formulários com `zod`/`react-hook-form`, mensagens amigáveis via `sonner` (toasts)

Edge cases comuns:
- Variáveis de ambiente ausentes -> app pode falhar ao conectar com Supabase. Sempre valide chaves
- Migrations conflitantes -> gerenciar com cuidado e testes antes do deploy
- Recursos estáticos faltantes -> verificar `public/` e imports

## Como contribuir

1. Abra uma issue descrevendo a alteração
2. Crie uma branch com `git checkout -b feat/descricao` ou `fix/descricao`
3. Faça commits limpos e teste localmente
4. Envie um pull request descrevendo as mudanças

## Troubleshooting

- Caso o Vite não suba: verifique versão do Node, reinicie o terminal, limpe `node_modules` e rode `npm install`
- Erro ao conectar Supabase: confira `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`

## Próximos passos sugeridos

- Adicionar um `.env.example` com variáveis mínimas
- Adicionar scripts/testes automatizados (Jest / Vitest)
- CI (GitHub Actions) com checks de lint e build

## Licença

Escolha e adicione uma licença (por exemplo MIT) se desejar. Atualmente, o repositório não contém um `LICENSE` explícito.

---

Arquivo criado automaticamente pelo assistente. Se quiser, posso:
- Adicionar um `.env.example` com chaves de exemplo
- Configurar um workflow GitHub Actions mínimo para lint/build
- Gerar um arquivo `LICENSE` (MIT/Apache)

Diga qual opção prefere que eu implemente a seguir.
