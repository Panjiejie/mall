<template>
    <div id="haitao">
        <div class="h-title">
            首页 > {{name}}
        </div>
        <!-- 选项 -->
        <div class="h-brandslist">
            <div class="list-item clearfix">
                <div class="list-item-title">行业：</div>
                <div class="list-item-content">
                    <span class='brands'  @click='chooseSorts(item,sortlist)' :class='{isshoworange:item.isshowOrange}' v-for='item in sortlist' :key="item.key">{{item.text}}</span>
                </div>
            </div>
            <div class="list-item clearfix">
                <div class="list-item-title">分类：</div>
                <div class="list-item-content">
                    <span class='brands'  @click='chooseBrands(item,brandList)' :class='{isshoworange:item.isshowOrange}' v-for='item in brandList' :key="item.key">{{item.text}}</span>
                </div>
            </div>
        </div>
        <!-- 详情区域 -->
        <div class="h-content">
            <div class="h-content-body">
                <ul class="clearfix" >
                    <li class='goodsItem' v-for="item in goodsList" :key="item.key" :class="{nonemarginright:item.noMargin}">
                        <!-- <goodsItem :itemParams='item'></goodsItem>  -->
                        <div class="item-content img__content" @click="toGoodsDetail(item.AttributeGroup)">
                            <img :src="item.src" style="width:200px;height:200px;" alt="">
                            <h5>{{item.title}}</h5>
                            <h6>{{item.subtitle}}</h6>
                            <div>
                                <span class="price"><span class="mlogo">¥</span> {{item.price}}</span>
                            </div>
                        </div>
                    </li>
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
            checked:false,
            IndustryNameOne:'',
            IndustryNameTwo:'',
            BrandName:'全部',
            name:'',
            id:'',//路由参数
            sortlist:[
                {'text':'全部',isshowOrange:true,value:'0'},
                {'text':'奶粉',isshowOrange:false,value:'1'},
                {'text':'酒类',isshowOrange:false,value:'2'},
                {'text':'食品',isshowOrange:false,value:'3'},
                {'text':'美妆',isshowOrange:false,value:'4'},
                {'text':'其它',isshowOrange:false,value:'5'},
                ],
            milkList:['1段','2段','3段','4段'],
            wineList:['白酒','红酒','黄酒','保健酒','啤酒'],
            foodList:['休闲零食','坚果炒货','肉干熟食','蜜饯果干','茶叶','饼干糕点','进口食品','有机食品','保健食品','粮油速食'],
            beautyList:['面部护肤','身体护理','美容护肤','口腔护理','彩妆香水','男士护理','洗发护发'],
            // zhubaoList:['手链','戒指','吊坠','情侣对','项链','套链','手镯','脚镯'],
            else:['其它'],
            brandList:[
                    {'text':'全部',isshowOrange:true,value:'0'},
                    // {'text':'品牌',isshowOrange:false,value:'0'},
                    // {'text':'品牌',isshowOrange:false,value:'0'},
                    // {'text':'品牌',isshowOrange:false,value:'0'},
                    // {'text':'品牌',isshowOrange:false,value:'0'},
                    // {'text':'品牌',isshowOrange:false,value:'0'},
                    // {'text':'品牌',isshowOrange:false,value:'0'},
                ],
            goodsList:[
                // {src:imgurl,title:'中华人民共和国万岁',subtitle:'56个民族是一家',price:'10000',noMargin:false},
            ],
            detailTitle:[
                {title:'最新商品',isshowOrange:true,val:1},
                {title:'最高人气',isshowOrange:false,val:2}
            ] 
        }
    },
    created(){
        this.id=this.$route.params.id
        if(this.id=='1'){
            this.name='人气推荐';
            this.init(0,0)
        }else if(this.id=='2'){
            this.name='特惠推荐';
            this.init(2,1)
        }else{
            this.name='优选推荐';
            this.init(3,0)
        }
    },
    mounted:function(){
        
    },
    methods:{
        init(Status,Sort){
            //Status: 排序种类 0-销量排序、1-时间排序、2-单价排序、3-随机排序; 
            //Sort: 排序序列 0-降序排序、0-1升序排序
            //StockSum: 过滤库存数（显示 > StockSum 库存 ）
            //;IndustryNameOne: 一级行业（没有不传）;
            //IndustryNameTwo: 二级行业（没有不传）;
            //BrandName: 品牌（没有不传）
            //Sum: 单页总数;Num: 页码
            let obj = '[["Status","Sort","StockSum","Sum","Num","IndustryNameTwo","IndustryNameOne"],["'+Status+'","'+Sort+'","0","1","20","'+this.IndustryNameTwo+'","'+this.IndustryNameOne+'"]]';
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
        chooseSorts(item,list){//选择行业
            this.IndustryNameTwo='';
            this.goodsList.length=0;
            list.forEach((val)=>(val.isshowOrange=false));
            item.isshowOrange=true;
            if(item.text=='全部'){
                this.IndustryNameOne='';
                alert('行业全部')
            }else{
                this.IndustryNameOne=item.text;
            }
            // this.init(1,0);
            this.brandList.length=1;
            if(item.value=='1'){
                for(let i=0;i<this.milkList.length;i++){
                    this.brandList.push({
                        text:this.milkList[i],
                        isshowOrange:false,
                        value:1
                    })
                }
            }else if(item.value=='2'){
                for(let i=0;i<this.wineList.length;i++){
                    this.brandList.push({
                        text:this.wineList[i],
                        isshowOrange:false,
                        value:1
                    })
                }
            }else if(item.value=='3'){
                for(let i=0;i<this.foodList.length;i++){
                    this.brandList.push({
                        text:this.foodList[i],
                        isshowOrange:false,
                        value:1
                    })
                }
            }else if(item.value=='4'){
                for(let i=0;i<this.beautyList.length;i++){
                    this.brandList.push({
                        text:this.beautyList[i],
                        isshowOrange:false,
                        value:1
                    })
                }
            }else if(item.value=='5'){
                for(let i=0;i<this.else.length;i++){
                    this.brandList.push({
                        text:this.else[i],
                        isshowOrange:false,
                        value:1
                    })
                }
            }
            // console.log('hangye'+this.IndustryNameOne)
             if(this.id=='1'){
                this.init(0,0)
            }else if(this.id=='2'){
                this.init(2,1)
            }else{
                this.init(3,0)
            }
        },
        chooseBrands(item,list){//选择分类
            list.forEach((val)=>(val.isshowOrange=false));
            item.isshowOrange=true;
            if(item.text=='全部'){
                this.IndustryNameTwo='';
                alert('分类全部')
            }else{
                this.IndustryNameTwo=item.text;
            }
            
            if(this.id=='1'){
                this.init(0,0)
            }else if(this.id=='2'){
                this.init(2,1)
            }else{
                this.init(3,0)
            }
            // this.init(1,0);
            // console.log('分类'+this.IndustryNameTwo)
        },
        toGoodsDetail(val){
            this.$router.push({path:`../goodsDetail/${val}`});
        }

         
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
        cursor: pointer;
    }
    .isshoworange{
        color: rgb(244,91,8);
        cursor: pointer;
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
    .goodsItem:nth-child(5n){
        margin-right: 0;
    }
    .img__content{
    overflow: hidden;
}
.img__content img{
    transition: all 0.6s;
}
.img__content img:hover{
    transform: scale(1.2);
}
.item-content{
    width: 230px;
    height: 340px;
    background: #fff;
    padding: 15px 15px 0;
    border: 1px solid rgb(221,221,221);
    margin-bottom: 12px;
}
.item-content h5{
    font-size: 14px; 
    color: #333;
    margin: 15px 0 0;
}
.item-content h6{
    font-size: 14px;
    color: #999;
    margin-bottom: 5px;
    font-weight: 400;
}
.price{
    color: #ff2040;
    font-size: 20px;
}
</style>


