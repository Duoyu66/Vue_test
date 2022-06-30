<template>
  <h2>我是About的内容</h2>

</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log('About组件即将被销毁了')
  }
}
 /* mounted() {
    console.log('About子组件挂在完毕了')
  }
}*/
</script>

<style scoped>

</style>