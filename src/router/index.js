import Vue from 'vue'
import Router from 'vue-router'
import dataserver from '../components/dataserver/dataserver.vue'
import goodsguide from '../components/goodsguide/goodsguide.vue'
import haitao from '../components/haitao/haitao.vue'
import newretail from '../components/newretail/newretail.vue'
import index from '../components/index/index.vue'
import goodsdetail from '../components/pages/goodsdetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
       
      ]
      },
       {//商城
        path: '/index',
        name: 'index',
        component: index,
        },
        {//海淘
          path:'/haitao',
          name:'haitao',
          component:haitao
        },
        {//商品导购
          path:'/goodsguide',
          name:'goodsguide',
          component:goodsguide
        },
        {//数据服务
          path:'/dataserver',
          name:'dataserver',
          component:dataserver
        },
        {//新零售
          path:'/newretail',
          name:'newretail',
          component:newretail
        },
        {//
          path:'/goodsdetail',
          name:'goodsdetail',
          component:goodsdetail
        }
  
    
  
]
})
