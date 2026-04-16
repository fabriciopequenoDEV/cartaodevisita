# cartaodevisita

from pathlib import Path

content = """# cartão de visita · Ser Mais Digital

Projeto estático com páginas HTML publicadas no Vercel para uso como cartões digitais e landing pages da Ser Mais Digital.

## Estrutura do projeto

```text
.
├── cartao_fabricio.html
├── cartao_ricardo.html
├── metodo_de_ia_smd.html
├── vercel.json
└── README.md
```

## Objetivo

Publicar páginas independentes com rotas amigáveis no domínio do Vercel, por exemplo:

- `/cartao_fabricio`
- `/cartao_ricardo`
- `/metodo_de_ia_smd`

## Rotas públicas

Após o deploy, as URLs esperadas são:

- `https://sermaisdigital.vercel.app/cartao_fabricio`
- `https://sermaisdigital.vercel.app/cartao_ricardo`
- `https://sermaisdigital.vercel.app/metodo_de_ia_smd`

## Arquivos principais

### `cartao_fabricio.html`
Cartão digital do Fabricio Pequeno.

### `cartao_ricardo.html`
Cartão digital do Ricardo Avigro.

### `metodo_de_ia_smd.html`
Landing page do método de adoção e escala de IA da Ser Mais Digital.

### `vercel.json`
Responsável pelas rotas amigáveis no Vercel.

Exemplo:

```json
{
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/cartao_fabricio",
      "destination": "/cartao_fabricio.html"
    },
    {
      "source": "/cartao_ricardo",
      "destination": "/cartao_ricardo.html"
    },
    {
      "source": "/metodo_de_ia_smd",
      "destination": "/metodo_de_ia_smd.html"
    }
  ]
}
```

## Como publicar no Vercel

### 1. Subir os arquivos para o GitHub
Garanta que os arquivos HTML e o `vercel.json` estejam na raiz do repositório.

### 2. Conectar o repositório no Vercel
No painel do Vercel:

- clique em **Add New Project**
- selecione o repositório `fabriciopequenoDEV/cartaodevisita`
- importe o projeto

### 3. Configuração recomendada
Como o projeto é estático:

- Framework Preset: `Other`
- Root Directory: `/`
- Build Command: deixar vazio
- Output Directory: deixar vazio

### 4. Deploy
Clique em **Deploy**.

Se o projeto já estiver conectado, basta fazer novo commit no GitHub ou usar **Redeploy** no Vercel.

## Convenções recomendadas

Para evitar problemas de URL e deploy:

- usar nomes de arquivos sem acento
- usar nomes sem espaço
- preferir minúsculas com underscore

Exemplos recomendados:

- `cartao_fabricio.html`
- `cartao_ricardo.html`
- `metodo_de_ia_smd.html`

Evitar:

- `cartão_fabricio.html`
- `MétodoDeIA_SMD.html`

## Como criar novas páginas

Para adicionar uma nova página:

1. criar um novo arquivo `.html` na raiz
2. adicionar uma nova regra no `vercel.json`
3. subir para o GitHub
4. redeploy no Vercel

Exemplo:

```json
{
  "source": "/nova_pagina",
  "destination": "/nova_pagina.html"
}
```

## Como editar rapidamente

### Pelo GitHub
- abrir o arquivo
- clicar no ícone de lápis
- editar
- commitar

### Localmente
```bash
git clone https://github.com/fabriciopequenoDEV/cartaodevisita.git
cd cartaodevisita
```

Depois de editar:

```bash
git add .
git commit -m "Atualiza páginas"
git push
```

## Checklist de publicação

Antes de publicar, conferir:

- [ ] arquivos HTML estão na raiz
- [ ] `vercel.json` está na raiz
- [ ] nomes dos arquivos estão sem acento
- [ ] rotas do `vercel.json` batem com os nomes dos arquivos
- [ ] projeto correto está conectado no Vercel
- [ ] novo deploy foi executado

## Contato institucional

- Site: `https://sermaisdigital.com.br`
- LinkedIn: `https://www.linkedin.com/company/ser-mais-digital`

---

Projeto mantido para páginas institucionais e comerciais da **Ser Mais Digital**.
"""

out = Path("/mnt/data/README.md")
out.write_text(content, encoding="utf-8")
print(f"Arquivo salvo em: {out}")
