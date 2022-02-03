<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}管理员</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
       <el-form-item label="密码">
        <el-input v-model="model.password" type="password" show-password></el-input>
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
      
    };
  },
  props: {
    id: {},
  },
  methods: {
    async save() {
      if (this.model.password) {
        let res;
        if (this.id) {
          res = await this.$http.put(`rest/admin_users/${this.id}`, this.model);
        } else {
          res = await this.$http.post("rest/admin_users", this.model);
        }
        if (res) {
          this.$message({
            type: "success",
            message: "保存成功",
          });
        }
        this.$router.push("/admin_users/list");
      }
    },
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`);
      this.model = res.data;
    },
    
  },
  created() {
    this.id && this.fetch();
    
  },
};
</script>

<style scoped>
</style>
