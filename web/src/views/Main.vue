<template>
  <div>
    <div class="top-bar bg-black py-2 px-3 d-flex ai-center">
      <img src="@/assets/img/logo.png" alt="" height="30" />
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button href="" class="btn bg-primary" type="button">立即下载</button>
    </div>
    <div class="bg-primary py-2 pt-3 pb-2">
      <div class="nav  nav-inverse jc-around pb-1">
        <div class="nav-item active">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
};
</script>
<style lang="scss" scoped>
.top-bar{
  position: sticky;
  top: 0;
  z-index: 999999;
  }
</style>
