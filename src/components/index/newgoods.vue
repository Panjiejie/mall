<template>
    <div class="content">
        <div class="title">
            <span class="line"></span>
            <span class="maintitle">新品上架</span>
            <div class="morebrand">
                <span @click='toFirstPage' style='position:relative;left:6px;'><img src="../../assets/index/lt.png" alt=""></span>
                <span @click='toLastPage'><img src="../../assets/index/gt.png" alt=""></span>
            </div>
        </div>
        <div class="brands clearfix">
            <div class="seckill-left">
                <h2>春季新品上架</h2>
                <span class="newline"></span>
            </div>
            <div class="seckill-right">
                <ul class="clearfix">
                    <li v-for='i in list' :key="i.key" @click="toGoodsDetail">
                        <div class="img__content">
                            <img :src="i.FilePath" style="width:200px;height:200px;" alt="">   
                        </div>
                        <h5>pt950铂金钻石结婚对戒</h5>
                        <div>
                            <span class="price"><span class="mlogo">¥</span>{{i.price}}</span>
                        </div>
                        <div class="seckill-btn">立即购买</div>
                    </li>
                    <li class="last" :class="{isshow:isshow}">
                        <h2>浏览更多新品</h2>
                        <h4>Browse more new products</h4>
                        <p class="lines"></p>
                        <img src="../../assets/index/circle_arr.png" alt="">
                        <!-- <div class="arr">&gt;</div> -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'newgoods',
    // props:[list],
    data(){
        return{
            isshow:false,
            list:[
            ]
        }
    },
    mounted(){
        this.toFirstPage();
    },
    methods:{
        toGoodsDetail(){
            this.$router.push('nav/goodsDetail')
        },
        toFirstPage(){
            this.isshow=false;
            this.requestGoods(1,4);
           
        },
        toLastPage(){
            this.isshow=true;
            this.requestGoods(2,3);
        },
        requestGoods(sum,num){
             let obj = '[["Status","Sort","StockSum","Sum","Num"],["1","0","0","'+sum+'","'+num+'"]]';
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
                        price:data.SupplyMoney[i]
                    })
                    }
                    
                    
                },
                response => {
                    console.log("请求失败");
                    console.log(response);
                }
                );
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
    height: 383px;
    margin:45px auto 35px;  
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
}
.morebrand span{
    display: inline-block;
    width: 36px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    border: 1px solid rgb(221,221,221)
}
.seckill-left{
    width: 230px;
    height: 340px;
    float: left;
    background: -webkit-linear-gradient(-45deg, #F1293E, #FBC31D); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(-45deg, #F1293E, #FBC31D); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(-45deg, #F1293E, #FBC31D); /* Firefox 3.6 - 15 */
    background: linear-gradient(-45deg, #F1293E, #FBC31D); /* 标准的语法 */
}
.seckill-right{
    float: left;
    width: 970px;
}
.seckill-left:after , .seckill-right:after{
    content: "";
    display: block;
    clear: both;
}
.seckill-right li{
    width:230px ;
    height: 340px;
    margin-left:12.25px ;
    float: left;
    list-style: none;
    padding: 15px 15px 0;
    position: relative;
    border: 1px solid #f6f6f6;
}
.seckill-right li img{
    display: block;
    width: 200px;
    height: 200px;
}
.seckill-right .last img{
    width: 54px;
    height: 54px;
    margin:40px 0 0 70.5px;
}
.seckill-right li h5{
    margin:12px 0 0px; 
    font-size: 18px;
    font-weight: 300;
}
.seckill-right .price{
    color: #ff2040;
    font-family:"MicrosoftYaHei-Bold";
    font-size: 20px;
}
.seckill-right .count-price{
    color: #999;
    text-decoration: line-through;
    font-size: 12px;
}
.mlogo{
    font-size: 16px;
    display: inline-block;
    margin-right:6px; 
}
.lines{
    width: 38px;
    height: 2px;
    background: rgb(120,120,120);
    margin:26px 78.5px;
}
.seckill-btn{
    width: 225px;
    height: 50px;
    background: #ff2040;
    /* margin-top: 5px; */
    position: absolute;
    bottom: 0;
    left: 0;
    /* padding: 10px 8px 0; */
    color: #fff;
    line-height: 50px;
    font-size: 14px;
    font-weight: 500;
}
.progress{
    width: 135px;
    float: left;
    height: 30px;
    margin-right:8px ;
}
.seckill-rightnow{
    float: left;
    font-size: 14px;
    color: #fff;
    line-height: 30px;
}
.seckill-btn:after{
    content: "";
    display: block;
    clear: both;
}
.seckill-left h2{
    color: #9fb1a2;
    font-weight: 400;
    margin:47px 25px 0;
    width: 180px;
    border-bottom: 2px solid #9fb1a2;
}
.seckill-right .last{
    padding-top:90px ;
    display: none;
}
.isshow{
    display: block !important;
}
.seckill-right .last .line{
    width: 36px;
    color:#787878;
    display: block;
    margin: 30px 97px 0;
}
.arr{
    width: 54px;
    height: 54px;
    border: 2px solid #f45b08;
    border-radius: 50%;
    font-size: 24px;
    color: #f45b08;
    margin: 44px 88px 0;

}
</style>





