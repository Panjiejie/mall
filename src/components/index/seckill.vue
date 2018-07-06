<template>
    <div class="content">
        <div class="title">
            <span class="line"></span>
            <span class="maintitle">限时秒杀</span>
            <span class="subhead">每日好物 限量秒杀</span>
            <!-- <a class="morebrand" href="/haitao">查看全部> </a> -->
            <!-- <router-link class="morebrand" to="nav/seckill">查看全部> </router-link> -->
        </div>
        <div class="brands">
            <div class="seckill-left">
                <!-- <h2>限时秒杀</h2>
                <h4>FLASH DEALS</h4>
                <div class="flash">
                    <img src="../../assets/common/kefu.png" style="width:48px;height:52px;" alt="">
                </div>
                <h3>距离开始还剩</h3>
                <div class="countdown">
                    <span class="hours">01</span>:
                    <span class="minutes">26</span>:
                    <span class="seconds">56</span>
                </div> -->
                <img src="../../assets/index/seckill_1.png" style="position: relative;top: 72px;">
                <div>123</div>
            </div>
            <div class="seckill-right">
                <ul class="clearfix"> 
                    <li @click="toSeckillDetailPage(i)" v-for='i in list' :key="i.key">
                        <div class="img__content">
                            <img :src="i.FilePath" style="width:200px;height:200px;" alt="">   
                        </div>
                        <h5>{{i.CommodityName}}</h5>
                        <div>
                            <span class="price"><span class="mlogo">¥</span>{{i.ActivityMoney}}</span>
                            <span class="count-price">¥{{i.SalesMoney}}</span>
                        </div>
                        <div class="seckill-btn">
                            <div class="progress">
                                <el-progress :text-inside="true" :stroke-width="30" :percentage="i.percent" color="rgba(142, 113, 199, 0.7)">222</el-progress>
                            </div>
                            <span class="seckill-rightnow">立即秒杀</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'seckill',
    // props:[list],
    data(){
        return{
            list:[
                // {name:"ck制造商",price:"25元起"},
                // {name:"22制造商",price:"49元起"},
                // {name:"33制造商",price:"59元起"}
            ]
        }
    },
    created(){
        this.UserAccount=localStorage.getItem('UserAccount');
        this.requestGoods();
    },
    methods:{
        toSeckillDetailPage(item){
            this.$router.push(`nav/seckillGoodsDetail/${item.CommodityNumber}`)
        },
         requestGoods(){
            // let obj = '[["Status","Sort","IndustryNameOne","StockSum","Sum","Num"],["1","0","'+this.common.brand+'","0","'+sum+'","'+num+'"]]';
            // console.log(obj)
             this.axios.post("/Activity/MallActivityInfo", {
                SOURCE: "22",
                CREDENTIALS: "0",
                TERMINAL: "0",
                INDEX: "20170713170325",
                METHOD: "MallActivityInfo",
                LoginUser:'0',
                UserAccount:this.UserAccount,
                Status:'1',
                StatusDay:'1'
                })
                .then(
                response => {
                    let data=response.data.DATA[0];
                    let CommodityInfo=data.CommodityInfo;
                    console.log(CommodityInfo)
                    // this.list.length=0;
                    for(let i=0,len=4;i<len;i++){
                        let FilePath=CommodityInfo[i].FilePath[0].split(',');
                        FilePath=FilePath[0]+FilePath[1];
                        let percent=(parseInt(CommodityInfo[i].StockSum)-parseInt(data.StockSum[i]))/parseInt(data.SalesSum[i])
                        this.list.push({
                        CommodityName:CommodityInfo[i].CommodityName[0],
                        FilePath:FilePath,
                        BrandName:CommodityInfo[i].BrandName[0],
                        price:CommodityInfo[i].SupplyMoney[0],
                        ActivityMoney:data.ActivityMoney[i],
                        SalesMoney:data.SalesMoney[i],
                        SalesSum:data.SalesSum[i],
                        StockSum:data.StockSum[i],
                        percent:Math.round(percent*10000/100).toFixed(2),
                        CommodityNumber:data.CommodityNumber[i],
                        StartTime:data.StartTime[i],
                        EndTime:data.EndTime[i],

                        // AttributeGroup:CommodityInfo[i].AttributeGroup
                    })
                    }
                    console.log('this.list')
                    console.log(this.list)
                    
                    
                },
                response => {
                    console.log("请求失败");
                    console.log(response);
                }
                );
        },
    },
}
</script>
<style scoped>
.content{
    width: 1200px;
    height: 383px;
    margin:45px auto 0;  
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
.img__content{
    overflow: hidden;
}
.img__content img{
    transition: all 0.6s;
}
.img__content img:hover{
    transform: scale(1.2);
}
.line{
    display: inline-block;
    width: 3px;
    height: 18px;
    background: #F45B08;
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
.seckill-left{
    width: 230px;
    height: 340px;
    float: left;
    background: url(../../assets/brandimg/seckill/2.jpg);
    
}
.seckill-left h4,.seckill-left h3,.seckill-left .countdown{
    color: #fff;
}
.seckill-left h2{
    margin-top: 47px;
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
    border-top:3px solid rosybrown;
}
.seckill-right li img{
    display: block;
    width: 200px;
    height: 200px;
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
.seckill-btn{
    width: 229px;
    height: 50px;
    background: #ff2040;
    /* margin-top: 5px; */
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 8px 0;
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
    font-weight: 500;
}
.seckill-btn:after{
    content: "";
    display: block;
    clear: both;
}
</style>


