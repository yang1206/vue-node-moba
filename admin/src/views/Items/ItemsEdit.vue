<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <!-- <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="upLoadUrl"
          :headers="getAuthHeader_mixin()"
          :show-file-list="false"
          :on-success="afterUpload"
          
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      model: {},
      icon:''
    };
  },
  props: {
    id: {},
  },
  methods: {
    async save() {
      if (this.model.name) {
        let res;
        if (this.id) {
          res = await this.$http.put(`rest/items/${this.id}`, this.model);
        } else {
          res = await this.$http.post("rest/items", this.model);
        }
        if (res) {
          this.$message({
            type: "success",
            message: "保存成功",
          });
        }
        this.$router.push("/items/list");
      }
    },
    async fetch() {
      const res = await this.$http.get(`rest/items/${this.id}`);
      this.model = res.data;
    },
    afterUpload(res){
      this.$set(this.model,'icon',res.url)
      this.model.icon = res.url
    }
  },
  created() {
    this.id && this.fetch();
  },
};
</script>

<style scoped>

</style>
