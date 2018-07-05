<template>
    <div class="content">
        <div>
            <!-- <innerTitle :none="none" :statusMsg="statusMsg"></innerTitle> -->
             <div class="content">
                <div class="title-content">
                    <div class="imgcontent">
                        <img :src="imgUrl" alt=""> 
                        <p>等待发货</p>  
                    </div>
                    <div class="infoscontent">
                        <div class="info">
                            <span class="title">订单编号：</span>{{waitingSendDetailItem.DealNumber}}
                        </div>
                        <div class="info">
                            <span class="title">下单时间：</span>{{waitingSendDetailItem.ConfirmTime}}&nbsp;&nbsp;{{waitingSendDetailItem.time2}}
                        </div>
                    </div>
                    <!-- <button @click="toAfterSale">申请售后</button> -->
                </div>
            </div>
        </div>
        <div class="bottom">
            <!-- <innerBottom :tableList='tableList'></innerBottom> -->
            <div class="step">
            <el-steps :active="1" finish-status="success" align-center>
                <el-step title="提交订单" :description='beginTime'></el-step>
                <el-step title="等待出库"></el-step>
                <el-step title="等待签收"></el-step>
                <el-step title="等待付款"></el-step>
                <el-step title="交易完成"></el-step>
            </el-steps>
        </div>
        <div class='line'>商品信息</div>
        <div id="table">
          <div id="table-header">
              <span class="goodsinfo" style="line-height:40px">商品信息</span>
              <span class="price">单价</span>
              <span class="amount">数量</span>
              <span class="subtotal">小计</span>
              <span class="realpay">实付</span>
          </div>
          <!-- 表格主体 -->
          <div class="table-line clearfix" v-for="item in tableList" :key="item.key">
              <div class="goodsinfo clearfix">
                  <img :src="item.imgUrl" alt="">
                  <div class="goodsinfo-right">
                    <span class="infotitle" >{{item.title}}</span><br>
                    <span>{{item.subtitle}} </span>
                  </div>
              </div>
              <div class="price">￥ {{item.price}}</div>
              <div class="amount">{{item.amount}}</div>
              <div class="subtotal">￥ {{item.subtotal}}</div>
              <div class="realpay">￥ {{item.net}}</div>
          </div>
        </div>
        <!-- consignee -->
        <div id="consigneeInfo-content">
        <p>收货信息</p>
            <div id="consigneeInfo">
                <p><span>收&nbsp;货&nbsp;人：</span>{{elseInfo.AddresseeName}}</p>
                <p><span>联系方式：</span>{{elseInfo.Telephone}}</p>
                <p><span>收货地址：</span>{{elseInfo.DetailedAddress}}</p>
            </div>
        </div>
        <!-- payment -->
        <div id="consigneeInfoss-content">
            <p>支付方式及送货时间</p>
            <div id="consigneeInfoss">
                <p>支付方式：<span class="red">货到付款</span></p>
                <p>送货时间：<span class="gray">双休日、假日送货(适合于家庭地址)</span></p>
            </div>
        </div>
        <!-- orderList -->
        <div class="orderList">
            <ul class="clearfix">
                <li><span>商品总数</span><span>{{orderList.amount}}</span></li>
                <!-- <li><span>商品总价</span><span class="red">￥</span></li> -->
                <!-- <li><span>活动优惠</span><span class="red">0</span></li>
                <li><span>优惠券抵扣</span><span class="red">0</span></li>
                <li><span>运费</span><span class="red">0</span></li> -->
                <li><span>应付总额</span><span class="red">￥{{orderList.MoneySum}}</span></li>
            </ul>
        </div>

        </div>
    </div>
</template>
<script>
// import innerTitle from '../../../../components/myOrder/innerTitle.vue'
import imgUrl from '../../../../assets/common/waitingSend.png'
import innerBottom from '../../../../components/myOrder/innerBottom.vue'
export default {
    name:'waitingSend',
    components:{
        // innerTitle,
        innerBottom,
        orderList:[],
         
    },
    data(){
        return{
            none:false,//是否不显示售后按钮
            statusMsg:'等待发货',
            imgUrl:imgUrl,
            waitingSendDetailItem:'',
            UserAccount:'',
            orderStatus:2,
            orderStatueTime:{
                beginTime:'',
                DeliveryTime:'',
                ReceiptTime:'',
                ConfirmTime:'',
                TradeTime:''
            },
            tableList:[
                // {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
            ],
            elseInfo:{
                AddresseeName:'',
                Telephone:'',
                DetailedAddress:'',
                OddNumbers:'',
                CarrierId:'',
            },
            orderList:{
                MoneySum:'',
                amount:''
            }
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.waitingSendDetailItem=JSON.parse(localStorage.getItem('waitingSendDetailItem'));
            this.beginTime=`${this.waitingSendDetailItem.ConfirmTime} ${this.waitingSendDetailItem.time2}`;
            // console.log(this.waitingSendDetailItem)
            this.requestOrderInfo();
        },
        requestOrderInfo(){
             this.UserAccount=localStorage.getItem('UserAccount');
              this.axios.post("/Order/OrderInfo", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "0",
                    INDEX: "20170713170325",
                    METHOD: "OrderInfo",
                    LoginUser:'2',
                    UserAccount:this.UserAccount,
                    DealNumber:this.waitingSendDetailItem.DealNumber,
                    })
                    .then(
                    response => {
                        let data=response.data.DATA[0];
                        let elseInfo=response.data.DATA[1];
                        
                        //  {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
                        for(let i=0;i<data.SupplyMoney.length;i++){
                            let FilePath=data.FilePath[i].split(',');
                            FilePath=FilePath[0]+FilePath[1]
                            this.tableList.push({
                                imgUrl:FilePath,
                                title:data.CommodityName[i],
                                subtitle:data.BrandName[i],
                                price:data.SupplyMoney[i],
                                amount:data.CommodityNumber[i],
                                subtotal:data.DealMoney[i],
                                net:data.DealMoney[i]
                            })
                        }
                        
                        this.elseInfo.AddresseeName=elseInfo.AddresseeName[0];
                        this.elseInfo.Telephone=elseInfo.Telephone[0];
                        this.elseInfo.DetailedAddress=elseInfo.DetailedAddress[0];
                        this.elseInfo.OddNumbers=elseInfo.OddNumbers[0];
                        this.elseInfo.CarrierId=elseInfo.CarrierId[0];
                        // orderList
                        this.orderList.MoneySum=elseInfo.MoneySum[0];
                        this.orderList.amount=data.SupplyMoney.length;
                        this.orderStatus=elseInfo.DealStatus[0]
                        // console.log(this.orderList.MoneySum)
                        
                        
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        },
        toAfterSale(){
            this.$router.push('applyForAfterSales')
        }
    }
}
</script>
<style scoped>
/* .title-content{
    width: 990px;
    height: 100px;
    margin-bottom: 24px;
} */
.title-content{
    width: 990px;
    height: 100px;
    padding:20px 30px;
    background: #fff;
    position: relative;
    margin-bottom:22px ;
    border:1px solid rgb(221,221,221)
}
.imgcontent{
    float: left;
    width: 60px;
    height: 100px;
}
img{
    width: 30px;
    height: 30px;
}
p{
    color: rgb(244,91,8);
    font-size: 14px;
}
.infoscontent{
    width: 410px;
    height: 100px;
    color: black;
    float: left;
    text-align: left;
    margin-left: 100px;
}
.title{
    color: #999;
    font-size: 12px;
}
button{
    width: 90px;
    height: 36px;
    background: transparent;
    border: 1px solid #ff2040;
    color: #ff2040;
    position: absolute;
    top: 32px;
    right: 30px;
}
.info{
    height: 30px;
    line-height: 30px;
}

 #content{
        width: 990px;
        min-height:600px;
        background: #fff;
        padding: 0 30px;
        border: 1px solid rgb(221,221,221);
    }
    .display-none{
        display: none;
    }
   
    .step{
        width: 930px;
        height: 108px;
        padding-top: 24px;
        margin-bottom: 26px;
    }
    .line{
        height:48px;
        line-height:48px;
        text-align:left;
        font-size: 14px;
        color: #333;
    }
    
    #table-header{
        width: 930px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background: url(../../../../assets/common/shadow.png);
        border: 1px solid rgb(221,221,221);
    }
    #table-header span{
        /* display:inline-block; */
        float: left;
    }
    .goodsinfo{
        width: 300px;
        line-height: 14px;
    }
    .price{width: 250px;}
    .amount{width: 140px;}
    .subtotal{width: 140px;}
    .realpay{width: 98px;}
    .table-line{
        width: 930px;
        height: 90px;
        line-height: 90px;
        border: 1px solid rgb(221,221,221);
        border-top: 0;
    }
    .table-line>div{
        float: left;
        text-align: center;
    }
    .goodsinfo img{
        width: 60px;
        height: 60px;
        margin: 16px 0 0 16px;
        float: left;
    }
    .goodsinfo-right{
        float: left;
        margin:20px 0 0 14px;
        font-size: 12px;
        color: #999;
        text-align: left;
    }
    .infotitle{
        font-size: 14px;
        color: black;
        line-height: 20px;
    }
    #receiveInfos{
        width: 930px;
        /* height: 132px; */
        /* background: yellowgreen; */
    }
   .bottom{
           background: #fff;
            padding: 20px 30px;
   }
   #consigneeInfo-content{
    text-align: left;
    margin-top:40px ;
}
#consigneeInfo-content>p{
    width: 930px;
    height: 32px;
    font-size: 14px;
    vertical-align: top;
}
#consigneeInfo{
    width: 930px;
    height: 100px;
    padding-left: 12px;
    border: 1px solid rgb(221,221,221)
}
#consigneeInfo p{
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #999;
}
#consigneeInfo  span{
    color :#333;
}
.red{
    color: rgb(255, 32, 64)
}
.gray{
    color: #999;
}
#consigneeInfoss-content{
    text-align: left;
    padding-top:40px ;
    width: 930px;
    height: 150px;
}
#consigneeInfoss-content>p{
    width: 930px;
    height: 32px;
    font-size: 14px;
    vertical-align: top;
}
#consigneeInfoss{
    width: 468px;
    height: 78px;
    padding-left: 12px;
    border: 1px solid rgb(221,221,221);
    background: #f2f2f2;
}
#consigneeInfoss p{
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #333;
}
.orderList{
        width: 930px;
        height: 270px;
        padding: 40px 30px 0;
    }
    .orderList li{
        list-style: none;
        font-size: 14px;
        text-align: right;
        height: 26px;
        line-height: 26px;
    }
    .orderList li span:first-child{
        float: left;
        width: 774px;
        text-align: right;
    }
    .orderList li span.red{
        color: rgb(255,32,64);
    } 
    .orderList li:last-child{
        margin-top: 30px;
    }
    .orderList li:last-child .red{
        font-size: 16px;
        font-weight: 600;
    }
</style>


