<template>
    <div class="waitreceive-detail">
        <!-- 待收货详情 -->
        <div class="content">
            <div class="title-content">
                <div class="imgcontent">
                    <img src="../../../../assets/common/waiting-received.png" alt=""> 
                    <p>等待收货</p>  
                </div>
                <div class="infoscontent">
                    <div class="info">
                        <span class="title">订单编号：</span>{{this.postInfos.DealNumber}}
                    </div>
                    <div class="info">
                        <span class="title">下单时间：</span>{{this.postInfos.ConfirmTime}}&nbsp; {{this.postInfos.time2}}
                    </div>
                </div>
                <!-- <button class="toAfterSale"  @click="toAfterSale" >申请售后</button> -->
            </div>
        </div>
        <div id="receive-body">
            <!-- 步骤条 -->
            <div class="steps">
                <el-steps :active="2" align-center>
                    <el-step title="提交订单" :description="beginTime"></el-step>
                    <el-step title="商品出库" :description="this.orderStatueTime.DeliveryTime"></el-step>
                    <el-step title="商品签收" description=""></el-step>
                    <el-step title="等待付款" description=""></el-step>
                    <el-step title="交易完成" description=""></el-step>
                </el-steps>
            </div>
          <!-- 退款进度 -->
            <!-- <div class="refund">
                <span class="refund-time">2014-02-03 12:09:03</span>&nbsp;&nbsp;您的服务单财务已退款，请您注意查收
                <button class="follow">进度跟踪</button>
            </div> -->
        <!-- 商品信息 -->
        <h3 class="table_title">商品信息</h3>
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
                    <span style="text-align:left;">{{item.subtitle}} </span>
                  </div>
              </div>
              <div class="price">￥ {{item.price}}</div>
              <div class="amount">{{item.amount}}</div>
              <div class="subtotal">￥ {{item.subtotal}}</div>
              <div class="realpay">￥ {{item.net}}</div>
          </div>
         </div>

        <!-- 收货信息 -->
        <div id="consigneeInfo-content">
            <p>收货信息</p>
            <div id="consigneeInfo">
                <p><span>收货人：</span>{{elseInfo.AddresseeName}}</p>
                <p><span>联系方式：</span>{{elseInfo.Telephone}}</p>
                <p><span>收货地址：</span>{{elseInfo.DetailedAddress}}</p>
            </div>
        </div>
        <!-- 支付方式及送货时间 -->
        <div id="payment-content">
        <p>支付方式及送货时间</p>
        <div id="paymentInfo">
            <p>支付方式：<span class="red">货到付款</span></p>
            <p>送货时间：<span class="gray">双休日、假日送货(适合于家庭地址)</span></p>
        </div>
    </div>
        <!-- 发票信息 -->
     <!-- <div id="invoice-content">
        <p>发票信息</p>
        <div id="invoiceInfo">
            <p><span>发票类型：</span>大中国</p>
            <p><span>发票内容：</span>18689207260</p>
            <p><span>发票抬头：</span>我们都有一个家名字叫中国，兄弟姐妹都很多</p>
            <div class="btngroups">
                <button class="edit-button" @click="dialogVisible=true">修改信息</button>
                <button class="edit-button" >下载发票</button>-->
                <!-- <button class="edit-button" @click="dialogVisible=true">修改信息</button> -->
            <!--</div>
        </div>-->
        <!-- 发票 -->
        <!--<el-dialog
        title="发票信息"
        :visible.sync="dialogVisible"
        width="760px"
        :center="true">
        <invoice></invoice>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
    </div> -->
        <!-- 订单信息 -->
    <!-- <div class="order_info">
        <h3>订单信息</h3>
        <div class='line_content'>
            <div class="line">
                <span>订单编号：</span>6732848394
            </div>
            <div class="line">
                <span>下单时间：</span>6732848394
            </div>
        </div>
    </div> -->
    <!-- orderlist -->
     <div class="orderList">
            <ul class="clearfix">
                <li><span>商品总数</span><span>{{orderList.amount}}</span></li>
                <!-- <li><span>商品总价</span><span class="red">￥1245</span></li>
                <li><span>活动优惠</span><span class="red">0</span></li>
                <li><span>优惠券抵扣</span><span class="red">0</span></li>
                <li><span>运费</span><span class="red">0</span></li> -->
                <li><span>应付总额</span><span class="red">￥{{orderList.MoneySum}}</span></li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
import imgUrl from '../../../../assets/common/logo.png'
import invoice from '../../../../components/myOrder/invoice'
export default {
    name:'waitingReceivedDetail',
    components:{
        invoice
    },
    data(){
        return{
            dialogVisible:false,
            UserAccount:'',
            postInfos:'',
            beginTime:'',
            orderStatueTime:{
                beginTime:'',
                DeliveryTime:'',
                ReceiptTime:'',
                ConfirmTime:'',
                TradeTime:''
            },
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
            },
            tableList:[
                // {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
            ]
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.postInfos=JSON.parse(localStorage.getItem('waitingReceived'));
            this.beginTime=`${this.postInfos.ConfirmTime} ${this.postInfos.time2}`;
            this.requestInfos();
        },
        requestInfos(){
            this.UserAccount=localStorage.getItem('UserAccount');
              this.axios.post("/Order/OrderInfo", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "0",
                    INDEX: "20170713170325",
                    METHOD: "OrderInfo",
                    LoginUser:'2',
                    UserAccount:this.UserAccount,
                    DealNumber:this.postInfos.DealNumber,
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
                        this.orderStatueTime.DeliveryTime=`${elseInfo.DeliveryTime[0].split('+')[0]} ${elseInfo.DeliveryTime[0].split('+')[1]}`
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
<style lang="less" scoped>
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
.toAfterSale{
    width: 90px;
    height: 36px;
    background: transparent;
    border: 1px solid #ff2040;
    color: #ff2040;
    outline: none;
    position: absolute;
    top: 32px;
    right: 30px;
}
.info{
    height: 30px;
    line-height: 30px;
}
#receive-body{
    padding: 30px;
    background: #fff;
    border: 1px solid rgb(221,221,221);
    .refund{
            height: 50px;
            line-height: 50px;
            margin-top: 40px;
            position: relative;
            border: 1px solid rgb(221,221,221);
            text-align: left;
            padding-left: 38px;
            .refund-time{
                color: #999;
            }
            .follow{
                width: 76px;
                height: 26px;
                line-height: 26px;
                border: 1px solid rgb(244,91,8);
                color: rgb(244,91,8);
                outline: none;
                position: absolute;
                top: 12px;
                right: 20px;
                background: #fff;
            }
        }
}
.table_title{
        height: 40px;
        vertical-align: top;
        text-align: left;
        margin-top: 30px;
    }
 #table-header{
        width: 926px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background: #f2f2f2;
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
    .realpay{width: 94px;}
    .table-line{
        width: 926px;
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
    // 收货信息
    #consigneeInfo-content{
    text-align: left;
    margin-top:40px ;
}
#consigneeInfo-content>p{
    width: 930px;
    height: 32px;
    font-size: 14px;
    vertical-align: top;
    color: #333;
    font-weight: 600;
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
// 支付方式及送货时间
.red{
    color: rgb(255, 32, 64)
}
.gray{
    color: #999;
}
#payment-content{
    text-align: left;
    padding-top:40px ;
    width: 930px;
    height: 150px;
}
#payment-content>p{
    width: 930px;
    height: 32px;
    font-size: 14px;
    vertical-align: top;
    color: #333;
    font-weight: 600;
}
#paymentInfo{
    width: 468px;
    height: 78px;
    padding-left: 12px;
    border: 1px solid rgb(221,221,221);
    background: #f2f2f2;
}
#paymentInfo p{
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #333;
}
// 发票信息
#invoice-content{
    text-align: left;
    margin-top:40px ;
}
#invoice-content>p{
    width: 930px;
    height: 32px;
    font-size: 14px;
    vertical-align: top;
    color: #333;
    font-weight: 600;
}
#invoiceInfo{
    width: 930px;
    height: 100px;
    padding-left: 12px;
    position: relative;
    border: 1px solid rgb(221,221,221)
}
#invoiceInfo p{
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #999;
}
#invoiceInfo  span{
    color :#333;
}
#invoiceInfo .btngroups{
    // float: right;
        position: absolute;
        top: 38px;
        right: 22px;
    button{
        width: 76px;
        height: 25px;
        border: 1px solid rgb(244,91,8);
        font-size: 14px;
        color: rgb(244,91,8);
        background: transparent;
        outline: none;
        
    }
}
.order_info{
    h3{
        margin-top: 30px;
        height: 30px;
        vertical-align: top;
        text-align: left;
    }
    .line_content{
        border: 1px solid rgb(221,221,221);
        padding: 18px 0 18px 14px;
        .line{
            font-size: 14px;
            text-align: left;
            line-height: 26px;
            span{
                color: #999;
            }
        }
    }
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
