import { createApp } from 'vue';
import './style.css';
import router from './router';
import App from './App.vue';
import axios from 'axios';

createApp(App)
  .use(router)
  .mount('#app');