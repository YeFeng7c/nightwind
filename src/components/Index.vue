<template>
	<div class="page">
		<div>
		<div class="navi">
			<div class="name">
				<el-menu mode="horizontal" background-color="#E2E7E1" text-color="#000000">
					<el-menu-item index="/Login" @click="goTo('/Login')" class="item-name">夜の風</el-menu-item>
				</el-menu>

			</div>
			<div class="menu">
				<el-menu
				mode="horizontal"
				background-color="#E2E7E1"
				text-color="#000000"
				>
				<el-menu-item index="/" @click="goTo('/')">首页</el-menu-item>
				<el-menu-item><a href="http://yefeng.link/dist" target="_blank">博客</a></el-menu-item>
				<el-menu-item index="/Message" @click="goTo('/Message')">留言</el-menu-item>
				<el-menu-item index="/About" @click="goTo('/About')">关于</el-menu-item>
				<el-menu-item index="/EditorIndex" @click="goTo('/EditorIndex')">写点文章</el-menu-item>
				<el-menu-item index="/Regist" @click="goTo('/MyInfo')">成为会员</el-menu-item>
				<el-menu-item index="/LuckyPage" @click="goTo('/LuckyPage')">来抽个奖</el-menu-item>
				<el-menu-item><a href="/ds/yefeng.html" target="_blank">打赏</a></el-menu-item>
				<el-menu-item><a href="/sg/sg.html" target="_blank">看你骨骼惊奇，来算一卦</a></el-menu-item>
				</el-menu>
			</div>
		</div>
		</div>
		<router-view />

	</div>
</template>

<script>
	export default {
	  data () {
	    return {

	    }
	  },
	  methods: {
	    goTo(path){
	      this.$router.replace(path)
	    }

	  },
	}
</script>

<style scoped>
	body{
		background-color: #E2E7E1;
	}
	.navi{
		background-color: blue;
	}
	.name{
		display: inline;
		//background-color: red;
		width: 100px;
		font-size: 22px;
		font-weight: bold;
		float: left;
	}
	.menu{
		display: inline;
		background-color: orange;
		/* width: 30%; */
		float: right;
		font-size: 22px;
	}

	.item-name{
		font-size: 20px;
	}

	a{text-decoration:none}
	a:hover{text-decoration:none}
</style>
