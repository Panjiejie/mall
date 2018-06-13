<template>
    <div class="evaluation">
        <div class="evaluation-content">
            <p><router-link to="/">首页</router-link> > <router-link to="/nav/toBrands">品牌</router-link>  > <router-link to="/nav/toBrandDetail">{{brandName}} </router-link>> 全部商品</p>
            <div class="evaluation-body">
                <p>全部商品<span class="red">{{totalgoods}}</span></p>
                <ul class='cs-list clearfix'>
                    <li class="cs-item" v-for='item in goodsList' :key='item.key'>
                        <goodsItem :itemParams='item'></goodsItem>
                    </li>
                </ul>
                <!-- 分页 -->
                <div class="page-content">
                    <Page :total="100" show-elevator></Page>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import brandBanner from '../../assets/goodsGuide/bg.png'
import goodsItem from 'components/public/goodsitem.vue'
export default {
    name:'relatedProducts',
    components:{
        goodsItem
    },
    data(){
        return{
            brandName:'zhangsan',
            totalgoods:100,//评论总数
            goodsList:[
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
    .red{color: #ff2040;}
    .evaluation{
        background: #f2f2f2;
        font-size: 14px;
    }
    .evaluation-content{
        width: 1200px;
        min-height: 500px;
        /* background: #fff; */
        margin: 0 auto;
    }
    .evaluation-content p{
        height: 50px;
        line-height: 50px;
        text-align: left;
        background: #f2f2f2;
    }
    .cs-list {
        width: 1200px;
        padding-bottom: 40px;
    }
    .cs-item{
        float: left;
        width: 230px;
        height: 340px;
        list-style: none;
        margin:0 12.5px 24px 0;
        background: #fff;
    }
    .cs-list .cs-item:nth-child(5n){
        margin-right: 0;
    }
    .page-content{
        width: 1200px;
        padding-bottom:20px;
    }
</style>



