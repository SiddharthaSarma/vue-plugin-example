import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { myFirstPlugin } from './plugins/myFirstPlugin';
import i18nPlugin from './plugins/i18n'; 

createApp(App).use(myFirstPlugin).use(i18nPlugin, {greeting: {hello: 'Hello'}}).mount('#app');
