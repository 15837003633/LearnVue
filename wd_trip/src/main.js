import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const store = createPinia()

app.use(router)
app.use(store)
app.mount('#app')
