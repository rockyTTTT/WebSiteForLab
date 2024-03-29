import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/base.css'
import 'amfe-flexible'
createApp(App).use(router).mount('#app')
