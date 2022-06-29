<template>
  <div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
<!--          <a class="list-group-item" href="./about.html">About</a>-->
<!--          <a class="list-group-item active" href="./home.html">Home</a>-->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>

        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view ></router-view>
<!--            此处到底站是什么组件,得看用户电机的是哪个导航项-->
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Banner from "../pages/Banner";
	export default {
		name:'App',
components:{Banner}
  }
</script>
