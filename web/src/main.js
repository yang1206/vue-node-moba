import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.scss'
import './assets/iconfont/iconfont.css'

import ListCard from './components/Card/ListCard.vue'
Vue.component('m-list-card',ListCard)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api',
  // baseURL:'http://localhost:3000/web/api'
})


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Swiper,{Navigation,Pagination,Autoplay} from 'swiper'
Swiper.use([Navigation, Pagination,Autoplay])
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)



Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
