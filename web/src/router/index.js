import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Home/Home.vue')
      },
      {
        path: '/articles/:id',
        name: 'Article',
        component: () => import('../views/Home/Article.vue'),
        props:true
      },
      
    ]
  },
  {
    path: '/heroes/:id',
    name: 'Hero',
    component: () => import('../views/Home/Hero.vue'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
