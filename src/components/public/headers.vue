<template>  
  <div>
    <div id="header">
      <div class="main">
        <ul>
          <li><span class="ver-line"></span><router-link to="/nav/goodsdetail">请先登录</router-link></li>
          <li><span class="ver-line"></span><router-link to="/">免费注册</router-link></li>
          <li><span class="ver-line"></span><router-link to="/">我的订单</router-link></li>
          <li><span class="ver-line"></span><router-link to="/">帮助中心</router-link></li>
          <li><span class="ver-line"></span><router-link to="/">手机APP</router-link></li>
          <li class="cart-content"><span class="ver-line"></span><router-link to="/">购物车<span class="cartBage"><a href="" class="cartNumber">{{cartMsg}}</a></span></router-link></li>
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
          <li><span class="circle">.</span><router-link to="/nav"> 商城</router-link></li>
          <li><span class="circle">.</span><router-link to="/nav/haitao">海淘</router-link></li>
          <li><span class="circle">.</span><router-link to="/nav/goodsguide">商品导购</router-link></li>
          <li><span class="circle">.</span><router-link to="/nav/newretail">新零售</router-link></li>
          <!-- <li><span class="circle">.</span><router-link to="/nav/dataserver">数据服务</router-link></li> -->
          <li><span class="circle">.</span><router-link to="/mine"><span style="color:red">个人主页</span></router-link></li>
        </ul>
      </div>
      <div class="inputblock">
        <input type="text">
        <button><img src="../../assets/common/logo.png" alt="" style="width:16px;height:16px;"></button>
      </div>
    </div>
    </div>
  </div>
</template>  
  
<script>  

export default { 
  name: 'headerNav', 
  data () {  
    return {  
       cartMsg:0,//购物车bage
    } 
  },  
  methods: {  
     toHome(){
       this.$router.push('./index')
     }
  },  
  mounted(){  
      
  }  
  
}  
</script>  
  
<!-- Add "scoped" attribute to limit CSS to this component only -->  
<style scoped>
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
  .main li:hover{
    background: #3E3E3E;
  }
  .ver-line{
    width: 1px;
    height: 12px;
    line-height: 36px;
    float: left;
    display: inline-block;
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
    display: inline-block;
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
  }
  #nav{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
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
    padding: 0 55px;
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
  }
  .navbar ul li a{
    font-size: 16px;
    color: #333333;
  }
  .navbar a:hover{
    border-bottom:2px solid #F97127;
    /* font-weight: bold; */
    text-shadow: 1px 0 0 currentColor;
  }
  .circle{
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius:50%;
    line-height: 100px; 
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
    border-left:none;
    border-top-right-radius:5px; 
    border-bottom-right-radius:5px; 
    float: left;
    background: #fff;
    outline: 0;
  }
</style>  