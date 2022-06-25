//引入Vue

import {createApp} from 'vue'
//引入App

import App from './App.vue'
//关闭Vue的生产提示
createApp(App).config.productionTip=false

 createApp(App).mount('#app')