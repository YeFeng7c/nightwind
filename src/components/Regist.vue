<template>
	<div>
		<div class="a-login">
			<p class="a-tital">Welcome to NightWind</p>
      <p><el-input placeholder="请输入姓名" v-model="form.username" clearable class="a-name"></el-input></p>
			<p><el-input placeholder="请输入邮箱" v-model="form.email" clearable class="a-email"></el-input></p>
			<p>
				<el-input placeholder="请输入验证码" v-model="form.code" clearable class="a-code"></el-input>
				<el-button type="info" class="a-sendCode" @click="sendCode();">发送验证码</el-button>
			</p>
			<p><el-input placeholder="请输入密码" v-model="form.password" show-password class="a-password"></el-input></p>
			<el-button type="primary" round class="a-regist" @click="regist();">注册</el-button>
      <router-link :to="{ path: '/Login' }"><el-link :underline="false" class="registlink">已有账号?立即登录</el-link></router-link>
      <p class="smallTip">*因涉及到用户隐私问题，所以暂时用QQ邮箱进行注册</p>
		</div>
	</div>
</template>

<script scoped>
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
				this.$http.post(('http://106.14.69.50:8088/user/sendEmail'), data, {
				  emulateJSON: true
				}).then(res => {
					// console.log(this.form)
					// console.log(res)
					if(res.body.code == 4206){
						  this.$message({
                showClose: true,
                message: res.body.message,
                type: 'success'
              });
					}else{
             this.$message({
              showClose: true,
              message: res.body.message,
              type: 'warning'
            });
					}
				}, res => {
				});
			},
			regist:function(){
				var data = this.form
				this.$http.post(('http://106.14.69.50:8088/user/regist'), data, {
				  emulateJSON: true
				}).then(res => {
					// console.log(this.form)
					// console.log(res)
					if(res.body.code == 4204){
						  this.$message({
                showClose: true,
                message: res.body.message,
                type: 'success'
              });
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
.a-tital{
	font-size: 28px;
	font-family: 微软雅黑;
	font-weight: bold;
	color: #FFFFFF;
	text-align: center;
}
.a-login{
	/* background-color: red; */
	width: 600px;
	position: absolute;
	left: 50%;
	top:40%;
	transform: translate(-50%,-50%);
}
.a-code{
	/* position: fixed; */
	/* display: inline; */
	margin-left: 150px;
	width: 200px;
}
.a-sendCode{
	/* display: inline; */

	width: 100px;
}
.a-regist{
	width: 140px;
	margin-left: 230px;
}
.a-name{
	margin-left: 150px;
	width: 300px;
}
.a-email{
	margin-left: 150px;
	width: 300px;
}
.a-password{
	margin-left: 150px;
	width: 300px;
}
.smallTip{
  text-align: center;
}
.registlink{
	float: right;
	margin-top: 14px;
}
</style>
