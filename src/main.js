import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// import "./axios";




import Toast from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import './assets/main.css'

const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
app.use(router);
app.mount('#app')
