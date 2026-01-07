import './assets/main.css'
import './assets/tailwind.css'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import { VApp, VMain, VNavigationDrawer, VList, VListItem } from 'vuetify/components'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

// apply persisted theme if available
try {
    const s = localStorage.getItem('baseapp.settings')
    if (s) {
        const settings = JSON.parse(s)
        if (settings.theme === 'dark') document.documentElement.classList.add('theme-dark')
        if (settings.theme === 'light') document.documentElement.classList.remove('theme-dark')
        if (settings.language === 'fa') document.documentElement.setAttribute('dir', 'rtl')
        else document.documentElement.setAttribute('dir', 'ltr')
    }
} catch (e) {
    // ignore
}

app.use(createPinia())
app.use(router)
app.use(i18n)

// Vuetify: explicitly register used components so layout provider is available
const vuetify = createVuetify({
    components: { VApp, VMain, VNavigationDrawer, VList, VListItem },
})
app.use(vuetify)

app.mount('#app')
