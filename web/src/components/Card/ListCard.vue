<template>
  <div class="w-100">
    <m-card :icon="icon" :title="title">
      <div class="nav jc-between">
        <div
          class="nav-item"
          :class="{ active: currentIndex === index }"
          v-for="(category, index) in categories"
          :key="index"
          @click="$refs.list.$swiper.slideTo(index)"
        >
          <div class="nav-link">{{category.name}}</div>
        </div>
      </div>

      <div class="pt-3">
        <swiper class="swiper" ref="list" :options="{autoHeight:true}" @transitionStart="() => currentIndex = $refs.list.$swiper.activeIndex">
          <swiper-slide v-for="(category, index) in categories" :key="index">
            <slot name="items" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>
  </div>
</template>

<script>
import mCard from '@/components/Card/childComp/Card.vue'


export default {
  name: "",
  components: {mCard},
  data() {
    return {
      currentIndex:0
    };
  },
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array,  },
  },

};
</script>

<style scoped>
</style>
