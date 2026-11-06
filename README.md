# Digital Store: Projeto Final de Front-end

Loja virtual feita em **React** (Vite + React Router) com as três páginas pedidas:

- **Home** (`/`): destaque, coleções e produtos em promoção
- **Listagem de produtos** (`/produtos`): filtro por categoria, busca e ordenação funcionando
- **Visualização do produto** (`/produtos/:id`): cor, tamanho, quantidade, adicionar ao carrinho e relacionados

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção
```

## Estrutura

```
src/
  components/  Header, Footer, ProductCard, ProductArt
  pages/       Home, Products, Product
  data/        products.js (dados mockados)
  styles.css   estilos globais com variáveis CSS
```

## Decisões

- Dados mockados em `src/data/products.js` (sem API).
- Ilustrações dos produtos em SVG, tingidas pela cor escolhida.
- Estado da listagem (categoria, busca, ordem) guardado na URL.
- Acessibilidade: foco visível, rótulos ARIA, `prefers-reduced-motion`.

## Deploy

Funciona direto na Vercel ou Netlify (build: `npm run build`, pasta: `dist`).
Para rotas funcionarem no Netlify, adicione `public/_redirects` com: `/* /index.html 200`.
