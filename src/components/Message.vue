<template>
  <div class="all-sty">
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

  <!--  <el-table :data="list" height="300" >
        <el-table-column prop="message_name" label="名字" width="100">
       </el-table-column>
        <el-table-column prop="message_info" label="内容" >
        </el-table-column>
        <el-table-column prop="message_time" label="时间" width="160">
        </el-table-column>
        <el-table-column label="" width="100">
          <button class="reply" @click="dialogFormVisible = true">回复</button>
        </el-table-column>
        <el-table-column prop="id" label="id" width="60">
       </el-table-column>
      </el-table>
-->

<el-card class="el-card-d" shadow="always">
             <div class="infinite-list-wrapper" style="overflow:auto;">
                <el-timeline
                  infinite-scroll-disabled="disabled">
                  <el-timeline-item v-for="(item,index) in list"  :key="index" :timestamp='item.message_time' placement="top">
                    <el-card class="el-card-m" style="height:120px">
                      <h4>{{item.message_name}}：</h4>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.message_info}}</p>
                    </el-card>
                    <button class="reply" @click="dialog(item.id,item.message_name)">回复</button>
                       <div v-for="(replyItem,index) in replyList" :key="index">
                                  <div v-if="replyItem.message_id == item.id" >
                                   <el-timeline-item  :timestamp='replyItem.reply_date' placement="top" style="margin-top:30px">
                                       <el-card class="el-card-m" style="height:120px; margin-top:20px">
                                          <h4>{{replyItem.reply_name}}&nbsp;回复给：{{item.message_name}}</h4>
                                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{replyItem.reply_info}}</p>
                                        </el-card>
                                       <button class="reply" @click="dialog(replyItem.id,replyItem.reply_name)">回复</button>
                                         </el-timeline-item>
                                  </div>
                                  </div>
                  </el-timeline-item>
              </el-timeline>
              </div>
            </el-card>

          <el-dialog title="留言回复" :visible.sync="dialogFormVisible">
                    <el-form :model="reply_form">
                      <el-form-item label="回复给">
                        <span>{{name}}</span>
                      </el-form-item>
                      <el-form-item label="输入名字">
                        <el-input type="textarea" :rows="1" v-model="reply_form.reply_name" auto-complete="off"></el-input><br/>
                      </el-form-item>
                     <el-form-item label="输入内容">
                        <el-input type="textarea" :rows="3" v-model="reply_form.reply_info" auto-complete="off"></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="reply()">确 定</el-button>
                    </div>
                  </el-dialog>
    </div>
  </div>
</template>

<script >
  export default {
    data() {
      return {
        id: '',
        name: '',
        dialogFormVisible: false,
        formLabelWidth: '80px',
        list: [],
        replyList: [],
        form: {
          message_name: '',
          message_info: '',
        },
        reply_form: {
          message_id: '',
          reply_name: '',
          reply_info: '',
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
            this.$message({
                  showClose: true,
                  message: res.body.message,
                  type: 'success'
                });
              //window.location.reload()
              this.Refresh()
              this.form.message_name = ""
              this.form.message_info = ""
          } else {
             this.$message({
                  showClose: true,
                  message: res.body.message,
                  type: 'warning'
                });
          }

        }, res => {
          // console.log(res);
        });
      },
      dialog(id,name){
        this.dialogFormVisible = true;
        this.id = id
        this.name = name
        this.reply_form.message_id = id
      },
      Refresh:function(){
        // fetch方式实现跨域
              this.$http.post('http://106.14.69.50:8088/message/findAllMessage').then(res => {
                 //console.log(res.body.data)
                this.list = res.body.data
              });
               var data = this.reply_form.message_id
                this.$http.post(('http://106.14.69.50:8088/replyMessage/findReplayMessage'), data, {
                emulateJSON: true
              }).then(res => {
               // console.log(res.body);
                this.replyList = res.body.data
              }, res => {
              });
      },
      reply:function(){
       var data = this.reply_form
          this.$http.post(('http://106.14.69.50:8088/replyMessage/insertReplyMessage'), data, {
          emulateJSON: true
        }).then(res => {
         // console.log(res.body);
           if (res.body.code == 4102) {
            this.$message({
                  showClose: true,
                  message: res.body.message,
                  type: 'success'
                });
                //window.location.reload()
                this.Refresh()
              this.dialogFormVisible = false
          }else {
           this.$message({
                showClose: true,
                message: res.body.message,
                type: 'warning'
              });
          }
        }, res => {

        });
      }
    },
    created() {
      // fetch方式实现跨域
      this.$http.post('http://106.14.69.50:8088/message/findAllMessage').then(res => {
         //console.log(res.body.data)
        this.list = res.body.data
      });
       var data = this.reply_form.message_id
        this.$http.post(('http://106.14.69.50:8088/replyMessage/findReplayMessage'), data, {
        emulateJSON: true
      }).then(res => {
       // console.log(res.body);
        this.replyList = res.body.data
      }, res => {

      });
    },
  }
</script>

<style scoped>

  .all-sty{
    /* background-color: orange; */

  }

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
    float: right;
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
		margin-left: 30%;
    /* margin: 30% 20% 30% 30%; */
  }

  .down{
	 /* position: absolute; */
    width: 700px;
    margin: 20px 20% 20px 30%;
  }
  h3{
	  margin-left: 15%;
  }

  .infinite-list-wrapper{
        width: 100%;
        height: 500px;
      }
      .submit-message{
          width: 100%;
          background: rgb(235, 245, 247);
          color: red;
          letter-spacing:20px;
      }

 /*  @media screen and (max-width: 3000px) and (min-width: 767px) {
      .el-card-d{
        float: left;
        margin-top: 20px;
        margin-left: 10%;
        width: 80%;
        height: 90%;
      }
     }
     */
    /*
    屏幕小于768px的
    */
     @media screen and (max-width:768px) and (min-width: 100px){
       .el-card-d{
        width: 100%;
        height: 100%;
      }
    }

</style>
