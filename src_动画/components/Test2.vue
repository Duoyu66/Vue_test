<template>
<div>
  <button @click="isShow=!isShow">显示/隐藏</button>
<transition-group  :appear="true">
  <h1  key="1" v-show="isShow">你好啊</h1>
  <h1 key='2' v-show="isShow">你好啊</h1>

</transition-group>
</div>
</template>

<script>
export default {
  name: "Test",
  data(){
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
h1{
  background-color: yellow;
}
.v-enter-active{
  animation: atguigu 1s;
}
.v-leave-active{
  animation: atguigu 1s reverse;
}
@keyframes atguigu {
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0);
  }

}
</style>