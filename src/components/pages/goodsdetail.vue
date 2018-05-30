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
            </div>
            <!-- 图文详情右侧 -->
            <div class="bcright"></div>
        </div>
    </div>
</div>
</template>
<script>
// import headers from '../common/headers'
// import footers from '../common/footers'
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
            ]
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
    border: 1px solid #ddd;
    border-top: none;
}
.bcright{
    width: 260px;
    float: left;
    margin-top: 40px;
}
.bcmain-header{
    width: 900px;
    height: 300px;
    background: #fff;
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
    height: 256px;
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
    min-width: 420px;
    height: 36px;
    line-height: 36px;
    float: left;
}
.introduce ul{
    border-bottom: 1px dotted #e1e1e1;
    padding-bottom: 6px;
}
</style>


