import { createApp } from 'vue'
import App from './App.vue'
import Container from "@/components/Container/Container.vue"
import router from './router/index.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import pinia from "@/store/index.js"

import './style.css'

const app=createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.component('Container',Container)
app.mount('#app')