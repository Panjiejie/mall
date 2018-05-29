<template>
    <div>
       <div id="banner">
           <div id="banner-nav">navbar</div>
           <div id="banner-swiper">swiper</div>
       </div>
       <brandingbusiness></brandingbusiness>
       <service></service>
    </div> 
</template>
<script>
// import headers from '../common/headers'
// import footers from '../common/footers'
import brandingbusiness from './brandingbusiness'
import service from './service'
export default {
    name:"index",
    components:{
        brandingbusiness,
        service
    },
    data(){
        return{

        }
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

