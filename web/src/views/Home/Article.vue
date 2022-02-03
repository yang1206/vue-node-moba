<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <i class="iconfont icon-back text-blue"></i>
      <strong class="flex-1 text-blue pl-2">{{ model.title }}</strong>
      <div class="text-grey fs-xs">2012-01-31</div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 boder-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-news"></i>
        <strong class="text-blue fs-lg ml-2">相关资讯</strong>
      </div>
      <div class="pt-2 ">
        <router-link
          class="py-2"
          tag="div"
          :to="`/articles/${item._id}`"
          v-for="item in model.related"
          :key="item._id"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  components: {},
  data() {
    return {
      model: null,
    };
  },
  props: {
    id: { required: true },
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    },
  },
  watch:{
    id:'fetch',
    //完整写法
    // id(){
    //   this.fetch
    // }
  },
  created() {
    this.fetch();
  },
};
</script>

<style lang="scss">
.page-article {
  .icon-back {
    font-size: 1.5385rem;
  }
}
.body {
  img {
    max-width: 100%;
    height: auto;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
