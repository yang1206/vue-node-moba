<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option
            v-for="item of categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="文章详情">
        <vue-editor
          v-model="model.body"
          id="editor"
          useCustomImageHandler
          @image-added="handleImageAdded"
        ></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "",
  components: { VueEditor },
  data() {
    return {
      model: {},
      categories: [],
      htmlForEditor: "",
    };
  },
  props: {
    id: {},
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      var formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post("upload", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },

    async save() {
      if (this.model.title) {
        let res;
        if (this.id) {
          res = await this.$http.put(`rest/articles/${this.id}`, this.model);
        } else {
          res = await this.$http.post("rest/articles", this.model);
        }
        if (res) {
          this.$message({
            type: "success",
            message: "保存成功",
          });
        }
        this.$router.push("/articles/list");
      }
    },
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data.filter((item) => {
        if (item.parent) {
          return item.parent.name === "新闻分类";
        }
        return false;
      });
      
    },
  },
  created() {
    this.id && this.fetch();
    this.fetchCategories();
  },
};
</script>

<style scoped>
@import "~vue2-editor/dist/vue2-editor.css";
</style>
