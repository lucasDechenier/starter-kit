import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'

// Vuetify
import vuetify from '@/plugins/vuetify'
import router from '@/plugins/router'
import i18n from '@/plugins/i18n'

createApp(App).use(vuetify).use(i18n).use(router).mount('#app')
