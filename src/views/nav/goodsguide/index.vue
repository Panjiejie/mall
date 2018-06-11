<template>
    <div id="guide-content">
        <img id='bg-img' src="../../../assets/goodsGuide/bg.png" alt="">
        <div class="body-content">
            <div class="nav">
                <ul   class="navlist clearfix">
                    <li v-for='item in navList' :key='item.key' :class="{ischoose:item.isshow}" @click="changeItem(item)">
                        <span :class="{line:item.isshow}">{{item.navItem}}</span>
                        <i class="triangle" :class="{istriangle:item.isshow}"></i>
                    </li>
                </ul>
            </div>
            <!-- 图文详情 -->
            <div class="detail-content clearfix">
                <ul class="clearfix">
                    <li v-for='item in detailList' class='goodsitem' :class="{isnomargin:item.noMargin}" :key='item.key'>
                        <img :src="item.src" alt="">
                        <h5>{{item.title}}</h5>
                        <div class="subtext">{{item.subtext}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import imgUrl from '../../../assets/common/logo.png'
export default {
    name:"goodsguide",
    components:{},
    data(){
        return{
            navList:[
                {navItem:'珠宝',isshow:true},
                {navItem:'酒类',isshow:false},
                {navItem:'奶粉',isshow:false},
                {navItem:'服饰',isshow:false},
                {navItem:'食品',isshow:false},
                {navItem:'其他',isshow:false},
                ],
                detailList:[
                     {src:imgUrl,title:'防晒做到位，不怕太阳放肆野',noMargin:false,subtext:'防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野'}
                    ,{src:imgUrl,title:'防晒做到位，不怕太阳放肆野',noMargin:false,subtext:'防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野'}
                    ,{src:imgUrl,title:'防晒做到位，不怕太阳放肆野',noMargin:false,subtext:'防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野'}
                    ,{src:imgUrl,title:'防晒做到位，不怕太阳放肆野',noMargin:false,subtext:'防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野'}
                    ,{src:imgUrl,title:'防晒做到位，不怕太阳放肆野',noMargin:false,subtext:'防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野防晒做到位，不怕太阳放肆野'}
                ]
        }
    },
    mounted:function(){
        this.detailListFilter();
    },
    methods:{
        changeItem(item){
            this.navList.forEach(val=>val.isshow=false);
            item.isshow=true;
        },
        detailListFilter(){
            this.detailList.forEach(((item,index)=>{
                if(index%4==3){
                    item.noMargin=true;
                }
            }))
        }
    }
}
</script>
<style scoped>
#guide-content{
    width: 100%;
    min-height:500px;
    background: #f2f2f2;
    position: relative;
}
#bg-img{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
.body-content{
    position: relative;
    z-index: 2;
    /* background-color: rgba(255,255,255,.1); */
    /* background: #fff; */
    width: 1200px;
    min-height:200px;
    margin: 0 auto;
    padding-top: 50px;
}
.navlist{
    width: 1200px;
    height: 70px;
    margin-bottom: 46px;
}
.navlist li{
    width: 200px;
    height: 60px;
    line-height: 26px;
    font-size: 16px;
    background: rgb(42,39,39);
    color: rgb(120,119,119);
    float: left;
    list-style: none;
    position: relative;
}
.navlist li span{
    display: inline-block;
    width: 200px;
    height: 24px;
    border-right: 3px solid rgb(74,73,73);
    margin-top: 18px;
}
.triangle{
    width: 22px;
    height: 0;
    border: 10px solid transparent;
    border-top-color: rgb(247,107,28);
    position: absolute;
    top: 60px;
    left: 88px;
    opacity:0;
}
.istriangle{
    opacity: 1;
}
.navlist .ischoose{
    /* background: linear-gradient(270deg rgb(245,102,30) rgb(246,133,16)); */
    background: rgb(247,107,28);
    color: #fff;
}
.navlist li .line{
    border-right-color: transparent;
}
.detail-content{
    width: 1200px;
    margin: 0 auto;
    background: #f2f2f2;
}
.detail-content ul{
    width: 1200px;
}
.detail-content li{
    width: 288px;
    height: 420px;
    float: left;
    background:rgb(255,255,255);
    list-style: none;
    margin: 0 16px 16px 0;
    border: 1px solid rgb(221,221,221)
}
.isnomargin{
    margin-right: 0 !important;
}
.goodsitem img{
    width: 286px;
    height: 286px;
}
.goodsitem h5,.goodsitem .subtext{
    width: 286px;
    padding: 0 25px 0 15px;
    text-align: left;
}
.goodsitem h5{
    font-size: 16px;
    margin-top: 16px;
}
.subtext{
    color: #999;
    font-size: 12px;
}
</style>
