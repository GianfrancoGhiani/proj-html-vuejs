# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Project Schedule

- #### Milestone 0
  - creare scaffolding con tutti i componenti descritti su figma e linkarli tra loro
  - definire la color palette e il font
  - creare 2 mixin di base flex row e col
- #### Milestone 1
  - organizzare store.js: \
     ci serviranno:
    - array per menu top-bar
    - array di array per links footer
    - array icone per forum sections
    - oggetto con dati profotti/news con url, name, date, comments-counter, description
    - array di social icons
- #### Milestone 2
  riprodurre l'estetica (statica) dei 3 componenti base header + main + footer
- #### Milestone 3
  stando attenti a il linking tra i comp, utilizzare store.js per i dati dinamici
