<template>
    <div id="content">
        <div class="step">
            <el-steps :active="1" finish-status="success" align-center>
                <el-step title="提交订单" description="22222222444534"></el-step>
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
                    <span>颜色：{{item.color}} 尺寸：{{item.size}}</span>
                  </div>
              </div>
              <div class="price">￥ {{item.price}}</div>
              <div class="amount">{{item.amount}}</div>
              <div class="subtotal">￥ {{item.subtotal}}</div>
              <div class="realpay">￥ {{item.net}}</div>
          </div>
        </div>
        <div id="receiveInfos">
            <consigneeInfo></consigneeInfo>
            <invoiceinfos></invoiceinfos>
            <payment></payment>
            <orderList></orderList>
        </div>
    </div>
</template>
<script>
import imgUrl from '../../assets/common/logo.png'
import consigneeInfo from './consigneeInfo'
import invoiceinfos from './invoiceInfos'
import payment from './payment'
import orderList from './orderList'
export default {
    name:'innerBottom',
    components:{
        consigneeInfo,
        invoiceinfos,
        payment,
        orderList
    },
    data(){
        return{
            src:imgUrl,
            tableList:[
                {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
                {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
                {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
            ]
        }
    }
}
</script>
<style scoped>
    .display-none{
        display: none;
    }
    #content{
        width: 990px;
        min-height:600px;
        background: #fff;
        padding: 0 30px;
        border: 1px solid rgb(221,221,221);
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
   
</style>
