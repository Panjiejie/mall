<template>
    <div id="haitao">
        <div class="h-title">
            首页 > 海淘
        </div>
        <!-- 选项 -->
        <div class="h-brandslist">
            <div class="list-item clearfix">
                <div class="list-item-title">分类：</div>
                <div class="list-item-content">
                    <span class='brands'  @click='chooseSorts(item,sortlist)' :class='{isshoworange:item.isshowOrange}' v-for='item in sortlist' :key="item.key">{{item.text}}</span>
                </div>
            </div>
            <div class="list-item clearfix">
                <div class="list-item-title">品牌：</div>
                <div class="list-item-content">
                    <span class='brands'  @click='chooseSorts(item,brandList)' :class='{isshoworange:item.isshowOrange}' v-for='item in brandList' :key="item.key">{{item.text}}</span>
                </div>
            </div>
        </div>
        <!-- 详情区域 -->
        <div class="h-content">
            <div class="h-content-title">
                <span @click="chooseSorts(item,detailTitle)" class="front" :class="{isorange:item.isshowOrange}" v-for='item in detailTitle' :key="item.key">{{item.title}}</span>
                <span  class="front h-t-price" :class="{isorange:isshowPriceOrange}">
                    价格排序&nbsp;
                    <span class="top-triangle" :class='{btriangle:isTopOrange}' @click="toLowerPrice()"></span>
                    <span class="bottom-triangle" :class="{ttriangle:isBottomOrange}" @click="toExpensivePrice()"></span>
                </span>
                <span class="h-t-right" :class="{isorange:isStore}" @click="isStoreOrNot">
                    仅显示有货
                </span>
            </div>
            <div class="h-content-body">
                <ul class="clearfix" >
                    <li  v-for="item in goodsList" :key="item.key" :class="{nonemarginright:item.noMargin}"><goodsItem :itemParams='item'></goodsItem> </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import imgurl from '../../../assets/common/logo.png'
import goodsItem from '../../../components/public/goodsitem'
export default {
    name:"haitao",
    components:{
        goodsItem
    },
    data(){
        return{
            isshowPriceOrange:false,//是否更改价格排序字体颜色
            isTopOrange:false,
            isBottomOrange:false,
            isStore:false,
            sortlist:[
                {'text':'全部',isshowOrange:true,value:'0'},
                {'text':'全部',isshowOrange:false,value:'0'},
                {'text':'全部',isshowOrange:false,value:'0'},
                {'text':'全部',isshowOrange:false,value:'0'},
                {'text':'全部',isshowOrange:false,value:'0'},
                {'text':'全部',isshowOrange:false,value:'0'},
                {'text':'全部',isshowOrange:false,value:'0'},
                ],
            brandList:[
                    {'text':'品牌',isshowOrange:true,value:'0'},
                    {'text':'品牌',isshowOrange:false,value:'0'},
                    {'text':'品牌',isshowOrange:false,value:'0'},
                    {'text':'品牌',isshowOrange:false,value:'0'},
                    {'text':'品牌',isshowOrange:false,value:'0'},
                    {'text':'品牌',isshowOrange:false,value:'0'},
                    {'text':'品牌',isshowOrange:false,value:'0'},
                    {'text':'品牌',isshowOrange:false,value:'0'},
                    {'text':'品牌',isshowOrange:false,value:'0'},
                    {'text':'品牌',isshowOrange:false,value:'0'},
                    {'text':'品牌',isshowOrange:false,value:'0'},
                    {'text':'品牌',isshowOrange:false,value:'0'},
                    {'text':'品牌',isshowOrange:false,value:'0'},
                    {'text':'品牌',isshowOrange:false,value:'0'},
                ],
            goodsList:[
                {src:imgurl,title:'中华人民共和国万岁',subtitle:'56个民族是一家',price:'10000',noMargin:false},
                {src:imgurl,title:'中华人民共和国万岁',subtitle:'56个民族是一家',price:'10000',noMargin:false},
                {src:imgurl,title:'中华人民共和国万岁',subtitle:'56个民族是一家',price:'10000',noMargin:false},
                {src:imgurl,title:'中华人民共和国万岁',subtitle:'56个民族是一家',price:'10000',noMargin:false},
                {src:imgurl,title:'中华人民共和国万岁',subtitle:'56个民族是一家',price:'10000',noMargin:false},
                {src:imgurl,title:'中华人民共和国万岁',subtitle:'56个民族是一家',price:'10000',noMargin:false},
                {src:imgurl,title:'中华人民共和国万岁',subtitle:'56个民族是一家',price:'10000',noMargin:false},
                {src:imgurl,title:'中华人民共和国万岁',subtitle:'56个民族是一家',price:'10000',noMargin:false},
                {src:imgurl,title:'中华人民共和国万岁',subtitle:'56个民族是一家',price:'10000',noMargin:false},
            ],
            detailTitle:[
                {title:'最新商品',isshowOrange:true},
                {title:'最高人气',isshowOrange:false}
            ] 
        }
    },
    mounted:function(){
        this.goodsListFilter()
    },
    methods:{
        chooseSorts(item,list){
            list.forEach((val)=>(val.isshowOrange=false));
            this.isBottomOrange=false;
            this.isTopOrange=false;
            item.isshowOrange=true;
        },
        goodsListFilter(){//最后一个li去除margin
            this.goodsList.forEach((item,index)=>{
                if(index%5==4){
                    item.noMargin=true;
                }
            })
        },
        toLowerPrice(){
            alert('价格从低到高排列');
            this.detailTitle.forEach(item=>item.isshowOrange=false)
            this.isTopOrange=true;
            this.isBottomOrange=false;
        },
        toExpensivePrice(){
            alert('价格从高到底排列');
            this.detailTitle.forEach(item=>item.isshowOrange=false)
            this.isBottomOrange=true;
            this.isTopOrange=false;
        },
        isStoreOrNot(){
            //仅显示有货
            this.isStore?this.isStore=false:this.isStore=true;
        }
    },
    computed:{
    }
}
</script>
<style scoped>
    #haitao{
        width: 100%;
        background: #f2f2f2;
        position: relative;
    }
    .h-title{
        width: 1200px;
        height: 50px;
        line-height: 50px;
        /* color: #999; */
        font-size: 14px;
        margin: 0 auto;
        text-align: left;
    }
    .h-brandslist{
        width: 1200px;
        height: 190px;
        padding: 20px 30px;
        background: #fff;
        margin: 0 auto;
    }
    .list-item{
        width: 1140px;
        /* height: 50px; */
        /* line-height: 50px; */
        font-size: 14px;
    }
    .list-item-title{
        color: rgb(51,51,51);
        float: left;
        height: 50px;
        line-height: 50px;
    }

    .list-item-content{
        float: left;
        width: 1098px;
    }
    .brands{
        float: left;
        height: 32px;
        line-height: 15px;
        margin:8px 0 8px 40px;
        padding: 8px 16px;
        border: 1px solid transparent;
        border-radius: 18px;
    }
    .isshoworange{
        border-color: rgb(244,91,8);
        color: rgb(244,91,8);
    }
    .h-content{
        width: 1200px;
        min-height:800px;
        background: #f2f2f2;
        padding: 30px 0  50px 0;
        margin: 0 auto;
    }
    .h-content-title{
        width: 1200px;
        height: 30px;
    }
    .front{
        float: left;
        margin-right: 36px;
        color: rgb(51,51,51);
    }
    .h-content-body{
        width: 1200px;
    }
    .h-content-body ul{
        width: 1200px;
        float: left;
    }
    .h-content-body li{
        float: left;
        /* width: 230px; */
        /* height: 340px; */
        /* background: #999;s */
        list-style: none;
        margin-right:12px ;
        cursor: pointer;
    }
    .nonemarginright{
        margin-right:0 !important;
    }
    .isorange{
        color: rgb(244,91,8);
    }
    .h-content-title span{
        cursor: pointer;
    }
    .h-t-price{
        position: relative;
        width: 78px;
    }
    .h-t-price>span{
        position: absolute;
        width: 7px;
        height: 0px;
        border: 4px solid transparent;
    }
    .h-t-price .top-triangle{
        border-bottom-color: rgb(51,51,51);
        top: 0;
        right: 5px;
    }
    .h-t-price .bottom-triangle{
        border-top-color: rgb(51,51,51);
        top: 9px;
    }
    .ttriangle{
        border-top-color:rgb(244,91,8) !important;
    }
    .btriangle{
        border-bottom-color:rgb(244,91,8) !important;
    }
    .h-t-right{
        float: right;
    }
</style>


