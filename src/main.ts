import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { router } from './route';



const app = createApp(App).use(router);
app.mount('#app');