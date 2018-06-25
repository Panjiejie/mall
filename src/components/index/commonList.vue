<template>
<div class="bg">
<div class="content">
        <div class="title">
            <span class="line"></span>
            <span class="maintitle">{{commonname}}</span>
            
            <a class="morebrand" href="/haitao">查看全部&gt;</a>
            <div class="navlist">
                <span><a href="">手链 /</a></span>
                <span><a href="">手链 /</a></span>
                <span><a href="">手链 /</a></span>
                <span><a href="">手链 /</a></span>
                <span><a href="">手链 /</a></span>
                <span><a href="">手链 /</a></span>
            </div>
        </div>
        <div class="brands">
            <div class="common-left">
                <div class="top">top</div>
                <div>bottom</div>
            </div>
            <div class="common-right">
                <ul>
                    <li v-for="item in list" :key="item.id" @click="toGoodsDetail">
                        <div class="img__content">
                            <img :src="item.src" style="width:200px;height:200px;" alt="">  
                        </div>
                        <h5>{{item.name}}</h5>
                        <h6>{{item.subtitle}}</h6>
                        <div>
                            <span class="price"><span class="mlogo">¥</span> {{item.price}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="common-bottom">
                <div class="adcontent"></div>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
import imgurl from '../../assets/common/logo.png'
export default {
    name:'commonList',
    props:['commonname'],
    data(){
        return{
            list:[
                {name:"pt950铂金钻石结婚对戒",subtitle:"预约赠限量巧克力",price:"2500",src:imgurl},
                {name:"pt950铂金钻石结婚对戒",subtitle:"预约赠限量巧克力",price:"2500",src:imgurl},
                {name:"pt950铂金钻石结婚对戒",subtitle:"预约赠限量巧克力",price:"2500",src:imgurl},
                {name:"pt950铂金钻石结婚对戒",subtitle:"预约赠限量巧克力",price:"2500",src:imgurl},
                {name:"pt950铂金钻石结婚对戒",subtitle:"预约赠限量巧克力",price:"2500",src:imgurl},
                {name:"pt950铂金钻石结婚对戒",subtitle:"预约赠限量巧克力",price:"2500",src:imgurl},
                {name:"pt950铂金钻石结婚对戒",subtitle:"预约赠限量巧克力",price:"2500",src:imgurl},
                {name:"pt950铂金钻石结婚对戒",subtitle:"预约赠限量巧克力",price:"2500",src:imgurl},
            ],
        }
    },
    methods:{
        toGoodsDetail(){
            this.$router.push('nav/goodsdetail')
        }
    }
}
</script>
<style scoped>
.img__content{
    overflow: hidden;
}
.img__content img{
    transition: all 0.6s;
}
.img__content img:hover{
    transform: scale(1.2);
}
.content{
    width: 1200px;
    /* height: 383px; */
    margin: 0 auto;  
    /* background: rgba(244,91,8,.2) */
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
    background: #70d4c0;
    margin-right: 12px;
}
.maintitle{
    display: inline-block;
    font-size: 25px;
    color: #2D2D2D;
    margin-right:20px; 
}
.subhead{
    display: inline-block;
    font-size: 14px;
    color: #1C1C1C;
    height: 25px;
    line-height: 25px;
}
.morebrand{
    float:right;
    color: #333;
    font-size: 14px;
    margin-left: 40px;
}
.navlist{
    float: right;
}
.common-left:after , .common-right:after{
    content: "";
    display: block;
    clear: both;
}
.common-left{
    float: left;
    width: 230px;
    height: 690px;
}
.common-left div{
    float: left;
    width: 230px;
    height: 340px;
    background: #70d4c0;
    margin-bottom: 10px;
}
.content{
    width: 1200px;
    height: 924px;
}
.common-right{
    float: left;
    width: 970px;
    height: 700px;
    /* background: rgba(216,221,255,.3); */
}
.common-right ul{
    width: 970px;
    height: 700px;
}
li{
    width: 230px;
    height: 340px;
    list-style: none;
    float: left;
    background: #fff;
    margin: 0 0 10px 12.5px;
    padding: 15px 15px 0;
}
.bg{
    background: #f5f5f5;
    width: 100%;
    padding-top:45px;
    /* margin-top: 35px; */
}
/* li img{
    border: 1px solid #999;
} */
li h5{
    font-size:14px;
    color: #333;
    margin: 15px 0 14px;
}
li h6{
    font-size: 14px;
    color: #999;
    margin-bottom: 5px;
    font-weight: 400;
}
li div{
    color: #ff2040;
    font-size: 20px;
}
.common-bottom{
    width: 100%;
    height: 120px;
    margin-top: 30px;
}
.adcontent{
    width: 1200px;
    height: 120px;
    background: #70d4c0;
    margin-top: 30px;
}
.common-bottom:before{
    content: "";
    display: block;
    clear: both;
}
</style>





