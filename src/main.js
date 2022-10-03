import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles.css"
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"


loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
