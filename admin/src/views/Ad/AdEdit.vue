<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}广告位</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>

      <el-form-item label="广告">
        <el-button @click="model.items.push({})"
          ><i class="el-icon-plus" />添加广告</el-button
        >
        <el-row type="flex" style="flex-wrap: wrap">
          <el-col :md="24" v-for="(item, index) in model.items" :key="index">
            <br/>
            <br/>
            <el-form-item label="跳转链接(URL):">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片:" style="margin-top:0.5rem">
              <el-upload
                class="avatar-uploader"
                :action="upLoadUrl"
                :show-file-list="false"
                :headers="getAuthHeader_mixin()"
                :on-success="(res) => $set(item, 'image', res.url)"
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-button
                size="small"
                type="danger"
                @click="model.items.splice(index, 1)"
                >删除</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
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
      model: {
        items: [],
      },
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
          res = await this.$http.put(`rest/ads/${this.id}`, this.model);
        } else {
          res = await this.$http.post("rest/ads", this.model);
        }
        if (res) {
          this.$message({
            type: "success",
            message: "保存成功",
          });
        }
        this.$router.push("/ads/list");
      }
    },
    async fetch() {
      const res = await this.$http.get(`rest/ads/${this.id}`);
      this.model = { ...res.data, ...res.model };
      // console.log(this.model);
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>

<style scoped>

</style>
