import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import(/* webpackChunkName: "Details" */ '../views/Details.vue')
  },
  {
    path: '/imgList/:id',
    name: 'ImgList',
    component: () => import(/* webpackChunkName: "ImgList" */ '../views/ImgList.vue')
  },
  {
    path: '/newsList/:id',
    name: 'NewsList',
    component: () => import(/* webpackChunkName: "NewsList" */ '../views/NewsList.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */ '../views/Search.vue')
  },
  {
    path: '/videoList/:id',
    name: 'VideoList',
    component: () => import(/* webpackChunkName: "VideoList" */ '../views/VideoList.vue')
  },
  {
    path: '*',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  routes
})

/** 解决跳转重复路由报错问题 */ 
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router
