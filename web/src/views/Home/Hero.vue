<template>
  <div class="page-hero">
    <div class="top-bar bg-black py-2 px-3 d-flex ai-center text-white">
      <img src="@/assets/img/logo.png" alt="" height="30" />
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link to="/" href="" class="" tag="div">更多英雄 &gt;</router-link>
    </div>
    <div class="top" :style="{ 'background-image': `url(${model.banner})` }">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <div class="fs-sm">{{ model.title }}</div>
        <h2 class="my-2">{{ model.name }}</h2>
        <div class="fs-sm">
          {{
            model.categories && model.categories.map((v) => v.name).join("/")
          }}
        </div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{ model.scores.difficult }}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{ model.scores.skills }}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{ model.scores.attack }}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{ model.scores.survive }}</span>
          </div>
          <router-link tag="span" to="/" class="text-gray fs-sm"
            >皮肤: 2&gt;</router-link
          >
        </div>
      </div>
    </div>
    <!-- end of top -->

    <div>
      <div class="px-3 bg-white">
        <div class="nav d-flex jc-around pt-3 py-2 border-bottom">
          <div class="nav-item active">
            <div class="nav-link">英雄初时</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>
      </div>
      <swiper>
        <swiper-slide>
          <div>
            <div class="p-3 bg-white border-bottom">
              <div class="d-flex">
                <router-link tag="button" to="/" class="btn btn-lg flex-1">
                  <i class="iconfont icon-menu"></i>
                  英雄介绍视频
                </router-link>
                <router-link tag="button" to="/" class="btn flex-1 btn-lg ml-2">
                  <i class="iconfont icon-menu"></i>
                  一图识英雄
                </router-link>
              </div>
              <!-- skills -->
              <div class="skills bg-white mt-4">
                <div class="d-flex jc-around">
                  <img
                    v-for="(item, index) in model.skills"
                    @click="btnClick(index)"
                    class="icon"
                    :class="{ active: currentSkillIndex === index }"
                    :src="item.icon"
                    :key="index"
                  />
                </div>
                <div v-if="currentSkill">
                  <div class="d-flex pt-4 pb-3">
                    <h3 class="m-0">{{ currentSkill.name }}</h3>
                    <span class="text-grey-1 ml-4">
                      (冷却值: {{ currentSkill.delay }} 消耗:
                      {{ currentSkill.cost }})
                    </span>
                  </div>
                  <p>{{ currentSkill.description }}</p>
                  <div class="border-bottom"></div>
                  <p class="text-grey-1">小提示: {{ currentSkill.tips }}</p>
                </div>
              </div>
            </div>

            <!-- end of skills -->

            <card plain icon="menu" title="出装推荐" class="hero-items">
              <div class="fs-xl">顺风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in model.items1" :key="item.name">
                  <img :src="item.icon" alt="" class="icon">
                  <div class="fs-xs">{{item.name}}</div>
                </div>
              </div>
              <div class="border-bottom mt-3"></div>
              <div class="fs-xl mt-3">逆风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in model.items2" :key="item.name">
                  <img :src="item.icon" alt="" class="icon">
                  <div class="fs-xs">{{item.name}}</div>
                </div>
              </div>
            </card>
            <card plain icon="menu" title="使用技巧">
              <p class="m-0">{{model.usageTips}}</p>
            </card>
            <card plain icon="menu" title="对抗技巧">
              <p class="m-0">{{model.battleTips}}</p>
            </card>
            <card plain icon="menu" title="团战思路">
              <p class="m-0">{{model.teamTips}}</p>
            </card>
            <card plain icon="menu" title="英雄关系">
              <div class="fs-xl">最佳搭档</div>
              <div v-for="item in model.partners" :key="item.name" class="d-felx pt-3">
                <div class="d-flex">
                  <img :src="item.hero.avatar" alt="" height="50">
                <p class="flex-1 ml-3 m-0">{{item.description}}</p>
                </div>
              </div>
              <div class="border-bottom mt-3"></div>
            </card>
          </div>
        </swiper-slide>
        <swiper-slide></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card/childComp/Card.vue'
export default {
  name: "",
  components: {Card},
  data() {
    return {
      model: {
        scores: {},
      },
      currentSkillIndex: 0,
    };
  },
  props: {
    id: { required: true },
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
      // console.log(this.model);
    },
    btnClick(index) {
      this.currentSkillIndex = index;
    },
  },
  computed: {
    //使用计算属性根据index返回数据,就是取数组的第几个元素
    currentSkill() {
      return this.model.skills[this.currentSkillIndex];
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style lang="scss" >
@import "@/assets/css/_variables.scss";

.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 0.9rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
    }
  }
  .skills {
    img.icon {
      width: 70px;
      height: 70px;
      border: 3px solid map-get($colors, "white");
      &.active {
        border-color: map-get($colors, "primary");
      }

      border-radius: 45%;
    }
  }
   .hero-items{
      img.icon{
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
    }
}
</style>