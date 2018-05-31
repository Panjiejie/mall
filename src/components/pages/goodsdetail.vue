<template>
<div>
    <div class="detail-top">
        <div id="header">
            <ul>
                <li>首页 &gt;</li>
                <li>耐克 &gt;</li>
                <li>拖鞋 &gt;</li>
                <li>耐克NIKE BENASSI SOLARSOFT &gt;</li>
            </ul>
        </div>
        <!-- 商品详情 -->
        <div class="goodschoose">

        </div>
    </div>
    <!-- 图文详情 -->
    <div class="bottom-bg">
        <div class="bottom-content">
            <!-- 图文详情主体 -->
            <div class="bcmain">
                <div class="bcmain-header">
                    <div class="title">商品详情</div>
                    <div class="introduce">
                        <div class="brand-name">
                            <span class="intro-title">品牌</span>
                                <span class="intro-content">{{brandname}}</span>
                        </div>
                        <ul>
                            <li v-for="item in list" :key="item.key">
                                <span class="intro-title">{{item.title}}</span>
                                <span class="intro-content">{{item.content}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="gray"></div>
                <!-- 图文详情左下 -->
                <div class="bcbody">
                    <div class="bcbody-content">
                        <ul>
                            <li v-for="i in 5" :key="i.key"></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 图文详情右侧 -->
            <div class="bcright">
                <div class="bcright-header">
                    24小时热销榜
                </div>
                <div class="bcright-body">
                    <ul>
                        <li v-for="item in rightlist" :key="item.key">
                            <img :src="item.src" style="width:200px;height:200px;" alt="">
                        <h5>{{item.name}}</h5>
                        <h6>{{item.subtitle}}</h6>
                        <div>
                            <span class="price"><span class="mlogo">¥</span> {{item.price}}</span>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
// import headers from '../common/headers'
// import footers from '../common/footers'
import imgurl from '../../assets/common/wechat.png'
export default {
    name:'goodsdetail',
    data(){
        return {
            brandname:"耐克(NIKE)",
            list:[
                {title:"店铺","content":"耐克(NIKE)福建莆田货222222222222222222222222222222222222222222222"},
                {title:"商品毛重","content":"1.0kg"},
                {title:"货号","content":"705475"},
                {title:"适用人群","content":"女士"},
                {title:"适用场景","content":"休闲"},
                {title:"适用场景","content":"休闲"},
                {title:"适用场景","content":"休闲"},
            ],
            rightlist:[
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
    }
}
</script>
<style scoped>
.detail-top{
    width: 1200px;
    height: 687px;
    background: rgba(244,91,8,.1);
    margin: 0 auto;
}
#header{
    width: 1200px;
    height: 50px;
    line-height: 50px;
    background: #fff;
}
#header ul{
    width: 1200px;
    height: 50px;
    font-size: 14px;
}
#header ul li{
    float: left;
    list-style: none;
}
.bottom-bg{
    width: 100%;
    background: #f2f2f2;
}
.bottom-bg:after{
    content: "";
    display: block;
    clear: both;
}
.bottom-content{
    width: 1200px;
    margin: 0 auto;
}
.bcmain{
    width: 900px;
    margin:40px 40px 0 0 ;
    float: left;
    background: #fff;
    border-top: none;
}
.bcright{
    width: 260px;
    float: left;
    margin-top: 40px;
}
.bcmain-header{
    width: 900px;
    /* min-height: 300px; */
    background: #fff;
    border: 1px solid #e7e7e7;
}
.bcmain-header .title{
    width: 900;
    height: 44px;
    border-top: 3px solid #f45b08;
    text-align: center;
    line-height: 44px;
    background: #fff;
    
    /* 条纹背景 */
    /* -webkit-background-size: 50px 50px;
    -moz-background-size: 50px 50px;
    background-size: 50px 50px; /* 控制条纹的大小 */
    /*background-image: -webkit-gradient(linear, 0 0, 100% 100%,
                            color-stop(.25, rgba(255, 255, 255, .2)), color-stop(.25, transparent),
                            color-stop(.5, transparent), color-stop(.5, rgba(255, 255, 255, .2)),
                            color-stop(.75, rgba(255, 255, 255, .2)), color-stop(.75, transparent),
                            to(transparent));
    background-image: -moz-linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
                        transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
                        transparent 75%, transparent);
    background-image: -o-linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
                        transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
                        transparent 75%, transparent);
    background-image: linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
                        transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
                        transparent 75%, transparent); */
}
.introduce {
    width: 900;
    /* height: 256px; */
    padding: 30px 30px 36px;
    text-align: left;
}
.brand-name{
    width: 840;
    height: 36px;
    border-bottom: 1px dotted #e1e1e1;
}
.intro-title{
    display: inline-block;
    width: 68px;
    font-size: 14px;
    margin-right: 30px;
    height: 36px;
    line-height: 36px;
}
.intro-content{
    color: #999;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    font-size: 14px;

}
.introduce ul:after{
    content: "";
    display: block;
    clear: both;
}
.introduce li{
    list-style: none;
    min-width: 418px;
    height: 36px;
    line-height: 36px;
    float: left;
}
.introduce ul{
    border-bottom: 1px dotted #e1e1e1;
    padding-bottom: 6px;
}
/* 图文详情左下 */
.bcbody{
    width: 900px;
    /* margin-top: 30px; */
    padding: 50px 24px 0;
    background: rgb(255,255,255);
    border: 1px solid #e7e7e7;
}

.gray{
    width: 900px;
    height: 30px;
    margin: 0 auto;
    background: #f2f2f2;
}
.bcbody-content{
    width: 100%;
    /* height: 100px; */
    /* border: 1px solid red; */
}
.bcbody-content ul{
    width: 100%;
    border-top: 1px solid #999;
}
.bcbody-content li{
    width: 100%;
    min-height: 200px;
    border: 1px solid yellow;
    list-style: none;
}
.bcbody-content:after{
    display: block;
    content: "";
    clear: both;
}
/* 图文详情右侧 */
.bcright{
    width: 260px;
}
.bcright-header{
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background: #f45b08;
}
.bcright-body{
    width: 100%;
    padding: 15px 15px 0;
    background: #fff;
    border: 1px solid #e7e7e7;
}
.bcright-body ul{
    width: 100%;
}
.bcright-body li{
    width: 100%;
    height: 340px;
    border: 1px solid red;
    margin-bottom: 15px;
    list-style: none;
    padding:15px 15px 0; 
}
.bcright-body  li img{
    border: 1px solid #999;
}
.bcright-body  li h5{
    font-size:16px;
    color: #333;
    margin: 15px 0 14px;
}
.bcright-body  li h6{
    font-size: 14px;
    color: #999;
    margin-bottom: 5px;
}
.bcright-body  li div{
    color: #ff2040;
    font-size: 20px;
}
</style>



