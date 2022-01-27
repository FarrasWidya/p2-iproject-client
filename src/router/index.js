import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:()=> import('../views/HomePage.vue')
  },
  {
    path:'/login',
    component:()=> import('../views/LoginPage.vue')
  },
  {
    path:'/contents/:id',
    component:()=> import('../views/ContentDetailPage.vue')
  },
  {
    path:'/register',
    component:()=> import('../views/RegisterPage.vue')
  },
  {
    path:'/form',
    component:()=> import('../views/AddPostPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if (to.path === '/form' && !localStorage.access_token) {
    next('/login')
  }else if (to.path === '/login' && localStorage.access_token){
    next('/')
  }else{
    next()
  }
})

export default router
