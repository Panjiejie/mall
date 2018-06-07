<template>
    <div>
        login...
        <br>
        <el-button @click="login">mock Login</el-button>
        <br>
        <a><router-link to="/">回到首页</router-link></a>
    </div>
</template>

<script>
 export default {
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

 
</style>
