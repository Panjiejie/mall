// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import _ from 'lodash'
import store from './store'
// import store from './store'
import './element-variables.scss'
import Distpicker from 'v-distpicker'
import axios from 'axios';

Vue.prototype.axios=axios;
Vue.prototype._ = _
Vue.use(VueAwesomeSwiper) //轮播
Vue.use(iView);
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(axios)
Vue.component('v-distpicker', Distpicker)
// Vue.use(store)
/* eslint-disable no-new */
axios.defaults.baseURL = 'http://192.168.1.180:3002'
// axios.defaults.baseURL = 'http://192.168.1.153:3002'



new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {

  if (to.matched.some(m => m.meta.auth)) {
    // 对路由进行验证     
    console.log(`name->${store.state.user.name}`)
    if (store.state.user.name != '' && store.state.user.name != undefined) { // 已经登陆       
      next() // 正常跳转到你设置好的页面     
    } else {
      // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next({
        path: '/login',
        query: {
          Rurl: to.fullPath
        }
      })　　　　　
    }　　　　
  } else {　　　　　　
    next()　　
  }
})
