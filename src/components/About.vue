<template>
	<div class="g">
		<div>&nbsp;</div>
		<div>&nbsp;</div>
		<div>&nbsp;</div>
		<div class="nowTime">
		   <p>{{nowDate}}&nbsp;{{nowWeek}}</p>
		   <p>本站已经运行了：<span id="momk">{{momk}}</span></p>
		</div>
		<div class="aa">
			<p>Vue+SpringBoot+Nginx</p>
			<p>阿里云域名+服务器</p>
		</div>
	</div>
</template>

<script >
	export default {
		data() {
			return {
				nowDate: "",
				nowWeek:"",
				momk:'',
				// diffDate: '',
			}
		},
		created() {
					setInterval(()=>{
    				this.showDataTime();
    			},1000)
			// this.showDiffDate();
			  let myDate = new Date()
			  // console.log(myDate)
			  let wk = myDate.getDay()
			  let yy = String(myDate.getFullYear())
			  let mm = myDate.getMonth() + 1
			  let dd = String(myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate())
			  let hou = String(myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours())
			  let min = String(myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes())
			  let sec = String(myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds())
			  let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
			  let week = weeks[wk]
			  this.nowDate = yy + '年' + mm + '月' + dd + '日'
			  this.nowTime = hou + ':' + min + ':' + sec
			  this.nowWeek = week
			  // this.showDataTime();
		},
		methods: {

			showDataTime(){
				// window.setTimeout("showDataTime()",1000);
				let BirthDay = new Date("04-15-2021 11:11:11");
				let today = new Date();
				let timeOld = (today.getTime() - BirthDay.getTime());
				let sectimeold = timeOld /1000
				let msPerDay = 24 * 60 * 60 *1000
				let e_daysold = timeOld / msPerDay
				let daysold = Math.floor(e_daysold);
				let e_hrsold = (daysold - e_daysold) * -24
				let hrsold = Math.floor(e_hrsold);
				let e_minsold = (hrsold - e_hrsold) * -60
				let minsold = Math.floor((hrsold - e_hrsold) * -60)
				let seconds = Math.floor((minsold - e_minsold) * -60)
				let momk = daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒"
				this.momk = momk
				// console.log("时间" + momk)
			}
		},
		mounted() {

		},
		beforeDestroy() {
			if(this.showDataTime()){
				clearInterval(this.showDataTime());
			}
		}
	}
</script>

<style scoped>
	.aa {
		/* background-color: red; */
		margin-top: 20%;
		text-align: center;
	}

	.nowTime {
		/* background-color: red; */
		/* margin-top: 30px; */
		margin-right: 20px;
		float: right;
		/* margin-left: 80%; */
		font-family: 楷体;
	}

	.g {
		/* background-color: orange; */
	}
	.runTime{
		font-family: 楷体;
	    background-color: red;
		/* float: right; */

		/* margin-top: 30px; */
	}
</style>
