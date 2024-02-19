import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import { createI18n } from 'vue-i18n'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import localesEN from './locales/en.json'
import localesPL from './locales/pl.json'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: localesEN,
    pl: localesPL
  },
  formatFallbackMessages: true,
  silentFallbackWarn: true,
  silentTranslationWarn: true
})

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.use(VueCookies)
app.use(i18n)
app.use(vuetify)

app.mount('#app')
