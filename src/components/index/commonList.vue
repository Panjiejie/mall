<template>
<div class="bg">
<div class="content">
        <div class="title">
            <span class="line"></span>
            <span class="maintitle">{{common.brand}}</span>
            
            <a class="morebrand" href="/haitao">查看全部&gt;</a>
            <div class="navlist">
                <span v-for='item in common.list' :key='item.key' @click="toBrandGoods(item)"><a>{{item}}/</a></span>
            </div>
        </div>
        <div class="brands">
            <div class="common-left">
                <div class="top">top</div>
                <div>bottom</div>
            </div>
            <div class="common-right">
                <ul>
                    <li v-for="item in list" :key="item.id" @click="toGoodsDetail(item)">
                        <div class="img__content">
                            <img :src="item.FilePath" style="width:200px;height:200px;" alt="">  
                        </div>
                        <h5>{{item.title}}</h5>
                        <h6>{{item.BrandName}}</h6>
                        <div>
                            <span class="price"><span class="mlogo">¥</span> {{item.price}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="common-bottom">
                <div class="adcontent"></div>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
import imgurl from '../../assets/common/logo.png'
export default {
    name:'commonList',
    props:['common'],
    data(){
        return{
            list:[],
            IndustryNameTwo:[],
            AttributeGroup:''
        }
    },
    mounted(){
        this.requestGoods(1,8);
        this.requestIndustryNameTwo();
    },
    methods:{
        toGoodsDetail(item){
            this.AttributeGroup=item.AttributeGroup;
            this.$router.push({path:`nav/goodsdetail/${this.AttributeGroup}`})
        },
        requestGoods(sum,num){
            let obj = '[["Status","Sort","IndustryNameOne","StockSum","Sum","Num"],["1","0","'+this.common.brand+'","0","'+sum+'","'+num+'"]]';
            // console.log(obj)
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
                    // console.log(response)
                    let data=response.data.DATA[0];
                    // console.log(data.FilePath);
                    this.list.length=0;
                    for(let i=0,len=data.FilePath.length;i<len;i++){
                        let FilePath=data.FilePath[i].split(',');
                        FilePath=FilePath[0]+FilePath[1];
                        this.list.push({
                        title:data.CommodityName[i],
                        FilePath:FilePath,
                        BrandName:data.BrandName[i],
                        price:data.SupplyMoney[i],
                        AttributeGroup:data.AttributeGroup[i]
                    })
                    }
                    
                    
                },
                response => {
                    console.log("请求失败");
                    console.log(response);
                }
                );
        },
        requestIndustryNameTwo(){
                 let obj = '[["Status","IndustryName"],["1","'+this.commonname+'"]]';
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
                        console.log(response)
                        // let data=response.data.DATA[0];
                        // // console.log(data.FilePath);
                        // this.list.length=0;
                        // for(let i=0,len=data.FilePath.length;i<len;i++){
                        //     let FilePath=data.FilePath[i].split(',');
                        //     FilePath=FilePath[0]+FilePath[1];
                        //     this.list.push({
                        //     title:data.CommodityName[i],
                        //     FilePath:FilePath,
                        //     BrandName:data.BrandName[i],
                        //     price:data.SupplyMoney[i]
                        // })
                        // }
                        
                        
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        },
        toBrandGoods(val){
            this.$router.push({path:`nav/haitao/${this.common.brand}/${val}`})
            // console.log( this.$router.push({path:`nav/haitao/${this.common.brand}/${val}`}))
        }
    }
}
</script>
<style scoped>
.img__content{
    overflow: hidden;
}
.img__content img{
    transition: all 0.6s;
}
.img__content img:hover{
    transform: scale(1.2);
}
.content{
    width: 1200px;
    /* height: 383px; */
    margin: 0 auto;  
    /* background: rgba(244,91,8,.2) */
}
.title{
    width: 1200px;
    height: 25px;
    line-height: 25px;
    margin: 0 auto;
    text-align: left;
    margin-bottom:18px; 
}
.line{
    display: inline-block;
    width: 3px;
    height: 18px;
    background: #70d4c0;
    margin-right: 12px;
}
.maintitle{
    display: inline-block;
    font-size: 25px;
    color: #2D2D2D;
    margin-right:20px; 
}
.subhead{
    display: inline-block;
    font-size: 14px;
    color: #1C1C1C;
    height: 25px;
    line-height: 25px;
}
.morebrand{
    float:right;
    color: #333;
    font-size: 14px;
    margin-left: 40px;
}
.navlist{
    float: right;
}
.navlist a{
    color: #999;
}
.navlist a:hover{
    color: #999;
}
.common-left:after , .common-right:after{
    content: "";
    display: block;
    clear: both;
}
.common-left{
    float: left;
    width: 230px;
    height: 690px;
}
.common-left div{
    float: left;
    width: 230px;
    height: 340px;
    background: #70d4c0;
    margin-bottom: 10px;
}
.content{
    width: 1200px;
    height: 924px;
}
.common-right{
    float: left;
    width: 970px;
    height: 700px;
    /* background: rgba(216,221,255,.3); */
}
.common-right ul{
    width: 970px;
    height: 700px;
}
li{
    width: 230px;
    height: 340px;
    list-style: none;
    float: left;
    background: #fff;
    margin: 0 0 10px 12.5px;
    padding: 15px 15px 0;
}
.bg{
    background: #f5f5f5;
    width: 100%;
    padding-top:45px;
    /* margin-top: 35px; */
}
/* li img{
    border: 1px solid #999;
} */
li h5{
    font-size:14px;
    color: #333;
    margin: 15px 0 14px;
}
li h6{
    font-size: 14px;
    color: #999;
    margin-bottom: 5px;
    font-weight: 400;
}
li div{
    color: #ff2040;
    font-size: 20px;
}
.common-bottom{
    width: 100%;
    height: 120px;
    margin-top: 30px;
}
.adcontent{
    width: 1200px;
    height: 120px;
    background: #70d4c0;
    margin-top: 30px;
}
.common-bottom:before{
    content: "";
    display: block;
    clear: both;
}
</style>





