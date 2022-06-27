//创建vuex中最为核心的store


import Vuex from "vuex";
import Vue from "vue";
//准备actions用于响应组件中的
Vue.use(Vuex)
const actions = {
    jia(context, value) {
        console.log('actions中的jia被调用了', context, value)
        context.commit('JIA', value)
    },
    jian(context, value) {
        console.log('actions中的jian被调用了', context, value)
        context.commit('JIAN', value)
    }
}

//准备mutations---用于操作数据(state)
const mutations = {
    JIA(state, value) {
        // console.log('mutations中的JIA被调用了',a,b)
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    }

}
//准备state---用于存储数据
const state = {
    sum: 0
}
//创建并暴露store
export default new Vuex.Store({actions, mutations, state})

