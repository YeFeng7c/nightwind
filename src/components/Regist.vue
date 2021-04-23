<template>
	<div>
		<div class="login">
			<p class="tital">Welcome to NightWind</p>
			<p><el-input placeholder="请输入姓名" v-model="form.username" clearable class="name"></el-input></p>
			<p><el-input placeholder="请输入邮箱" v-model="form.email" clearable class="email"></el-input></p>
			<p>
				<el-input placeholder="请输入验证码" v-model="form.code" clearable class="code"></el-input>
				<el-button type="info" class="sendCode" @click="sendCode();">发送验证码</el-button>
			</p>
			<p><el-input placeholder="请输入密码" v-model="form.password" show-password class="password"></el-input></p>
			<el-button type="primary" round class="regist" @click="regist();">注册</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				item:{
					email:'',
				},
				form:{
					username:'',
					email:'',
					code:'',
					password:''
				}
			}
		},
		methods: {
			sendCode:function(){
				var data = this.form
				this.$http.post(('http://localhost:8088/user/sendEmail'), data, {
				  emulateJSON: true
				}).then(res => {
					console.log(this.form)
					console.log(res)
					if(res.body.code == 4206){
						alert(res.body.message)
					}else{
						alert(res.body.message)
					}
				}, res => {
				});
			},
			regist:function(){
				var data = this.form
				this.$http.post(('http://localhost:8088/user/regist'), data, {
				  emulateJSON: true
				}).then(res => {
					console.log(this.form)
					console.log(res)
					if(res.body.code == 4204){
						alert(res.body.message)
					}else{
						alert(res.body.message)
					}
				}, res => {
					
				});
			}
		}
	}
</script>

<style>
.tital{
	font-size: 22px;
	font-family: 微软雅黑;
	font-weight: bold;
	color: #FFFFFF;
	text-align: center;
}
.login{
	/* background-color: red; */
	width: 600px;
	position: absolute;
	left: 50%;
	top:30%;
	transform: translate(-50%,-50%);
}
.code{
	/* position: fixed; */
	/* display: inline; */
	margin-left: 150px;
	width: 200px;
}
.sendCode{
	/* display: inline; */
	
	width: 100px;
}
.regist{
	width: 140px;
	margin-left: 230px;
}
.name{
	margin-left: 150px;
	width: 300px;
}
.email{
	margin-left: 150px;
	width: 300px;
}
.password{
	margin-left: 150px;
	width: 300px;
}
</style>
