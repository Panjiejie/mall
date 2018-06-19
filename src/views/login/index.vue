<template>
    <div id="login-content">
        <div id="header">
            <div class="header-content">
                <div class="logocontent" @click="toHome">
                    <img class="logo" src="../../assets/common/logo.png" alt="">
                    <span class="title">正品汇</span><br>
                    <span class="secondTitle">惠聚品质商品</span>
                </div>
            </div>
        </div>
        <div id="main">
            <router-view></router-view>
        </div>
        <!-- <p>login</p> -->
        <div id="footer">
            <div class="footer-nav">
                <div class="bbottom">
                    <ul>
                    <li style="border-left:none;padding-left:none;"><a href="">关于我们</a></li>
                    <li><a href="">帮助中心</a></li>
                    <li><a href="">售后服务</a></li>
                    <li><a href="">配送与验收</a></li>
                    <li><a href="">商务合作</a></li>
                    <li><a href="">企业采购</a></li>
                    <li><a href="">开放平台</a></li>
                    <li style="border-right:none;padding-right:none;"><a href="">友情链接</a></li>
                    </ul>
                    <div><br> CopyRight @ 正品汇2018</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
   name:'login',
   components:{
   },
   data() {
     return {

     }

   },
   methods:{
       login(){
           this.$store.dispatch('Login','gm');
       },
       toHome(){
           this.$router.push('/')
       }
   },
   components: {

   }
 }
</script>

<style scoped>
     html,body{
         width: 100%;
         height: 100%;
         background: #fff;
         margin: 0px auto 0;

         overflow-y:hidden;
     }
     #app{
         height: 100%;
     }
   #main{
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        /* background: blue; */
        /* background-color: red; */
    }
    
    #header,#footer{
        width: 100%;
        height: 100px;
        background: #fff;
    }
    .header-content,.footer-nav{
        width: 1200px;
        height: 100px;
        margin: 0 auto;
    }
    #login-content{
        background: #f2f2f2;
        height: 100%;
    }
    /* #header{
        position: fixed;
        top: 0;
        left: 0;
    } */
    #footer{
        background: rgb(39,36,36);
        /* position: fixed; */
        /* bottom: 0; */
        /* left: 0; */
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
  .bbottom{
    width: 1200px;
    height:100px ;
    margin: 0 auto;
  }
  .bbottom ul{
    width: 640px;
    height: 20px;
    margin: 0 auto ;
    padding-top:30px; 
    padding-bottom: 10px;
  }
  .bbottom li{
    float: left;
    font-size: 16px;
    height: 16px;
    padding:0 10px ;
    line-height: 16px;
    border-right: 1px solid #828181;
    color: #828181;
    list-style: none;
  }
  .bbottom li:after{
    display: block;
    content: "";
    clear: both;
  }
  .bbottom div{
    color: #828181;
  }
</style>
