<template>
	<div>
		<div class="login">
			<p class="tital">Welcome to NightWind</p>
			<p><el-input placeholder="请输入邮箱" v-model="form.email" clearable class="loemail"></el-input></p>
			<p><el-input placeholder="请输入密码" v-model="form.password" show-password class="lopwd"></el-input></p>
			<el-button type="primary" round class="regist" @click="login();">登录</el-button>
			<router-link :to="{ path: '/Regist' }"><el-link :underline="false" class="registlink">没有账号?立即注册</el-link></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					email:'',
					password:''
				}
			}
			},
			methods: {
				login:function(){
					var data = this.form
					this.$http.post(('http://106.14.69.50:8088/user/login'), data, {
					  emulateJSON: true
					}).then(res => {
						// console.log(this.form)
						// console.log(res)
						if(res.body.code == 4031){
             this.$message({
                    showClose: true,
                    message: res.body.message,
                    type: 'success'
                  });
							this.$router.push({path:'/MyInfo'})
						}else{
             this.$message({
                  showClose: true,
                  message: res.body.message,
                  type: 'warning'
                });
						}
					}, res => {
					});
				}
		}
	}
</script>

<style scoped>

.login{
	/* background-color: red; */
	width: 600px;
	position: absolute;
	left: 50%;
	top:40%;
	transform: translate(-50%,-50%);
}
.tital{
	font-size: 28px;
	font-family: 微软雅黑;
	font-weight: bold;
	color: #FFFFFF;
	text-align: center;
}
.code{
	/* position: fixed; */
	/* display: inline; */
	width: 60%;
}
.sendCode{
	/* display: inline; */
	width: 38%;
}
.regist{
	width: 140px;
	margin-left: 230px;
	height: 40px;
}
.registlink{
	float: right;
	margin-top: 14px;
}
.loemail{
	margin-left: 150px;
	width: 300px;
}
.lopwd{
	margin-left: 150px;
	width: 300px;
}
</style>
