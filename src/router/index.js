import Vue from 'vue'
import Router from 'vue-router'
import Dataserver from 'views/nav/dataserver'
import Goodsguide from 'views/nav/goodsguide'
import Haitao from 'views/nav/haitao'
import Newretail from 'views/nav/newretail'
import Nav from 'views/nav'
import Home from 'views/nav/Home'
import goodsDetail from 'views/goodsdetail/index'
import login from 'views/login/index'
import personalCenter from 'views/personalcenter'
import safeAdmin from 'views/personalcenter/safeAdmin'
import personalSetting from 'views/personalcenter/personalSetting'
import addressAdmin from 'views/personalcenter/addressAdmin'
import myFootpoint from 'views/personalcenter/myFootpoint'
import myOrder from 'views/personalcenter/myOrder'
import myFavorite from 'views/personalcenter/myFavorite'
import changePhonenumber from 'views/personalcenter/safeAdmin/changePhonenumber/index.vue'
import changePhonenumberSecond from 'views/personalcenter/safeAdmin/changePhonenumber/changePhonenumberSecond.vue'
import changeSuccess from 'views/personalcenter/safeAdmin/changePhonenumber/changeSuccess.vue'
import waitingSend from 'views/personalcenter/myOrder/waitingSend/index.vue'

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
        { //商品详情
          path: 'goodsDetail',
          component: goodsDetail
        },
        {//个人中心
          path: 'personalCenter',
          component: personalCenter,
          meta:{auth:true},
          children:[
            { //个人设置
              path: 'personalSetting',
              component: personalSetting,
              meta:{auth:true},
            },
            { //安全管理
              path: 'safeAdmin',
              component: safeAdmin
            },
            {//地址管理
              path:'addressAdmin',
              component:addressAdmin
            },
            {//我的足迹
              path:'myFootpoint',
              component:myFootpoint
            },
            {//我的订单
              path:'myOrder',
              component:myOrder,
              meta:{auth:true},
            },
            {//收藏的商品
              path:'myFavorite',
              component:myFavorite
            },
            {//修改手机号码
              path:'changePhonenumber',
              component:changePhonenumber
            },
            {//修改手机号码第二步
              path:'changePhonenumberSecond',
              component:changePhonenumberSecond
            },
            {//修改手机号码第三步  修改成功
              path:'changeSuccess',
              component:changeSuccess
            },
            {//我的订单 待发货 内部详情页面
              path:'waitingSend',
              component:waitingSend
            }
          ]
        }
      ]
    },
    { //商品详情
      path: '/goodsDetail',
      component: goodsDetail
    },
    { //商品详情
      path: '/login',
      component: login
    },
  ]
})
