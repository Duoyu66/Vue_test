//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import router from './router'
//引入router
import VueRouter from "vue-router";
Vue.use(VueRouter)
//关闭Vue的生产提示
Vue.config.productionTip = false
//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})
