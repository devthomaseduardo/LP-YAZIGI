# SEO / descoberta (reutilizável)

Gera os arquivos estáticos de descoberta a partir de uma **fonte única**:

| Arquivo gerado | Função |
| -------------- | ------ |
| `public/sitemap.xml` | URLs indexáveis para buscadores |
| `public/robots.txt` | Regras de crawl + link do sitemap |
| `public/llms.txt` | Resumo estruturado para LLMs e agentes ([llmstxt.org](https://llmstxt.org)) |

## Como usar neste projeto

```bash
npm run seo
```

Opcional no build:

```bash
npm run build # roda seo via prebuild
```

## Onde editar

1. **`config.mjs`** — site, rotas, recursos e paths bloqueados.
2. Rode `npm run seo` para regenerar `public/*`.
3. Faça commit dos arquivos gerados (estáticos no deploy).

Ajuste `SITE.url` em `config.mjs` para o domínio real de produção.

## Reutilizar em outro projeto

1. Copie a pasta `scripts/seo/`.
2. Ajuste `config.mjs` (URL, rotas, `DISALLOW`).
3. Adicione no `package.json`:

```json
{
  "scripts": {
    "seo": "node scripts/seo/generate.mjs",
    "prebuild": "npm run seo"
  }
}
```

4. Confirme que a saída vai para `public/` (ou altere `PUBLIC_DIR` em `generate.mjs`).

## Estrutura

```
scripts/seo/
  config.mjs    # dados (fonte da verdade)
  build.mjs     # builders puros (sem I/O)
  generate.mjs  # escreve em public/
  README.md     # este arquivo
```
