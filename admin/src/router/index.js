import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue'),
    meta: { isPublic: true }
  },

  {
    path: '/main',
    name: 'main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/categories/create',
        component: () => import('../views/Category/CategoryEdit.vue')
      },
      {
        path: '/categories/list',
        component: () => import('../views/Category/CategoryList.vue')
      },
      {
        path: '/categories/edit/:id',
        component: () => import('../views/Category/CategoryEdit.vue'),
        props: true
      },
      {
        path: '/items/create',
        component: () => import('../views/Items/ItemsEdit.vue'),
      },
      {
        path: '/items/list',
        component: () => import('../views/Items/ItemsList.vue'),
      },
      {
        path: '/items/edit/:id',
        component: () => import('../views/Items/ItemsEdit.vue'),
        props: true
      },
      {
        path: '/heroes/create',
        component: () => import('../views/Hero/HeroEdit.vue'),
      },
      {
        path: '/heroes/list',
        component: () => import('../views/Hero/HeroList.vue'),
      },
      {
        path: '/heroes/edit/:id',
        component: () => import('../views/Hero/HeroEdit.vue'),
        props: true
      },
      {
        path: '/articles/create',
        component: () => import('../views/Article/ArticleEdit.vue'),
      },
      {
        path: '/articles/list',
        component: () => import('../views/Article/ArticleList.vue'),
      },
      {
        path: '/articles/edit/:id',
        component: () => import('../views/Article/ArticleEdit.vue'),
        props: true
      },
      {
        path: '/ads/create',
        component: () => import('../views/Ad/AdEdit.vue'),
      },
      {
        path: '/ads/list',
        component: () => import('../views/Ad/AdList.vue'),
      },
      {
        path: '/ads/edit/:id',
        component: () => import('../views/Ad/AdEdit.vue'),
        props: true
      },
      {
        path: '/admin_users/create',
        component: () => import('../views/AdminUser/AdminUserEdit.vue'),
      },
      {
        path: '/admin_users/list',
        component: () => import('../views/AdminUser/AdminUserList.vue'),
      },
      {
        path: '/admin_users/edit/:id',
        component: () => import('../views/AdminUser/AdminUserEdit.vue'),
        props: true
      },

    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }else{
    // router.push('/main')
  }
  next()
})
export default router
