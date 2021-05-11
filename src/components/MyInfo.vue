<template>
  <div>
	<div>&nbsp;</div>
	<div>&nbsp;</div>
	<div class="header">个人信息</div>
	<div class="hello">
	 <p>名字：{{username}}</p>
	 <p>邮箱：{{useremail}}</p>
	</div>
  </div>
</template>

<script >
  export default {
    data() {
      return {
          username:'',
          useremail:'',
          form:{
            email:sessionStorage.getItem("email")
          }
      }
    },
    created() {
     var data = this.form
      this.$http.post(('http://106.14.69.50:8088/user/findUserByEmail'), data, {
      emulateJSON: true
    }).then(res => {

       if(res.body.code == 4202){
            this.$message({
              dangerouslyUseHTMLString: true,
              message: '你还没有登录，点击左上角进行登录'
            });
       }
       this.useremail = res.body.data[0].email
       this.username = res.body.data[0].username

    }, res => {
    });
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
