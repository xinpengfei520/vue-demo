# vue-demo

A small Vue 2 learning/demo project built on the legacy `vue-cli 2` "webpack" template, using [Element UI](https://element.eleme.io/#/en-US) as the component library and `vue-router` for navigation.

## Tech stack

- Vue 2.5
- vue-router 3
- Element UI 2.13
- Webpack 3 + Babel 6 (raw config in `build/` and `config/`, no `vue.config.js`, not Vite)

No state management (Vuex), no test suite, no linter, and no CI are configured in this repo.

## Project structure

```
src/
├── main.js           # entry point, registers Element UI globally
├── App.vue           # root component (el-container layout with side nav)
├── router/index.js   # routes: / , /hello , /table
├── components/
│   ├── HelloWorld.vue
│   ├── Hello.vue
│   └── MyTable.vue   # Element UI table example
└── assets/
```

## Build setup

Requires Node >= 6 and npm >= 3 (developed against modern Node/npm in practice).

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080 (override via HOST/PORT env vars)
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
