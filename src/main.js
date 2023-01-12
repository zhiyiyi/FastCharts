import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as echars from 'echarts'

import {createPinia} from "pinia";

const pinia = createPinia()
import {router} from "./router/index.js";

const app = createApp(App);
app.config.globalProperties.$echarts = echars
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
