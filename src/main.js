import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { myFirstPlugin } from './plugins/myFirstPlugin'

createApp(App).use(myFirstPlugin).mount('#app')
