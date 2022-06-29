<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    console.log('Home组件即将被销毁了')
  },
  mounted() {
    console.log('Home子组件挂在完毕了')
    window.homeRouter=this.$route
    window.homeRouter=this.$router
  }
}
</script>

<style scoped>

</style>