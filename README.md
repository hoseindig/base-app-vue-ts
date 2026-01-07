# base-app-vue-ts

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

---

## Added UI

- **Sidebar** — a left navigation sidebar (`src/components/Sidebar.vue`) with links to Home and About. It hides on small screens.
- **Welcome** — a greeting component (`src/components/Welcome.vue`) that shows "Good morning", "Good afternoon", or "Good evening" depending on your local time.
- **To‑do List** — a simple todo component (`src/components/TodoList.vue`) with add/complete/remove and localStorage persistence. It is included on the Home page alongside the welcome content.

- **Weather page** — `src/views/WeatherView.vue` + `src/components/WeatherSearch.vue` provide an autocomplete city search (via open-meteo geocoding API) and show current weather (via open-meteo forecast API).

- **Profile page** — `src/views/ProfileView.vue` allows changing your name, selecting app theme (Light/Dark/Auto), and switching language (English / فارسی). On first visit the app prompts for your name and saves it to Local Storage.

- **i18n** — the app uses `vue-i18n` to support **English** and **فارسی**; language choice is saved in Local Storage.

To try it out: run `npm install` (to ensure `vue-i18n` is installed), then `npm run dev`, open the app, and visit Home, Weather, or Profile pages. Add items to the To‑do and refresh to see they persist. Change language or theme in the Profile page to see changes saved.
