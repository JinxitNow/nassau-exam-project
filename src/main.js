import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'   // <<< WICHTIG

const app = createApp(App)

app.use(router)                 // <<< SUPER WICHTIG
app.mount('#app')
