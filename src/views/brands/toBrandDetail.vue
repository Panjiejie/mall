<template>
    <div id='brand-detail'>
        <div class="detail-header">
            首页 > 品牌 > {{brandName}}
        </div>
        <!-- banner -->
        <div class="detail-banner clearfix">
            <img class="brand-banner" :src="brandBanner" alt="">
            <div class="banner-description">
                <div class="des-top clearfix">
                    <div class="des-top-logo">
                        <img :src="brandBanner" alt="">
                    </div>
                    <div class="des-top-brand">
                        <h4>{{brandName}}</h4>
                        <p>源于德国的世界知名奢侈品牌</p>
                        <div class="logo-location">
                            <img :src="brandBanner" alt="">中国
                        </div>
                    </div>
                </div>
                <div class="des-bottom">
                    <span class="gray">品牌故事：</span><span>{{des}}</span>
                </div>
            </div>
        </div>
        <!-- body -->
        <div id="detail-body">
            <p class='evaluation'>相关测评 <router-link to="allEvaluation" class="fr">查看全部 ></router-link></p>
            <div class="evaluation-item-content clearfix">
                <evaluation v-for='item in evaluationList' :key='item.key' :list='item' class="evaluation-item"></evaluation>
            </div>
            <!-- 相关商品 -->
            <p class="about-goods">相关商品 <span class="red">{{totalGoods}}</span><router-link to="relatedProducts" class="fr">查看全部 ></router-link></p>
            <div class="about-goods-content">
                <ul class="clearfix">
                    <li class="goods-item" v-for='i in aboutGoodsList' :key='i.key'>
                        <goodsItem :itemParams='i'></goodsItem>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import brandBanner from '../../assets/goodsGuide/bg.png'
import evaluation from 'components/brands/evaluation.vue'
import goodsItem from 'components/public/goodsitem.vue'
export default {
    name:'toBrandDetail',
    components:{
        evaluation,
        goodsItem
    },
    data(){
        return{
            brandName:'橄榄树',
            brandBanner:brandBanner,
            totalGoods:100,
            des:'橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树橄榄树'
            ,evaluationList:[
                 {img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
            ],
            aboutGoodsList:[
                {src:brandBanner,title:'多热烈的白羊',subtitle:'小毛驴',price:'12345'},
                {src:brandBanner,title:'多热烈的白羊',subtitle:'小毛驴',price:'12345'},
                {src:brandBanner,title:'多热烈的白羊',subtitle:'小毛驴',price:'12345'},
                {src:brandBanner,title:'多热烈的白羊',subtitle:'小毛驴',price:'12345'},
                {src:brandBanner,title:'多热烈的白羊',subtitle:'小毛驴',price:'12345'},
                {src:brandBanner,title:'多热烈的白羊',subtitle:'小毛驴',price:'12345'},
                {src:brandBanner,title:'多热烈的白羊',subtitle:'小毛驴',price:'12345'},
                {src:brandBanner,title:'多热烈的白羊',subtitle:'小毛驴',price:'12345'},
                {src:brandBanner,title:'多热烈的白羊',subtitle:'小毛驴',price:'12345'},
                {src:brandBanner,title:'多热烈的白羊',subtitle:'小毛驴',price:'12345'},
                {src:brandBanner,title:'多热烈的白羊',subtitle:'小毛驴',price:'12345'},
            ]
       }
    },
}
</script>
<style scoped>
.red{color:#ff2040}
#brand-detail{
    background: #f2f2f2;
    padding-bottom: 40px;
    font-size: 14px;
}
.detail-header{
    width: 1200px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    text-align: left;
}
.detail-banner{
    width: 1200px;
    height: 360px;
    background: #fff;
    border: 1px solid rgb(221,221,221);
    margin: 0 auto 40px;
    text-align: left;
}
.brand-banner{
    float: left;
    width: 640px;
    height: 360px;
}
.banner-description{
    float: left;
    width: 558px;
    height: 358px;
    padding: 30px 30px 0;
    background: yellow;
}
.des-top{
    width: 100%;
    height: 90px;
}
.des-top-logo{
    width: 114px;
    float: left;
}
.des-top-logo img{
    width: 90px;
    height: 90px;
    border: 1px solid rgb(221,221,221);
    border-radius: 50%;
}
.des-top-brand{
    float: left;
    width: 300px;
    height: 90px;
    text-align: left;
}
.des-top-brand h4{
    font-size: 20px;
}
.des-top-brand p{
    font-size: 14px;
    color: #999;
}
.logo-location img{ 
    width: 10px;
    height: 16px;
    margin-right: 6px;
}
.logo-location{
    font-size: 12px;
    color: #999;
    margin-top: 14px;
}
.des-bottom{
    margin-top: 30px;
    line-height: 30px;
    font-size: 14px;
}
.gray{
    color: #999;
}
/* 相关测评 */
#detail-body{
    width: 1200px;
    min-height: 500px;
    /* background: yellowgreen; */
    margin: 0 auto;
}
.evaluation,.about-goods{
    height: 44px;
    vertical-align: top;
    text-align: left;
}
.evaluation-item{
    float: left;
    margin-right:21.25px;
}
.evaluation-item-content{
    padding-bottom: 40px;
}
.evaluation-item-content .evaluation-item:last-child{
    margin-right: 0;
}
.fr{
    float: right;
    color: black;
}
.fr:hover{
    color: black;
}
/* 相关商品列表 */
.about-goods-content{
    width: 1200px;
    margin: 0 auto;
}
.goods-item{
    width: 230px;
    height: 340px;
    border:1px solid rgb(221,221,221);
    background: #fff;
    float: left;
    list-style: none;
    margin: 0 12.5px 22px 0;
}
.about-goods-content .goods-item:nth-child(5n){
    margin-right: 0;
}
</style>
