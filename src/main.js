import App from '@/App.vue'
import '@/assets/css/styles.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
