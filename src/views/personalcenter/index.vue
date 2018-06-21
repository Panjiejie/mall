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
                        <!-- <li class="title"><span >我的账户</span></li>
                        <li><router-link to="personalSetting">个人设置</router-link></li>
                        <li><router-link to="safeAdmin">安全管理</router-link></li>
                        <li><router-link to="addressAdmin">地址管理</router-link></li>
                        <li><router-link to="myFootpoint">我的足迹</router-link></li>
                        <li class="title"><span>交易管理</span></li>
                        <li><router-link to="myOrder">我的订单</router-link></li>
                        <li class="title"><span>收藏的商品</span></li>
                        <li><router-link to="myFavorite">收藏的商品</router-link></li> -->
                        <!-- <li class="title"><span>帮助中心</span></li> -->
                        <!-- <li><router-link to="safeAdmin">平台客服</router-link></li> -->
                        <li  @click="toPages(item)" v-for="item in list" :key='item.key' :class="{istitle:item.istitle,isorange:item.ischeck}"><router-link :to="item.toWhere">{{item.text}}</router-link></li>
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
            list:[
                {text:'我的账户',istitle:true,ischeck:false,toWhere:''},
                {text:'个人设置',istitle:false,ischeck:false,toWhere:'personalSetting'},
                {text:'安全管理',istitle:false,ischeck:false,toWhere:'safeAdmin'},
                {text:'地址管理',istitle:false,ischeck:false,toWhere:'addressAdmin'},
                {text:'我的足迹',istitle:false,ischeck:false,toWhere:'myFootpoint'},
                {text:'交易管理',istitle:true,ischeck:false,toWhere:''},
                {text:'我的订单',istitle:false,ischeck:false,toWhere:'myOrder'},
                {text:'我的收藏',istitle:true,ischeck:false,toWhere:''},
                {text:'收藏的商品',istitle:false,ischeck:false,toWhere:'myFavorite'},
            ]
        }
    },
    methods:{
        toPages(item){
            if(!item.istitle){
                this.list.forEach(e=>e.ischeck=false);
                item.ischeck=true;
            }
        }
    }
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
.istitle{
    font-size: 18px !important;
    font-weight: 800 !important;
    /* padding: 7px 0; */
    height: 52px !important;
    line-height: 52px !important;
}
.isorange{
    color: rgb(242,91,8) !important;
}
</style>


