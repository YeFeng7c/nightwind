<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
 <div id="v-content" v-bind:style="{minHeight: Height+'px'}"> <router-view/></div>
    <footer class="foot"><a href="https://beian.miit.gov.cn/" target="_blank">陕ICP备2021004731号</a></footer>
 </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    //动态设置内容高度 让footer始终居底   header+footer的高度是100
        this.Height = document.documentElement.clientHeight - 100;
    　　//监听浏览器窗口变化　
        window.onresize = ()=> {this.Height = document.documentElement.clientHeight -100}
  }
}
</script>

<style >
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body{
	 background-color: #E2E7E1;
}
.foot{
	text-align: center;
}
	a{
	text-decoration:none;
	color:black;
	}
	a:hover{text-decoration:none}
</style>
