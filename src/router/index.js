import Vue from 'vue'
import Router from 'vue-router'
import Dataserver from 'views/nav/dataserver'
import Goodsguide from 'views/nav/goodsguide'
import Haitao from 'views/nav/haitao'
import Newretail from 'views/nav/newretail'
import Nav from 'views/nav'
import Home from 'views/nav/Home'
import goodsDetail from 'views/goodsdetail/index'
import seckillGoodsDetail from 'views/goodsdetail/seckill-goodsDetail.vue'
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
import waitingSendDetail from 'views/personalcenter/myOrder/waitingSend/detail.vue'//待发货详情页面
import waitingReceiveDetail from 'views/personalcenter/myOrder/waitingReceived/waitingReceivedDetail.vue'//待收货详情页面

import completeOrderDetail from 'views/personalcenter/myOrder/completedOrder/completeOrderDetail.vue'//已完成订单详情页面
import lookAfterSaleDetail from 'views/personalcenter/myOrder/afterSale/detail.vue'//我的订单售后=》查看详情
import afterSaleDetail from 'views/personalcenter/myOrder/afterSale/afterSaleDetail.vue'//我的订单售后=》售后详情
import applyForAfterSales from 'views/personalcenter/myOrder/applyForAfterSales/index.vue'//申请售后第一步页面
import applyForAfterSaleSuccess from 'views/personalcenter/myOrder/applyForAfterSales/applyForAfterSaleSuccess.vue'//申请售后成功页面
import seckill from 'components/public/seckill.vue' //秒杀
import shoppingCart from 'views/nav/shoppingCart' //购物车
import configureRecipient from 'views/nav/shoppingCart/configureRecipient.vue' //购物车收货信息
import submitOrderSuccess from 'views/nav/shoppingCart/submitOrderSuccess.vue' //购物车订单提交成功
import toBrands from 'views/brands/toBrands.vue'//品牌页面
import toBrandDetail from 'views/brands/toBrandDetail.vue'//单一品牌详情页面
import allEvaluation from 'views/brands/allEvaluation.vue'//品牌测评全部详情页面
import relatedProducts from 'views/brands/relatedProducts.vue'//品牌测评全部详情页面
import register from 'views/login/register.vue'//注册首页
import registerIndex from 'views/login/registerIndex.vue'//注册首页
import registerSecond from 'views/login/registerSecond.vue'//注册第二个页面
import registerThird from 'views/login/registerThird.vue'//注册第三个页面
import registerLast from 'views/login/registerLast.vue'//注册第四个页面
import userAgreement from 'views/login/userAgreement.vue'//注册用户协议页面
import loginPassword from 'views/login/loginPassword.vue'//账号密码登录页面
import loginByPhonenumber from 'views/login/loginByPhonenumber.vue'//手机验证码登录页面
import resetPassword from 'views/login/resetPassword.vue'//找回密码页面
import resetPasswordFirst from 'views/login/resetPassword/resetPasswordFirst.vue'//找回密码页面
import resetPasswordSecond from 'views/login/resetPassword/resetPasswordSecond.vue'//找回密码页面
import resetPasswordThird from 'views/login/resetPassword/resetPasswordThird.vue'//找回密码页面
import resetPasswordLast from 'views/login/resetPassword/resetPasswordLast.vue'//找回密码页面
// import { WSAENETRESET } from 'constants';
import test from 'components/public/test.vue'
Vue.use(Router)

export default new Router({
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
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
        {//秒杀主页面
          path:'seckill',
          component:seckill
        },
        {//秒杀商品详情页面
          path:'seckillGoodsDetail',
          component:seckillGoodsDetail
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
            {//我的订单 待收货内部详情页面
              path:'waitingReceiveDetail',
              component:waitingReceiveDetail
            },
            {//我的订单 已完成订单内部详情页面
              path:'completeOrderDetail',
              component:completeOrderDetail
            },
            {//我的订单 售后服务页面
              path:'afterSaleDetail',
              component:afterSaleDetail,
              meta:{auth:true},
            },
            {//我的订单 查看售后详情服务页面
              path:'lookAfterSaleDetail',
              component:lookAfterSaleDetail,
              meta:{auth:true},
            },
            {//申请售后页面
              path:'applyForAfterSales',
              component:applyForAfterSales
            },
            {//申请售后成功页面
              path:'applyForAfterSaleSuccess',
              component:applyForAfterSaleSuccess
            }
          ]
        }
      ]
    },
    { //商品详情
      path: '/goodsDetail',
      component: goodsDetail
    },
    { //z注册登录
      path: '/login',
      component: login,
      children:[
        {//注册
          path:'register',
          component:register,
          children:[
            {
              path:'registerIndex',
              component:registerIndex
            },
            {
             path:'registerSecond',
             component:registerSecond
            },
            {
              path:'registerThird',
              component:registerThird
             },
             {
              path:'registerLast',
              component:registerLast
             },
          ]
        },
        {//用户协议
          path:'userAgreement',
          component:userAgreement
         },
         {//账号密码登录
           path:'loginPassword',
           component:loginPassword
         },
         {//手机号码登录
           path:'loginByPhonenumber',
           component:loginByPhonenumber
         },
         {
           path:'resetPassword',//重置密码
           component:resetPassword,
           children:[
            {
              path:'',
              component:resetPasswordFirst
            },
             {
               path:'resetPasswordSecond',
               component:resetPasswordSecond
             },
             {
               path:'resetPasswordThird',
               component:resetPasswordThird
             },
             {
               path:'resetPasswordLast',
               component:resetPasswordLast
             }
           ]
         }
      ]
    },
    {
      path:'/test',
      component:test
    }
  ]
})
