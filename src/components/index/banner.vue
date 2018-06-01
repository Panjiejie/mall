<template>
    <div id="banner" @mouseleave="leave">
           <div id="banner-nav" >
               <ul class="slidebar" >
                   <li v-for="item in 7" :key="item.key" @mouseenter="enter(item)" >
                       {{item}}<span>&gt;</span>
                   </li>
               </ul>
                <!-- 二级导航 -->
                <div class="banner-detail" v-bind:class="{ active: isActive }">{{detailmsg}}</div>
           </div>
           <!-- 轮播 -->
           <div id="banner-swiper">
                 <Carousel autoplay v-model="value2" loop>
        <CarouselItem  v-for="item in list" :key="item.key">
            <img :src="item.src" alt="" style="width:1080px;height:460px;">
        </CarouselItem>
    </Carousel>
           </div>
       </div>
</template>
<script>
import imgurl from '../../assets/common/kefu.png'
export default {
    name:'banner',
    data(){
        return{
            vals:"",//slidebar li值
            detailmsg:"1",
            value2:0,
            isActive:false,
            list:[
                {src:imgurl},
                {src:imgurl},
                {src:imgurl},
                {src:imgurl},
            ]
        }
    },
    watch:{
        vals:function(newval,oldval){
            // console.log(oldval+"----oldval;"+newval+"------newval");
            this.detailmsg=newval;
        }
    },
    methods:{
        enter(val){
            this.vals=val;
            if(!this.isActive){
            this.isActive=true;
            }
            console.log(this.isActive)
        },
        leave(){
            if(this.isActive){
                this.isActive=false;
                // console.log(this.isActive)
            }
        }
    }
}
</script>
<style scoped>
  #banner{
        width: 1200px;
        height:460px ;
        margin: -3px auto 45px;
        position: relative;
    }
    .banner-detail{
        width: 1080px;
        height: 460px;
        background: greenyellow;
        position: absolute;
        top: 0;
        left: 120px;
        z-index: 999;
        display: none;
    }
    .active{
        display: block;
    }
    #banner-nav{
        width: 120px;
        height: 460px;
        float: left;
        background: #233b3c;
    }
    .slidebar{
        width: 100%;
        height: 100%;
        color: #fff;
    }
    .slidebar li:first-of-type{
        margin-top: 24px;
    }
    .slidebar li{
        list-style: none;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        vertical-align: top;
        padding-left: 36px;
    }
    .slidebar li:hover{
        background: blue;
    }
    /* #banner-nav:hover>.banner-detail{
        display: block;

    } */
    .slidebar li span{
        display: inline-block;
        margin-left: 16px;
    }
    #banner-swiper{
        width: 1080px;
        height: 460px;
        float: left;
        border: 1px solid red;
    }
</style>


