import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './route';
import VueScrollTo from 'vue-scrollto';


const app = createApp(App);
app.use(router)
app.use(VueScrollTo, {
    duration: 1000, // 滾動動畫時間，可根據需要調整
    easing: 'ease', // 滾動動畫的緩動函數，可根據需要調整
});

app.mount('#app');

