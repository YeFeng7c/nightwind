<template>
<div>
	  <div>&nbsp;</div>
	  <div>&nbsp;</div>
	  <div class="title-box">
      <input type="text" class="title" v-model="article.title" placeholder="请输入标题..." />
      <el-button type="text" @click="openDialog">提交</el-button>
    </div>
    <div class="app-container">
      <mavon-editor v-model="article.content" class="editor" />
    </div>
    <el-dialog :title="`发布文章：${article.title}`" :visible.sync="showDialog" width="30%">
      <el-form label-position="left" label-width="80px">
        <el-form-item label="标签：" style="width:fit-content">
          <el-tag
            :key="tag"
            v-for="tag in article.tags"
            closable
            :disable-transitions="false"
            @close="handleTagClose(tag)"
          >{{tag}}</el-tag>
          <el-input
            v-if="inputTagVisible"
            v-model="inputTag"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleTagInputConfirm"
            @blur="handleTagInputConfirm"
            class="input-new-tag"
          ></el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showTagInput">+ 新标签</el-button>
        </el-form-item>
        <el-form-item label="分类：">
          <el-select v-model="article.category" placeholder="请选择">
            <el-option
              v-for="(category,index) in categories"
              :key="index"
              :label="category"
              :value="category"
            ></el-option>
          </el-select>
          <el-button type="text" @click="showAddCategoryInput = true" class="add-category-btn">自定义分类</el-button>
        </el-form-item>
        <el-collapse-transition>
          <el-form-item label="新分类：" v-show="showAddCategoryInput">
            <el-input v-model="article.newCategory" @keypress.enter.native="addCategory"></el-input>
          </el-form-item>
        </el-collapse-transition>
        <el-form-item label="摘要：">
          <el-input type="textarea" v-model="article.tabloid" rows="4"></el-input>
        </el-form-item>
        <el-form-item label="作者：">
          <el-input type="text" v-model="article.author"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="article.type">原创</el-checkbox>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">发布</el-button>
      </span>
    </el-dialog>
 </div>
</template>

<script>
export default {
  data() {
    return {
     showDialog: false,
           categories: [],
           inputTag: "",
           inputTagVisible: false,
           showAddCategoryInput: false,
           article: {
             title: "",
             content: "",
             category: "",
             tags: [],
             tabloid: "",
             type: true,
             author: "",
             newCategory: "",
           },
    };
  },
  methods: {
// 断言 target 为非空
assertNotEmpty(target, msg) {
  if (!target) {
    this.$message({
      message: msg,
      type: "warning",
    });
    return false;
  }
  return true;
},
// 打开文章信息填写框
openDialog() {
  if (
    this.assertNotEmpty(this.article.title, "请填写文章标题") &&
    this.assertNotEmpty(this.article.content, "请填写文章内容")
  ) {
    this.showDialog = true;
  }
},
  },
};
</script>

<style scoped>
.editor {
  margin-top: 50px;
  height: 650px;
}
.title-box {
  margin-top: 150px;
  display: grid;
  grid-template-columns: 22fr 2fr;
}
.title {
  background: none;
  color: #303133;
  text-indent: 0px;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  display: block;

  border: none;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 0;
  line-height: 1;
  overflow: visible;
  margin-bottom: 15px;
  padding: 4px;
}
.title:focus {
  border-color: #409eff;
}
</style>
