<template>
    <div>
        <div class="service">
            <div class="title">
                <span class="line"></span>
                <span class="maintitles">推荐专区</span>
            </div>
            <div class="servicegoods">
                <div class="firstgoods goods">
                    <!-- <h3>小米5x 变焦双摄</h3>
                    <h5 class="subtitle">5.5 大屏轻薄全金属，立减200元</h5> -->
                    <img src="../../assets/brandimg/recommend/1.jpg" alt="">
                </div>
                <div class="restgoods goods" style="margin:0 20px;">
                    <img src="../../assets/brandimg/recommend/2.jpg" alt="">
                    <!-- <h3 class="maintitle">高质家电</h3>
                    <h2 class="subtitle">质感享受</h2>
                    <button>立即进入</button> -->
                </div>
                <div class="restgoods goods">
                    <img src="../../assets/brandimg/recommend/3.jpg" alt="">
                    <!-- <h3 class="maintitle">高质家电</h3>
                    <h2 class="subtitle">质感享受</h2>
                    <button>立即进入</button> -->
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
//推荐专区
import recommendOne from '../../assets/brandimg/recommend/1.jpg'
import recommendTwo from '../../assets/brandimg/recommend/2.jpg'
import recommendThree from '../../assets/brandimg/recommend/3.jpg'
export default {
    name:"service",
    components:{},
    data(){
        return{}
    }
}
</script>
<style scoped>
.service{
    width: 1200px;
    margin: 45px auto 0;
}
.title{
    width: 1200px;
    height: 25px;
    line-height: 25px;
    margin: 0 auto;
    text-align: left;
    margin-bottom:18px; 
}
.line{
    display: inline-block;
    width: 3px;
    height: 18px;
    background: #FFDA46;
    margin-right: 12px;
}
.maintitles{
    display: inline-block;
    font-size: 25px;
    color: #2D2D2D;
    margin-right:20px; 
}
.servicegoods{
    width: 1200px;
    height: 240px;
    margin: 0 auto;
}
.goods{
    float: left;
    width: 386px;
    height: 240px;
    background: #FFDA46;
}
.goods::after{
    content: "";
    display: block;
    clear: both;
}
.firstgoods h3{
    margin:40px 0 20px 0;
    font-size: 20px;
    color: #fff; 
}
.firstgoods .subtitle{
    font-size: 14px;
    color: #fff;
}
.restgoods{
    text-align: left;
    /* padding-left:12px; */
    color: #fff;
}
.restgoods .maintitle{
    margin-top:54px ;
    font-size: 26px;
}
.restgoods .subtitle{
    font-size: 32px;
}
.restgoods button{
    width: 100px;
    height: 32px;
    border: 1px solid #fff;
    background: transparent;
    outline: none;
    margin-top: 24px;
    color: #fff;
}
</style>


