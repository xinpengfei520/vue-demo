# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Vue 2 demo/learning project scaffolded from the legacy `vue-cli 2` "webpack" template (raw Webpack 3 config in `build/`/`config/` — not Vite, not `vue-cli 3+`, no `vue.config.js`). Stack: Vue 2.5, vue-router 3, Element UI 2.13. No Vuex or other state management is used.

## Commands

- `npm run dev` (or `npm start`) — start dev server with hot reload at `localhost:8080` (override via `HOST`/`PORT` env vars)
- `npm run build` — production build via `node build/build.js`
- `npm run build --report` — production build with bundle analyzer

There is **no lint, test, or CI setup** in this repo — don't assume `npm test` or `npm run lint` exist.

## Code conventions

- `@` is aliased to `src/` in imports (configured in `build/webpack.base.conf.js`)
- 2-space indentation, LF line endings (per `.editorconfig`)
- Babel 6 config lives in `.babelrc`, not `babel.config.js`
