<template>
    <div id="login-content">
        <div id="header">
            <div class="header-content">header</div>
        </div>
        <div id="main">
            <router-view></router-view>
        </div>
        <!-- <p>login</p> -->
        <div id="footer">
            <div class="footer-nav">footer</div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/public/headers'
import Footer from '../../components/public/footers'
import register from 'views/login/register'
 export default {
   name:'login',
   components:{
       Header,
       Footer,
       register
   },
   data() {
     return {

     }

   },
   methods:{
       login(){
           this.$store.dispatch('Login','gm');
       }
   },
   components: {

   }
 }
</script>

<style scoped>

    html,body,#login-content{
        width: 100%;
        height: 100%;
        background-color: #f2f2f2;
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
    #header{
        position: fixed;
        top: 0;
        left: 0;
    }
    #footer{
        background: rgb(39,36,36);
        position: fixed;
        bottom: 0;
        left: 0;
    }
    #main{
        width: 1200px;
        min-height: 500px;
        background: #fff;
        margin: 0 auto;
    }
</style>
