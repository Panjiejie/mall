<template>
    <div class="evaluation">
        <div class="evaluation-content">
            <p><router-link to="/">首页</router-link> > <router-link to="/nav/toBrands">品牌</router-link>  > <router-link to="/nav/toBrandDetail">{{brandName}} </router-link>> 全部评论</p>
            <div class="evaluation-body">
                <p>全部评论<span class="red">{{comments}}</span></p>
                <ul class='cs-list clearfix'>
                    <li class="cs-item" v-for='item in commentsList' :key='item.key'>
                        <evaluation :list='item'></evaluation>
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
import evaluation from 'components/brands/evaluation.vue'
export default {
    name:'allEvaluation',
    components:{
        evaluation
    },
    data(){
        return{
            brandName:'zhangsan',
            comments:100,//评论总数
            commentsList:[
                 {img:brandBanner,title:'boss眼睛新品系列boss眼睛新品系列boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列boss眼睛新品系列boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列boss眼睛新品系列boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
            ],
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
        background: #f2f2f2;
        margin: 0 auto;
    }
    .evaluation-content p{
        height: 50px;
        line-height: 50px;
        text-align: left;
        background: #f2f2f2;
    }
    .evaluation-content>p a{
        color: #333;
    }
    .evaluation-content>p a:hover{
        color: #333;
    }
    /* .evaluation-body p{
        background: #fff;
    } */
    .cs-list {
        width: 1200px;
        padding-bottom: 40px;
    }
    .cs-item{
        float: left;
        width: 284px;
        height: 419px;
        list-style: none;
        margin:0 21.25px 24px 0;
        background: #fff;
    }
    .cs-list .cs-item:nth-child(4n){
        margin-right: 0;
    }
    .page-content{
        width: 1200px;
        padding-bottom: 20px;
    }
</style>

