# Galeria de imagens

Esse é um projeto de uma galeria de imagens responsiva, desenvolvida utilizando o [React](https://reactjs.org/) com o [Vite](https://vitejs.dev/). Para definir os componentes prontos e a estilização do projeto utilizei o [Tailwind CSS](https://tailwindcss.com/) e o [Shadcn](https://ui.shadcn.com/). Os arquivos de imagens que encontrará no projeto são livres de direitos autorais. A api utilizada foi a [Lorem Picsum](https://picsum.photos/). O intuito foi renderizar apenas 25 imagens para o projeto.

## Como rodar na minha máquina?

- Clone o repositório [github](https://github.com/MatheusAmon12/image-gallery)
- Rode `npm install` e `npm run dev`
- Seu `package.json` deve ter o seguinte conteúdo:

```json
"dependencies": {
  "@radix-ui/react-dialog": "^1.0.5",
  "axios": "^1.6.8",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.1",
  "lucide-react": "^0.378.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "tailwind-merge": "^2.3.0",
  "tailwindcss-animate": "^1.0.7"
},
"devDependencies": {
  "@types/node": "^20.12.11",
  "@types/react": "^18.2.66",
  "@types/react-dom": "^18.2.22",
  "@typescript-eslint/eslint-plugin": "^7.2.0",
  "@typescript-eslint/parser": "^7.2.0",
  "@vitejs/plugin-react": "^4.2.1",
  "autoprefixer": "^10.4.19",
  "eslint": "^8.57.0",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.6",
  "postcss": "^8.4.38",
  "tailwindcss": "^3.4.3",
  "typescript": "^5.2.2",
  "vite": "^5.2.0"
}
```

## Estrutura do projeto

- `public`: pasta de arquivos de imagem
- `src`: contém as peças necessárias para compor o projeto
  - `components`: arquivos de componentes
    - `ui`: componentes vindos do Shadcn
    - `footer.tsx`: componente de rodapé
    - `gallery.tsx`: componente container responsável por definir o grid de imagens
    - `header.tsx`: componente de cabeçalho
    - `image.tsx`: componente responsável for requisitar as imagens e montar cada item da galeria. Além disso, o componente `Image` renderiza o modal quando há o click na imagem
    - `modal.tsx`: componente de modal, recebe como props as informações de imagem e as funções para gerenciar a visibilidade do modal
  - `lib`: contém as funções utilitárias do projeto
    - `utils.ts`: funções auxiliares do Shadcn
    - `fetchSpecificImage.ts`: função para buscar as imagens do Lorem Picsum com base no `id` recebido do componente `Image`
    - `fetch.ts`: função para buscar as 25 imagens do Lorem Picsum
  _ `App.tsx`: componente principal da aplicação que renderiza o `Header`, o `Gallery` e o `Footer`
  - `index.css`: arquivo de estilização global
  - `main.tsx`: arquivo root do projeto

## Como me localizar no projeto?

Acesse o diretório `src/App.tsx`, nesse arquivo você encontrará a renderização dos principais componentes do projeto. A partir desse ponto você terá acesso aos demais e as funções utilitárias.