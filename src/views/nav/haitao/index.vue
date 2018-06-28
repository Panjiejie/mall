<template>
    <div id="haitao">
        <div class="h-title">
            首页 > {{IndustryNameOne}}
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
                    <span class='brands'  @click='chooseBrands(item,brandList)' :class='{isshoworange:item.isshowOrange}' v-for='item in brandList' :key="item.key">{{item.text}}</span>
                </div>
            </div>
        </div>
        <!-- 详情区域 -->
        <div class="h-content">
            <div class="h-content-title">
                <span @click="detailSortsChoose(item,detailTitle)" class="front" :class="{isorange:item.isshowOrange}" v-for='item in detailTitle' :key="item.key">{{item.title}}</span>
                <span  class="front h-t-price" :class="{isorange:isshowPriceOrange}">
                    价格排序&nbsp;
                    <span class="top-triangle" :class='{btriangle:isTopOrange}' @click="toLowerPrice()"></span>
                    <span class="bottom-triangle" :class="{ttriangle:isBottomOrange}" @click="toExpensivePrice()"></span>
                </span>
                <span class="h-t-right" :class="{isorange:isStore}" @click="isStoreOrNot">
                    <!-- 仅显示有货 -->
                    <el-checkbox v-model="checked">仅显示有货</el-checkbox>
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
            checked:true,
            IndustryNameOne:'',
            IndustryNameTwo:'',
            BrandName:'全部',
            sortlist:[
                // {'text':'全部',isshowOrange:true,value:'0'},
                // {'text':'全部',isshowOrange:false,value:'0'},
                ],
            brandList:[
                    {'text':'全部',isshowOrange:true,value:'0'},
                    // {'text':'品牌',isshowOrange:false,value:'0'},
                ],
            goodsList:[
                // {src:imgurl,title:'中华人民共和国万岁',subtitle:'56个民族是一家',price:'10000',noMargin:false},
            ],
            detailTitle:[
                {title:'最新商品',isshowOrange:true},
                {title:'最高人气',isshowOrange:false}
            ] 
        }
    },
    created(){
        this.IndustryNameTwo=this.$route.params.IndustryNameTwo;
        this.IndustryNameOne=this.$route.params.IndustryNameOne;
    },
    mounted:function(){
        this.goodsListFilter();
        this.ClassifyNameReturn();
        this.init(1,0);
        this.brandsReturn();
    },
    methods:{
        init(Status,Sort){
             let obj = '[["Status","Sort","StockSum","Sum","Num","IndustryNameTwo","BrandName"],["'+Status+'","'+Sort+'","0","1","20","'+this.IndustryNameTwo+'","'+this.BrandName+'"]]';
             console.log(obj)
             this.axios.post("/Mall/MallCommodityInfo", {
                SOURCE: "22",
                CREDENTIALS: "0",
                TERMINAL: "0",
                INDEX: "20170713170325",
                METHOD: "MallCommodityInfo",
                DATA:encodeURI(obj)
                })
                .then(
                response => {
                    console.log(response)
                    let data=response.data.DATA[0];
                    // console.log(data.FilePath);
                    this.goodsList.length=0;
                    for(let i=0,len=data.FilePath.length;i<len;i++){
                        let FilePath=data.FilePath[i].split(',');
                        FilePath=FilePath[0]+FilePath[1];
                        console.log(FilePath)
                        this.goodsList.push({
                        title:data.CommodityName[i],
                        src:FilePath,
                        subtitle:data.BrandName[i],
                        price:data.SupplyMoney[i],
                        AttributeGroup:data.AttributeGroup[i],
                        noMargin:false
                    })
                    }
                    
                    
                },
                response => {
                    console.log("请求失败");
                    console.log(response);
                }
                );
        },
        ClassifyNameReturn(){//二级行业返回
             let obj = '[["Status","IndustryName"],["1","'+this.IndustryNameOne+'"]]';
                // console.log(obj)
                this.axios.post("/Mall/MallIndustryNameInfo", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "0",
                    INDEX: "20170713170325",
                    METHOD: "MallIndustryNameInfo",
                    DATA:encodeURI(obj)
                    })
                    .then(
                    response => {
                        // console.log(response+'二级行业返回')
                        let data=response.data.DATA[0];
                        let sortlist=data.ClassifyName;
                        this.sortlist.length=0;
                        for(let i=0,len=sortlist.length;i<len;i++){
                            this.sortlist.push({text:sortlist[i],isshowOrange:false,value:'0'})
                        }
                        this.sortlist.forEach(e=>{
                            if(e.text==this.IndustryNameTwo){
                                e.isshowOrange=true;
                            }
                        })
                        },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        },
        brandsReturn(){//品牌返回
                let obj = '[["Status","IndustryName"],["3","'+this.IndustryNameTwo+'"]]';
                console.log(obj)
                this.axios.post("/Mall/MallIndustryNameInfo", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "0",
                    INDEX: "20170713170325",
                    METHOD: "MallIndustryNameInfo",
                    DATA:encodeURI(obj)
                    })
                    .then(
                    response => {
                        
                        let data=response.data.DATA[0].BrandName;
                        // console.log('行业品牌返回')
                        this.brandList.length=1;
                        for(let i=0,len=data.length;i<len;i++){
                            this.brandList.push({text:data[i],isshowOrange:false})
                        }
                        },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        },
        detailSortsChoose(item,list){//最高人气 最新商品分类选择
             list.forEach((val)=>(val.isshowOrange=false));
            this.isBottomOrange=false;
            this.isTopOrange=false;
            item.isshowOrange=true;
            // this.IndustryNameTwo=item.text;
            this.init(0,0);
        },
        chooseSorts(item,list){//选择分类
            list.forEach((val)=>(val.isshowOrange=false));
            this.isBottomOrange=false;
            this.isTopOrange=false;
            item.isshowOrange=true;
            this.IndustryNameTwo=item.text;
            // this.init(1,0);
            this.brandsReturn();
        },
        chooseBrands(item,list){//选择品牌
            list.forEach((val)=>(val.isshowOrange=false));
            this.isBottomOrange=false;
            this.isTopOrange=false;
            item.isshowOrange=true;
            this.BrandName=item.text;
            this.init(1,0);
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
            this.init(2,1);
        },
        toExpensivePrice(){
            alert('价格从高到底排列');
            this.detailTitle.forEach(item=>item.isshowOrange=false)
            this.isBottomOrange=true;
            this.isTopOrange=false;
            this.init(2,0)
        },
        isStoreOrNot(){
            //仅显示有货
            // this.isStore?this.isStore=false:this.isStore=true;
            console.log(this.checked)
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
        min-height: 190px;
        padding: 20px 30px;
        background: #fff;
        margin: 0 auto;
    }
    .list-item{
        width: 1140px;
        /* height: 50px; */
        /* line-height: 50px; */
        font-size: 14px;
        border-bottom: 1px dashed rgb(221,221,221);
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
        /* border-color: rgb(244,91,8); */
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
        right: 6px;
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


