# Ser Mais Digital · Portal Institucional e Comercial

Projeto estático em HTML publicado no Vercel para concentrar:

- home principal da Ser Mais Digital
- cartões digitais pessoais
- apresentação institucional em tela cheia
- páginas comerciais das ofertas
- páginas de apoio do estúdio de IA

O repositório foi estruturado para ser simples de manter: sem build step, sem framework e com rotas amigáveis definidas no `vercel.json`.

## Visão geral

Hoje o portal atende quatro frentes principais de oferta:

1. Alocação / Bodyshop
2. Inteligência Artificial
3. Planejamento estratégico
4. Gerente de mudanças

Além disso, o projeto inclui:

- cartão digital do Fabricio
- cartão digital do Ricardo
- apresentação institucional fullscreen da Ser Mais Digital
- páginas do bloco de IA: `Oferta > Dinâmica > Método`

## Estrutura atual

```text
.
├── README.md
├── vercel.json
├── index.html
├── index_sermaisdigital.html
├── cartao_fabricio.html
├── cartao_ricardo.html
├── institucional-ser-mais-digital.html
├── oferta-ia-smd.html
├── estudio-da-oferta-smd.html
├── metodo_de_ia_smd.html
├── oferta-alocacao-smd.html
├── dinamica-alocacao-smd.html
├── oferta-planejamento-estrategico-smd.html
└── oferta-gerente-de-mudancas-smd.html
```

## Arquivos principais

### `index.html`
Home principal publicada em `/`.

### `index_sermaisdigital.html`
Variação espelho da home, mantida como rota auxiliar interna.

### `cartao_fabricio.html`
Cartão digital do Fabricio Pequeno.

### `cartao_ricardo.html`
Cartão digital do Ricardo Avigro.

### `institucional-ser-mais-digital.html`
Apresentação institucional fullscreen com navegação por slides e slide final conectado às ofertas atuais.

### `oferta-ia-smd.html`
Landing comercial da oferta de IA.

### `estudio-da-oferta-smd.html`
Página de dinâmica da oferta de IA, com seções, artefatos, simulador e navegação lateral.

### `metodo_de_ia_smd.html`
Página do método de IA.

### `oferta-alocacao-smd.html`
Landing comercial de Alocação / Bodyshop.

### `dinamica-alocacao-smd.html`
Onepager dinâmico de refino de vaga e geração de perfil ideal da oferta de Alocação.

### `oferta-planejamento-estrategico-smd.html`
Landing comercial de Planejamento estratégico.

### `oferta-gerente-de-mudancas-smd.html`
Landing comercial de Gerente de mudanças.

### `vercel.json`
Responsável por:

- `cleanUrls`
- `headers` de segurança
- `redirects` legados
- `rewrites` das rotas públicas

## Rotas públicas canônicas

### Home e cartões

- `/`
- `/cartao_fabricio`
- `/cartao_ricardo`
- `/institucional-ser-mais-digital`

### Bloco de IA

- `/oferta-ia-smd`
- `/estudio-da-oferta-smd`
- `/metodo_de_ia_smd`
- `/dinamica-alocacao-smd`

### Outras ofertas comerciais

- `/oferta-alocacao-smd`
- `/dinamica-alocacao-smd`
- `/oferta-planejamento-estrategico-smd`
- `/oferta-gerente-de-mudancas-smd`

## Redirecionamentos mantidos

O projeto preserva algumas rotas antigas por compatibilidade, por exemplo:

- `/oferta_ia_smd` → `/oferta-ia-smd`
- `/oferta_alocacao_smd` → `/oferta-alocacao-smd`
- `/oferta_planejamento_estrategico_smd` → `/oferta-planejamento-estrategico-smd`
- `/oferta_gerente_de_mudancas_smd` → `/oferta-gerente-de-mudancas-smd`
- `/estudio_da_oferta_smd` → `/estudio-da-oferta-smd`
- variações com acento dos cartões

Ao criar páginas novas, prefira sempre rotas canônicas curtas e consistentes.

## Padrão do portal

O projeto já consolidou um padrão visual e estrutural importante:

- visual premium, executivo e escuro
- tipografia forte e blocos bem delimitados
- ícones discretos, mas com presença
- navegação simples e direta
- páginas comerciais com leitura rápida e objetiva

### Home

A home organiza as frentes na ordem:

1. Alocação
2. IA
3. Planejamento estratégico
4. Gerente de mudanças

Cada bloco principal contém:

- ícone grande da frente
- número como marca d'água
- ícone marca d'água complementar
- jornada `Oferta > Dinâmica > Método`

### Slide final institucional

O slide 7 da apresentação institucional funciona como prateleira comercial e deve refletir o estado real das ofertas publicadas.

Se uma oferta já existir, o card precisa apontar para a página correspondente.

## Como rodar localmente

Como o projeto é estático, existem duas formas práticas de visualizar localmente.

### Opção 1. Servidor simples

```bash
python3 -m http.server 8080
```

Depois abra:

- `http://localhost:8080/index.html`
- `http://localhost:8080/cartao_fabricio.html`
- `http://localhost:8080/institucional-ser-mais-digital.html`

### Opção 2. Vercel Dev

Se quiser testar as rotas amigáveis e o comportamento mais próximo da produção:

```bash
vercel dev
```

## Como publicar

O deploy é automático via GitHub + Vercel.

Fluxo padrão:

```bash
git add .
git commit -m "Sua alteração"
git push origin main
```

Depois do push, o Vercel publica automaticamente a nova versão do portal.

## Como criar uma nova oferta

Quando surgir uma nova frente comercial, o fluxo recomendado é:

1. criar a página HTML da oferta na raiz
2. adicionar a rota em `vercel.json`
3. atualizar a home com um novo bloco da frente
4. atualizar o slide 7 da apresentação institucional
5. manter a ordem estratégica definida pelo portal, se aplicável

Exemplo de rewrite:

```json
{
  "source": "/oferta-nova-frente-smd",
  "destination": "/oferta-nova-frente-smd.html"
}
```

## Como manter consistência visual

Ao editar páginas deste projeto:

- preserve a identidade visual já usada nas ofertas existentes
- reaproveite cores, bordas, sombras, chips e navegação do topo
- evite criar novas linguagens visuais sem necessidade
- mantenha páginas comerciais diretas e com pouco scroll sempre que possível
- use a home e a oferta de IA como principais referências de padrão

## Checklist antes de subir

- [ ] a nova página HTML está na raiz do projeto
- [ ] a rota canônica foi adicionada em `vercel.json`
- [ ] redirecionamentos legados foram considerados, se necessário
- [ ] a home foi atualizada quando a oferta faz parte do portfólio atual
- [ ] a apresentação institucional foi atualizada quando a oferta já está ativa
- [ ] textos e links finais estão coerentes com o estado real do portal

## Observações importantes

- O projeto não usa framework nem etapa de build.
- O arquivo servido como home principal é o `index.html`.
- `index_sermaisdigital.html` é mantido como espelho auxiliar e deve permanecer sincronizado quando a home for alterada.
- As páginas foram feitas para priorizar experiência desktop e apresentação executiva.

## Contato institucional

- Site: `https://sermaisdigital.com.br`
- Portal: `https://sermaisdigital.vercel.app`
- E-mail: `contato@sermaisdigital.com.br`

---

Portal institucional e comercial da **Ser Mais Digital**, mantido para apresentação, navegação comercial e evolução contínua das ofertas.
