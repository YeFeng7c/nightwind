<template>
  <div>
	  <div>&nbsp;</div>
	  <div>&nbsp;</div>
      <div class="mid">
		 <span class="tips">有什么话想说的就留个言吧</span><br/>
      <el-input placeholder="请输入名字" v-model="form.message_name" clearable>
      </el-input><br />
      <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="form.message_info" class="el-input-info">
      </el-input><br />
      <el-button type="primary" @click="submit();">留言</el-button>
    </div>
    <div class="down">
      <el-table :data="list" height="250">
        <el-table-column prop="message_name" label="名字" width="100">
        </el-table-column>
        <el-table-column prop="message_info" label="内容" >
        </el-table-column>
        <el-table-column prop="message_time" label="时间" width="160">
        </el-table-column>
        <el-table-column label="" width="100">
          <button class="reply" @click="reply();">回复</button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        form: {
          message_name: '',
          message_info: '',
        },
      };
    },
    methods: {
      submit: function() {
        var data = this.form
        this.$http.post(('http://106.14.69.50:8088/message/info'), data, {
          emulateJSON: true
        }).then(res => {
          // console.log(res.body);
          if (res.body.code == 4000) {
            alert(res.body.message)
              window.location.reload()
          } else {
            alert(res.body.message)
          }

        }, res => {
          // console.log(res);
        });
      },
      reply:function(){
        alert("没用")
      }
    },
    created() {
      // fetch方式实现跨域
      this.$http.post('http://106.14.69.50:8088/message/findAllMessage').then(res => {
        // console.log(res)
        this.list = res.body.data
      })
    },
  }
</script>

<style>

	.tips{
		font-size: 22px;
		font-weight: bold;
		 margin-left: 15%;
		 margin-top: 20px;
	}

  .reply{
    width: 60px;
    height: 30px;
    color: wheat;
    border: none;
    background-color: orange;
  }
  .el-input {
    /* position: absolute; */
	 margin-top: 20px;
    width: 180px;
    margin-left: 15%;
  }

  .el-input-info {
    /* position: absolute; */
    width: 300px;
    margin-left: 15%;
    margin-top: 20px;
  }

.el-button{
   /* position: absolute; */
    margin-top: 20px;
   margin-left: 15%;
}

  .mid {
	/* position: absolute; */
    /* background-color: red; */
	   height: 300px;
		width: 600px;
		margin-top: 100px;
		margin-left: 20%;
    /* margin: 30% 20% 30% 30%; */
  }

  .down{
	 /* position: absolute; */
    width: 700px;
    margin: 20px 20% 20px 20%;
  }
  h3{
	  margin-left: 15%;
  }
</style>
