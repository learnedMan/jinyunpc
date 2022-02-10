import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import './utils'
import './style/reset.css'
import './style/base.css'

// 路由跳转后回到顶部
router.afterEach((to,from,next)=>{
    window,scrollTo(0,0)
})

Vue.prototype.title = '缙云新闻网';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

