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
        background: yellow;
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
</style>
