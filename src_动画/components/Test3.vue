<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group
        name="animate__animated animate__bounce"

        enter-active-class="animate__jello"
        leave-active-class="animate__backOutUp"
        appear>
      <h1 key="1" v-show="!isShow">你好啊</h1>
      <h1 key='2' v-show="isShow">你好啊</h1>

    </transition-group>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: "Test",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: yellow;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }

}
</style>