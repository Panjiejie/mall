import Vue from 'vue'
import Router from 'vue-router'
import Dataserver from 'views/nav/dataserver'
import Goodsguide from 'views/nav/goodsguide'
import Haitao from 'views/nav/haitao'
import Newretail from 'views/nav/newretail'
import Nav from 'views/nav'
import Home from 'views/nav/Home'
import Mine from 'views/mine'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/nav'
    },
    {
      path: '/nav',
      component: Nav,
      children: [{ //首页
          path: '',
          component: Home
        },
        { //海淘
          path: 'haitao',
          component: Haitao
        },
        { //商品导购
          path: 'goodsguide',
          component: Goodsguide
        },
        {//数据服务
          path:'dataserver',
          component:Dataserver
        },
        {//新零售
          path:'newretail',
          component:Newretail
        },
      ]
    },
    { //海淘
      path: '/mine',
      component: Mine
    },
  ]
})
