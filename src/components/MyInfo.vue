<template>
  <div>
	<div>&nbsp;</div>
	<div>&nbsp;</div>
	<div class="header">好家伙，你登录成功了</div>
	<div class="hello">
	 <p>名字：{{name}}</p>
	 <p>邮箱：{{email}}</p>
	</div>
  </div>
</template>

<script >
  export default {
    data() {
      return {
          name:'',
          email:''
      }
    },
    created() {
       this.$http.post('http://106.14.69.50:8088/user/findUserByEmail').then(res => {
          this.name = res.body.data[0].username
          this.email = res.body.data[0].email
       })
     },
  }
</script>

<style scoped>
.hello{
	margin-top: 5%;
	text-align: center;
	font-size: 22px;
	font-weight: bold;
}
.header{
	margin-top: 10%;
	text-align: center;
	font-size: 22px;
	font-weight: bold;
}
</style>
