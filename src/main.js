import './assets/scss/main.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { useAuthStore } from './stores/AuthStore'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createPinia } from 'pinia';

const pinia = createPinia();

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')