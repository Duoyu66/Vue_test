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
          <router-link    :replace="true" class="list-group-item" active-class="active" to="{name:'guanyu'}">About</router-link>
          <router-link  :replace="true" class="list-group-item" active-class="active" to="/home">Home</router-link>
//城北参透我，是我社情期许过，人身上又来出却只剩归途，我从笔去从容
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
import Banner from "./components/Banner";
	export default {
		name:'App',
components:{Banner}
  }
</script>
