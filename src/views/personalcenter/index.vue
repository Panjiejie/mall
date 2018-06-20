<template>
    <div class="content">
        <div class="innercontent">
            <div class="innerhead">
                 首页>个人中心
            </div>
            <div class="innerbody clearfix">
                <!-- 左侧 -->
                <div class="innerleft">
                    <ul class="list">
                        <li class="title"><span >我的账户</span></li>
                        <li><router-link to="personalSetting">个人设置</router-link></li>
                        <li><router-link to="safeAdmin">安全管理</router-link></li>
                        <li><router-link to="addressAdmin">地址管理</router-link></li>
                        <li><router-link to="myFootpoint">我的足迹</router-link></li>
                        <li class="title"><span>交易管理</span></li>
                        <li><router-link to="myOrder">我的订单</router-link></li>
                        <li class="title"><span>收藏的商品</span></li>
                        <li><router-link to="myFavorite">收藏的商品</router-link></li>
                        <!-- <li class="title"><span>帮助中心</span></li> -->
                        <!-- <li><router-link to="safeAdmin">平台客服</router-link></li> -->
                    </ul>
                </div>
                <!-- 右侧 -->
                <div class="innerright">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'personalcenter',
    data(){
        return{

        }
    },
    methods:{}
}
</script>
<style scoped>
.content{
    width: 100%;
    min-height: 660px;
    background: rgb(240,240,240);
}
.innercontent{
    width: 1200px;
    min-height: 800px;
    margin: 0 auto;
    /* background: rgba(244,91,8,.2); */
}
.innerhead{
    width: 1200px;
    height: 50px;
    line-height: 50px;
    text-align: left;
}
.innerleft{
    width: 180px;
    height: 520px;
    background: #fff;
    float: left;
    border: 1px solid #e4e7ed;
}
.el-tabs--card>.el-tabs__header .el-tabs__nav{
    border: none;
}
.innerright{
    width: 990px;
    min-height: 660px;
    background: #f2f2f2;
    float: right;
    margin-bottom: 50px;
    border: 1px solid #e4e7ed;
}
/* 左侧列表 */
.list{
    text-align: center;
    margin-top: 20px;
}
.list li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 14px;
}
li a{
    color: black;
}
.list .title{
    font-size: 18px;
    font-weight: 400;
    /* padding: 7px 0; */
    height: 52px;
    line-height: 52px;
}
</style>


