<template>
	<div class="g">
		<div>&nbsp;</div>
		<div>&nbsp;</div>
		<div>&nbsp;</div>
		<div class="nowTime">
		   <p>{{showtimes}}</p>
		   <p>本站已经运行了：{{diffDate}}</p>
		</div>
		<div class="aa">
			<p>Vue+SpringBoot+Nginx</p>
			<p>阿里云域名+服务器</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showtimes: "",
				diffDate: '',
			}
		},
		created() {
			this.showTimes();
			this.showDiffDate();
		},
		methods: {

			diffDateTime() {
				let dat = "2021-04-15 11:11:11"
				let getYeardata = dat.split(" ")[0];
				let getTimedata = dat.split(" ")[1];
				//  年月日  时分秒
				const beforeYear = getYeardata.split("-")[0];
				const beforeMonth = getYeardata.split("-")[1];
				const beforeDate = getYeardata.split("-")[2];
				const beforeHours = getTimedata.split(":")[0];
				const beforeMinutes = getTimedata.split(":")[1];
				const beforeSeconds = getTimedata.split(":")[2];
				const myDate = new Date();
				myDate.getFullYear(); //获取完整的年份(4位,1970-????)  
				myDate.getMonth(); //获取当前月份(0-11,0代表1月)      
				myDate.getDate(); //获取当前日(1-31)  
				myDate.getHours(); //获取当前小时数(0-23)  
				myDate.getMinutes(); //获取当前分钟数(0-59)  
				myDate.getSeconds(); //获取当前秒数(0-59)  

				// 计算差值  
				const getDifference = (myDate.getFullYear() - beforeYear) * 365 * 24 * 60 * 60 +
					(myDate.getMonth() - beforeMonth + 1) * 30 * 24 * 60 * 60 +
					(myDate.getDate() - beforeDate) * 24 * 60 * 60 +
					(myDate.getHours() - beforeHours) * 60 * 60 +
					(myDate.getMinutes() - beforeMinutes) * 60 +
					(myDate.getSeconds() - beforeSeconds)
				let days = Math.floor(getDifference / (60 * 60 * 24));
				let hours = Math.floor((getDifference % (60 * 60 * 24)) / (60 * 60));
				let minutes = Math.floor((getDifference % (60 * 60)) / (60));
				let seconds = Math.round((getDifference % (60)));
				var diffDate = days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
				this.diffDate = diffDate
				// console.log(diffDate)
			},
			// 显示当前时间
			timeFormate(timeStamp) {
				let year = new Date(timeStamp).getFullYear();
				let month =
					new Date(timeStamp).getMonth() + 1 < 10 ?
					"0" + (new Date(timeStamp).getMonth() + 1) :
					new Date(timeStamp).getMonth() + 1;
				let date =
					new Date(timeStamp).getDate() < 10 ?
					"0" + new Date(timeStamp).getDate() :
					new Date(timeStamp).getDate();
				let hh =
					new Date(timeStamp).getHours() < 10 ?
					"0" + new Date(timeStamp).getHours() :
					new Date(timeStamp).getHours();
				let mm =
					new Date(timeStamp).getMinutes() < 10 ?
					"0" + new Date(timeStamp).getMinutes() :
					new Date(timeStamp).getMinutes();
				let ss =
					new Date(timeStamp).getSeconds() < 10 ?
					"0" + new Date(timeStamp).getSeconds() :
					new Date(timeStamp).getSeconds();
				let week = new Date(timeStamp).getDay();
				let weeks = ["日", "一", "二", "三", "四", "五", "六"];
				let getWeek = "星期" + weeks[week];
				var showtime =
					year +
					"年" +
					month +
					"月" +
					date +
					"日" +
					" " +
					hh +
					":" +
					mm +
					":" +
					ss +
					" " +
					getWeek;
				// console.log(showtime)
				this.showtimes = showtime
			},
			showTimes() {
				this.timeFormate(new Date());
				setInterval(this.showTimes, 1000);
				this.clear();
			},
			clear() {
				clearInterval(this.nowTimes);
				this.showtime = null;
			},
			showDiffDate() {
				this.diffDateTime();
				setInterval(this.showDiffDate, 1000);
			}
		},
	}
</script>

<style>
	.aa {
		/* background-color: red; */
		margin-top: 15%;
		text-align: center;
	}

	.nowTime {
		/* background-color: red; */
		/* margin-top: 30px; */
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
