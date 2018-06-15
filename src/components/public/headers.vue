<template>  
  <div id="content">
    <div id="header">
      <div class="main">
        <ul>
          <li>
              <span class="ver-line"></span>
              <el-popover
                placement="bottom"
                width="120"
                trigger="hover">
                <div class="personal-center">
                  <ul>
                    <li><a href="">个人中心</a></li>
                    <li><a href="">商品收藏</a></li>
                    <li><a href="">安全设置</a></li>
                    <li><a href="">退出登录</a></li>
                    <li class="triangle"></li>
                  </ul>
                </div>
              <router-link  class="hover" to="/nav/personalCenter/personalSetting" slot='reference'>张三的歌</router-link>
            </el-popover>
          </li>
          <li @mouseenter="isshowPersonalCenter"><span class="ver-line"></span><router-link to="/nav/personalCenter/personalSetting">{{loginIn}}</router-link></li>
          <li><span class="ver-line"></span><router-link to="/login/register/registerIndex">免费注册</router-link></li>
          <li><span class="ver-line"></span><router-link to="/nav/personalCenter/myOrder">我的订单</router-link></li>
          <!-- <li><span class="ver-line"></span><router-link to="/nav/goodsdetail">帮助中心</router-link></li> -->
          <!-- <li><span class="ver-line"></span><router-link to="/">手机APP</router-link></li> -->
          <li class="cart-content shopping-cart-btn">
              <!-- <span class="ver-line"></span> -->
              <el-popover
                          placement="bottom"
                          width="200"
                          trigger="hover">
                          <div class="shopping-cart">
                            <ul>
                              <li v-for="item in shoppingCartList" :key='item.key'>
                                <img :src="item.Filepath" alt="">
                                <div class="cartlist-right">
                                  <h4 class="cartgoods-title">{{item.title}}</h4>
                                    <div class="price">
                                      <span>￥{{item.price}}</span> x{{item.num}}
                                    </div>
                                </div>
                              </li>
                            </ul>
                    <div class="cart-footer">
                      <p class="goods-amount"> 共{{totalsAmount}}件商品</p>
                      <p class="totalprice">共计:<span>￥{{totalsMoney}}</span></p>
                      <button>去购物车</button>
                    </div>
                  </div>
                      <!-- <el-button slot="reference">click 激活</el-button> -->
                  <router-link slot="reference" to="/nav/shoppingCart" class="hover ">购物车<span class="cartBage" ><a href="" class="cartNumber">{{totalsAmount}}</a></span></router-link>
                </el-popover>
          </li>
          <!-- <router-link to="/nav/shoppingCart">购物车<span class="cartBage"><a href="" class="cartNumber">{{totalsAmount}}</a></span></router-link></li> -->
        </ul>
      </div>
    </div>
    <div class="navcontent">
      <div id="nav">
        <div class="logocontent" @click="toHome">
            <img class="logo" src="../../assets/common/logo.png" alt="">
            <span class="title">正品汇</span><br>
            <span class="secondTitle">惠聚品质商品</span>
        </div>
        <div class="navbar">
          <ul>
            <li v-for='item in navList' :key='item.key' @click="chooseNav(item)">
              <!-- <span class="circle"></span> -->
              <router-link :to="item.pathTo" :class="{navbarchoose:item.isChoose}">{{item.text}}</router-link>
            </li>
          </ul>
        </div>
        <div class="inputblock">
          <input type="text">
          <button><img src="../../assets/common/search.png" alt="" style="width:16px;height:16px;"></button>
        </div>
          <!-- 个人中心小三角和下拉框 -->
    <!-- <div class="triangle" :class='{isTriangle:personalCenter.isTriangle}'></div> -->
    <!-- <div class="personal-center" :class='{isshow:isshow}' @mouseleave='isoutPersonalCenter'>
      <ul>
        <li><a href="">个人中心</a></li>
        <li><a href="">商品收藏</a></li>
        <li><a href="">安全设置</a></li>
        <li><a href="">退出登录</a></li>
        <li class="triangle"></li>
      </ul>
    </div> -->
    <!-- 购物车 -->
    <!-- <div class="shopping-cart">
      <ul>
        <li v-for="item in shoppingCartList" :key='item.key'>
          <img :src="item.Filepath" alt="">
          <div class="cartlist-right">
             <h4 class="cartgoods-title">{{item.title}}</h4>
              <div class="price">
                <span>￥{{item.price}}</span> x{{item.num}}
              </div>
          </div>
        </li>
      </ul>
      <div class="cart-footer">
        <p class="goods-amount"> 共{{totalsAmount}}件商品</p>
        <p class="totalprice">共计:<span>￥{{totalsMoney}}</span></p>
        <button>去购物车</button>
      </div>
    </div> -->
    </div>
    </div>
  </div>
</template>  
  
<script>  
import imgurl from '../../assets/common/kefu.png'
export default { 
  name: 'headerNav', 
  data () {  
    return {  
      //  cartMsg:0,//购物车bage
       loginIn:'请先登录',
       isshow:false,
       totalCartMoney:0,//购物车总价
       totalCartAmount:0,//购物车商品总数
       navList:[
         {text:'商城',isChoose:true,pathTo:'/nav'},
        //  {text:'海淘',isChoose:false,pathTo:'/nav/haitao'},
         {text:'商品导购',isChoose:false,pathTo:'/nav/goodsguide'},
         {text:'新零售',isChoose:false,pathTo:'/nav/newretail'},
         {text:'数据服务',isChoose:false,pathTo:'/nav/dataserver'}
       ],
       shoppingCartList:[
         {Filepath:imgurl,title:'[定]Yvess 原汁机 柠檬橙子榨汁机1',num:'1',price:'255'},
         {Filepath:imgurl,title:'[定]Yvess 原汁机 柠檬橙子榨汁机1',num:'1',price:'255'},
         {Filepath:imgurl,title:'[定]Yvess 原汁机 柠檬橙子榨汁机1',num:'1',price:'255'},
       ]
    } 
  }, 
  computed:{
    totalsMoney(){//购物车总价
      this.shoppingCartList.forEach(item=>{
        this.totalCartMoney+=item.price*item.num;
      })
      return this.totalCartMoney;
    },
    totalsAmount(){//购物车商品总数
        this.shoppingCartList.forEach(item=>{
        this.totalCartAmount+=item.num*1;
      })
      return this.totalCartAmount;
    },
  },
  watch:{
    isshow(){
      console.log(this.isshow)
    },
  },
  methods: {  
     toHome(){
       this.$router.push('/')
     },
     isshowPersonalCenter(){
       this.isshow=true;

     },
     isoutPersonalCenter(){
       this.isshow=false;
     },
    chooseNav(item){//导航条样式点击跳转+粗和下边框
      this.navList.forEach(es=>es.isChoose=false);
      item.isChoose=true;
    }
  },  
  mounted(){  
      
  }  
  
}  
</script>  
  
<!-- Add "scoped" attribute to limit CSS to this component only -->  
<style scoped>
#content{
  position: relative;
}
  a{
    text-decoration-line: none;
  }  
  #header{
    width: 100%;
    height: 36px;
    background-color: #272424;
    /* background-color: #fff; */
    /* box-shadow: 0 4px 4px #999; */
  }
  .main{
    width: 1200px;
    height: 100%;
    /* border: 1px solid blue; */
    margin: 0 auto;
  }
  
  .main ul{
    list-style: none;
    float: right;
    width: 480px;
  }
  .main ul:after{
    clear: both;
    display: block;
    content: "";
  }
  .main li{
    float: left;
    width: 80px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #CCCCCC;
  }
  .main li>a:hover{
    color: #c4c4c4 !important;
  }
  .main li .hover:hover{
    color: #c4c4c4;
  }
  .shopping-cart-btn{
    background: rgb(62,62,62) !important;
  }
  .ver-line{
    width: 1px;
    height: 12px;
    line-height: 36px;
    float: left;
    /* display: inline-block; */
    text-align: left;
    margin-top: 12px;
    background: #CCCCCC;
  }
  .cartBage{
    /* display: inline-block; */
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #F45B08;
    color:#CCCCCC;
    position: absolute;
    top: 1px;
    right: 2px;
  }
  .cart-content{
    position: relative;
  }
  .cartNumber{
    position: absolute;
    top: -11px;
    left: 3px;
  }
  .logocontent{
    width: 250px;
    height: 100%;
    float: left;
    cursor: pointer;
  }
  .logo{
    width: 48px;
    height: 48px;
    line-height: 48px;
    float:left;
    margin: 26px 20px 0 0;
  }
  .navcontent{
    width: 100%;
    height: 100px;
    background: #FFFFFF;
    text-align: left;
    box-shadow: 0 4px 4px #f2f2f2;
    margin-bottom: 4px;
    position: relative;
  }
  #nav{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }
  .title{
    display: inline-block;
    margin-top: 26px;
    font-size: 24px;
    color: #000000;
    width: 84px;
    text-align: center;
  }
  .secondTitle{
    color: #A6A6A6;
    font-size: 14px;
  }
  .navbar{
    width: 550px;
    height: 100%;
    float: left;
    padding: 0 0 0 55px;
  }
  .navbar ul{
    float: left;
    list-style: none;
  }
  .navbar ul li{
    float: left;
    /* padding: 0 16px; */
    line-height: 100px;
    width: 80px;
    text-align: center;
    position: relative;
  }
  /* .navbar ul li:nth-child(3){
    width: 110px;
  }
  .navbar ul li:nth-child(4){
    width: 100px;
  }
  .navbar ul li:nth-child(5){
    width: 120px;
  } */
  .navbar ul li a{
    font-size: 16px;
    color: #333333;
  }
  .navbarchoose{
    border-bottom:2px solid #F97127;
    /* font-weight: bold; */
    text-shadow: 1px 0 0 currentColor;
    transition: all .1s;
  }
  .circle{
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius:50%;
    line-height: 100px; 
    background: rgb(226,226,226);
    position: absolute;
    top: 47px;
    left: 0;
  }
  /* 搜索框 */
  .inputblock{
    width: 300px;
    height: 40px;
    /* border: 1px solid #ddd; */
    /* border-radius: 4px; */
    float: right;
    margin-top:30px ;
    opacity: 1;
  }
  .inputblock input{
    width: 250px;
    height: 100%;
    border: 1px solid #ddd;
    border-top-left-radius:5px; 
    border-bottom-left-radius:5px; 
    float: left;
    outline: 0;
    padding-left:16px ;
    color: #999;
  }
  .inputblock button {
    width: 50px;
    height: 40px;
    border: 1px solid #ddd;
    padding-top: 4px;
    border-left:none;
    border-top-right-radius:5px; 
    border-bottom-right-radius:5px; 
    float: left;
    background: #fff;
    outline: 0;
  }
  /* 个人中心 */
  .triangle{
    width: 0;
    height: 0;
    border: none;
    border: 10px solid transparent;
    border-bottom:10px solid #fff;
    position: absolute;
    top: -44px;
    right: 50px;
    z-index: 33;
    /* display: none; */
  }
  .personal-center{
    width: 120px;
    height: 150px;
    background: #fff;
    position: relative;
    /* top: 0px; */
    /* right: 380px; */
    margin-top: 24px;
    /* display: none; */
  }
  .personal-center li{
    list-style: none;
    text-align: center;
    height: 24;
    line-height: 24px;
  }
  .personal-center li:hover a{
    color: rgb(249,126,61) !important
  }
  .isshow{
    display: block;
  }
  /* 购物车 */
  .shopping-cart{
    width: 270px;
    min-height:228px;
    /* padding-bottom: 60px; */
    /* background: #F45B08; */
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
    background: #fff;
    box-shadow: 0px 4px 4px 4px  rgba(232,232,232,.5);
    /* display: none; */
  }
  .cart-footer{
    width: 270px;
    height: 60px;
    background: #272424;
    position: relative;
    /* bottom: 0; */
    /* left: 0; */
    color: #fff;
    padding: 12px;
    display: block;
  }
  .shopping-cart li{
    list-style: none;
    width: 270px;
    height: 84px;
    font-size: 14px;
    font-size: 400;
    padding: 12px;
    border-bottom: 1px dashed #999;
  }
  .shopping-cart li img{
    width: 60px;
    height: 60px;
    float: left;
  }
  .cartlist-right{
    width: 180px;
    float: left;
    margin-left: 6px;
  }
  .cartlist-right h4{
    font-size: 12px;
    color: #333;
    margin-bottom: 20px;
    /* height: 12px; */
    line-height: 12px;
  }
  .cartlist-right .price span{
    font-size: 14px;
    color: #ff2040;
    font-weight: 600;
  }
  .goods-amount{
    font-size: 12px;
    color: #999;
    margin-bottom: 6px;
    line-height: 12px;
  }
  .totalprice{
    font-size: 14px;
    color: #fff;
  }
  .totalprice span{
    color: #ff2040;
    font-weight: 600;
  }
  .cart-footer button{
    width: 85px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #f97127;
    border: 1px solid #f97127;
    background: transparent;
    outline: none;
    position: absolute;
    top: 12px;
    right: 12px;;
  }
</style>    