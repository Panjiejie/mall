<template>
    <div id="banner">
           <div id="banner-nav">navbar</div>
           <div id="banner-swiper">swiper</div>
       </div>
</template>
<script>
export default {
    name:'banner',
    data(){
        return{}
    }
}
</script>
<style scoped>
  #banner{
        width: 1200px;
        height:460px ;
        margin: 0 auto 45px;
    }
    #banner-nav{
        width: 120px;
        height: 460px;
        float: left;
        border: 1px solid red;
    }
    #banner-swiper{
        width: 1080px;
        height: 460px;
        float: left;
        border: 1px solid red;
    }
</style>


