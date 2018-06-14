<template>
    <div class="evaluation-items" @click="toAllEvaluation">
        <!-- 品牌测评小组件 -->
        <div id='brand-logo'><img :src="list.img" alt=""></div>
        <h5>{{list.title}}</h5>
        <p>{{list.description}}</p>
    </div>
</template>
<script>
export default {
    name:'evaluation',
    props:['list'],
    methods:{
        toAllEvaluation(){
            this.$router.push('allEvaluation');
        }
    },
}
</script>
<style scoped>
    .evaluation-items{
        width: 284px;
        min-height: 419px;
        background: #fff;
        border: 1px solid rgb(221,221,221);
        text-align:left;
    }
    #brand-logo img{
        width: 100%;
        height: 284px;
    }
    h5{
        /* height: 54px; */
        /* line-height: 34px; */
        font-size: 16px;
        padding: 0 14px;
    }
    p{  
        /* height: 80px; */
        color: #999;
        font-size: 14px;
        line-height: 20px;
        padding: 0 14px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
    }
</style>

