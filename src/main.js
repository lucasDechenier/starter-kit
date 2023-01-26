import { createApp } from 'vue'
import '@/style.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import App from '@/App.vue'

const app = createApp(App)

// Vuetify
import vuetify from '@/plugins/vuetify'

// Plugins
import router from '@/plugins/router'
import i18n from '@/plugins/i18n'




app.use(vuetify)
.use(i18n)
.use(router)
.mount('#app')
