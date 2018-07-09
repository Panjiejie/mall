<template>
    <div class="list-item clearfix"  >
        <div v-for='i in paramsList' :key="i.key" >
            <div class="header">
                <span>下单时间：{{i.ConfirmTime}}&nbsp;&nbsp;{{i.time2}}</span>
                    &nbsp;&nbsp;
                <span>订单编号：{{i.DealNumber}}</span>
            </div>
           <div class="body-content" v-for='item in i.obj' :key='item.key'>
                        <div class="img-content">
                            <img :src="item.FilePath" alt="">
                        </div>
                            <div class="textinfo">
                                <h4>{{item.CommodityName}}</h4>
                                <h5>{{item.BrandName}}</h5>
                            </div>
                            <div class="operation">
                                <div class="wait-goods">
                                    <span class="red">{{item.DealStatus | statusFilter}}</span><br>
                                    <span @click="toLogistics(item)" class="blue" :class="{show:isshowLogistics}">查看物流</span>
                                </div>
                                <div class="goods-price">
                                    <div class="money">${{item.DealMoney}}</div>
                                    <div class="payway">货到付款</div>
                                </div>
                                <div class="goods-price">
                                    <div class="money blue" @click="toDetail(i)">查看详情</div>
                                    <!-- <div class="payway blue" @click="toafterSale">申请售后</div> -->
                                </div>
                            </div>
              </div>
        </div>
                     
    </div>
</template>
<script>
import imgUrl from '../../assets/common/logo.png'
export default {
  name: "indexListItem",
  props: ['paramsList'],
  data() {
    return {
        imgUrl:imgUrl,
        isshowLogistics:false
    };
  },
  methods: {
      toDetail(item){
        //   console.log(item)
            if( item.obj[0].DealStatus=='1' ||  item.obj[0].DealStatus=='2'){
                localStorage.setItem('waitingSendDetailItem',JSON.stringify(item))
                this.$router.push({path:`waitingSendDetail`})
            }else if(item.obj[0].DealStatus=='3' ){
                localStorage.setItem('waitingReceived',JSON.stringify(item))
                this.$router.push({path:`waitingReceiveDetail`})
            }else if(item.obj[0].DealStatus=='5' || item.obj[0].DealStatus=='4'){
                localStorage.setItem('completedOrder',JSON.stringify(item));
                this.$router.push('completeOrderDetail')
            }
            
        },
      toafterSale(){
          this.$router.push('applyForAfterSales')
      },
      toLogistics(){
          alert('这是物流信息')
      }
  },
  filters:{
      statusFilter:function(val){
        //  if(val=='0'){ return val='购物车'}
         if(val=='1'){ return val='未支付'}
         if(val=='2'){ return val='未发货'}
         if(val=='3'){ return val='已发货'}
         if(val=='4'){ return val='已收货'}
         if(val=='5'){ return val='已确认'}
      }
  }
};
</script>
<style scoped>
.list-item {
  width: 990px;
  height: 190px;
  padding: 0 20px 24px;
  margin-bottom: 20px;
}
.header{
    width: 950px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
    background: rgb(241,241,241);
    padding-left: 20px;
    text-align: left;
    border: 1px solid rgb(241,241,241);
    border-bottom: 0;
}
.body-content{
    width: 950px;
    height: 150px;
    border: 1px solid rgb(241,241,241);
    border-top: none;
    padding-left: 20px;
    font-size: 14px;
}
.img-content{
    float: left;
    width: 110px;
    height: 110px;
    border: 1px solid rgb(241,241,241);
    margin: 18px 18px 0 0;
}
.img-content img{
    width: 50px;
    height: 68px;
    margin: 21px 0 0 0;
}
.textinfo{
    float: left;
    width: 445px;
    margin-top: 18px;
    text-align: left;
}
.textinfo h4{
    font-size: 14px;
    color: #333;
    line-height: 20px;
    margin-bottom: 10px;
}
.textinfo h5{
    color: #999;
    font-size: 12px;
    line-height: 20px;
}
.red{
    color: #ff2040;
}
.wait-goods{
    padding-top: 54px;
}
.blue{
    color: rgb(83,133,162);
    cursor: pointer;
}
.operation{
    float: left;
    width: 355px;
}
.operation>div{
    float: left;
    width: 118px;
    height: 150px;
    border-left: 1px solid rgb(241,241,241);
}
.goods-price .money{
    margin-top: 54px;
}
.show{opacity: 0;}
.noDisplay{
    display: none;
}
</style>
