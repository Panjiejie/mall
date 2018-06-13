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
import waitingSendDetail from 'views/personalcenter/myOrder/waitingSend/detail.vue'
import afterSaleDetail from 'views/personalcenter/myOrder/afterSale/detail.vue'//售后详情
import seckill from 'components/public/seckill.vue' //秒杀
import shoppingCart from 'views/nav/shoppingCart' //购物车
import configureRecipient from 'views/nav/shoppingCart/configureRecipient.vue' //购物车收货信息
import submitOrderSuccess from 'views/nav/shoppingCart/submitOrderSuccess.vue' //购物车订单提交成功
import toBrands from 'views/brands/toBrands.vue'//品牌页面
import toBrandDetail from 'views/brands/toBrandDetail.vue'//单一品牌详情页面
import allEvaluation from 'views/brands/allEvaluation.vue'//品牌测评全部详情页面
import relatedProducts from 'views/brands/relatedProducts.vue'//品牌测评全部详情页面

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
        {//秒杀
          path:'seckill',
          component:seckill
        },
        {//购物车
          path:'shoppingCart',
          component:shoppingCart
        },
        {//购物车收货信息
          path:'configureRecipient',
          component:configureRecipient
        },
        {//购物车订单提交成功
          path:'submitOrderSuccess',
          component:submitOrderSuccess
        },
        {//品牌页面
          path:'toBrands',
          component:toBrands
        },
        {//品牌详情
          path:'toBrandDetail',
          component:toBrandDetail
        },
        {//全部品牌测评详情页面
          path:'allEvaluation',
          component:allEvaluation
        },
        {//品牌 全部相关商品页面
          path:'relatedProducts',
          component:relatedProducts
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
            {//我的订单 代发货 首页
              path:'waitingSend',
              component:waitingSend
            },
            {//我的订单 待发货 内部详情页面
              path:'waitingSendDetail',
              component:waitingSendDetail
            },
            {//我的订单 售后服务页面
              path:'afterSaleDetail',
              component:afterSaleDetail,
              meta:{auth:true},
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
