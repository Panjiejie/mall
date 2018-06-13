<template>
    <div class="evaluation">
        <div class="evaluation-content">
            <p>首页 > 品牌 > {{brandName}} > 全部评论</p>
            <div class="evaluation-body">
                <p>全部评论{{comments}}</p>
                <ul class='comments-list clearfix'>
                    <li class="comments-item" v-for='item in commentsList' :key='item.key'>
                        <evaluation :list='item'></evaluation>
                    </li>
                </ul>
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
                 {img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
                ,{img:brandBanner,title:'boss眼睛新品系列',description:'文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容'}
            ],
        }
    },
}
</script>
<style scoped>
    .evaluation{
        background: #f2f2f2;
        font-size: 14px;
    }
    .evaluation-content{
        width: 1200px;
        min-height: 500px;
        background: #fff;
        margin: 0 auto;
    }
    .evaluation-content p{
        height: 50px;
        line-height: 50px;
        text-align: left;
        background: #f2f2f2;
    }
    .evaluation-body p{
        background: #fff;
    }
    .comments-list {
        width: 1200px;
    }
    .comments-item{
        width: 284px;
        height: 419px;
        list-style: none;
        margin-right: 21.25px;
    }
    .comments-list .comments-item:nth-child(4n){
        margin-right: 0;
    }
</style>

