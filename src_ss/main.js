//引入vue
import Vue from 'vue'
//引入app
import App from './App'
Vue.config.productionTip=false
new Vue({
    el: "#app",
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus=this
    }
})
