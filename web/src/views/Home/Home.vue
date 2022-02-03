<template>
  <div>
    <swiper class="swiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="@/assets/img/swiper1.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="@/assets/img/swiper2.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="@/assets/img/swiper1.jpeg" alt="" />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-2"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in entryList" :key="n.name">
          <i class="sprite" :class="n.icon"></i>
          <div class="py-2">{{ n.title }}</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        收起
      </div>
    </div>
    <!-- end of nav icons -->

    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <!-- #是v-slot的语法糖 -->
      <template #items="{ category }">
        <router-link
          tag="div"
          :to="`/articles/${item._id}`"
          class="pt-2 fs-lg d-flex"
          v-for="(item, index) in category.newsList"
          :key="index"
        >
          <span class="text-info">[{{ item.categoryName }}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{
            item.title
          }}</span>
          <span class="text-grey-1 fs-sm mr-4">{{
            item.createdAt | date
          }}</span>
        </router-link>
      </template>
    </m-list-card>
    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{ category }">
        <div class="d-flex flex-wrap p-1" style="margin: 0 -0.5rem">
          <router-link
            tag="div"
            :to="`/heroes/${item._id}`"
            style="width: 20%"
            class="p-2 text-center"
            v-for="(item, index) in category.heroList"
            :key="index"
          >
            <img :src="item.avatar" class="w-100" alt="" />
            <div>{{ item.name }}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>
    <m-list-card icon="news" title="精彩内容"></m-list-card>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "",
  components: {},
  data() {
    return {
      entryList: [
        { title: '爆料站', icon: 'blz' },
        { title: '故事站', icon: 'gsz' },
        { title: '周边商城', icon: 'zbsc' },
        { title: '体验站', icon: 'tyf' },
        { title: '新人专区', icon: 'xrzq' },
        { title: '荣耀·传承', icon: 'rycc' },
        { title: '王者营地', icon: 'wzyd' },
        { title: '公众号', icon: 'gzh'},
      ],

      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 3000,
        },
        // Some Swiper option/callback...
      },
      newsCats: [],
      heroCats: [],
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    },
  },
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    },
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  },
};
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";

.pagination-home {
  .swiper-pagination-bullet {
    border-radius: 2px;
    background: map-get($colors, "white");

    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;

  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;

    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
