<template>
    <div class="dai" >
        <!-- <indexListItem :isshowLogistics="isshowLogistics" :orderStatus="orderStatus"></indexListItem> -->
        <!-- <indexListItem :isshowLogistics="isshowLogistics" :orderStatus="orderStatus"></indexListItem> -->
        <div class="list-item">
         <div class="header">
            <span>下单时间：2018-01-08 15:02:00</span>
                &nbsp;&nbsp;
            <span>订单编号：62205723918</span>
         </div>
           <div class="body-content">
               <div class="img-content">
                    <img :src="imgUrl" alt="">
                </div>
                <div class="textinfo">
                    <h4>韩国制造。。。</h4>
                    <h5>颜色分类：洒下是潇洒奥斯的就是</h5>
                </div>
                <div class="operation">
                    <div class="wait-goods">
                        <span class="red">{{orderStatus}}</span><br>
                        <span @click="toLogistics" class="blue" :class="{show:isshowLogistics}">查看物流</span>
                    </div>
                    <div class="goods-price">
                        <div class="money">$39.00</div>
                        <div class="payway">货到付款</div>
                    </div>
                    <div class="goods-price">
                        <div class="money blue" @click="toDetail">查看详情</div>
                        <div class="payway blue" @click="toafterSale">申请售后</div>
                    </div>
                </div>         
            </div>             
        </div>
    </div>
</template>
<script>
// import indexListItem from '../../../../components/myOrder/indexListItem'
import imgUrl from '../../../../assets/common/logo.png'
export default {
    name:'waitingReceived',
    components:{
        // indexListItem
    },
    data(){
        return{
            isshowLogistics:false,
            orderStatus:'待收货',
            imgUrl:imgUrl
        }
    },
    created(){
        // this.init();
    },
    methods:{
        toDetail(){
            this.$router.push('waitingReceiveDetail')
        },
      toafterSale(){
          this.$router.push('applyForAfterSales')
      },
      toLogistics(){
          alert('这是物流信息')
      },
       init(){
            this.UserAccount=localStorage.getItem('UserAccount');
              this.axios.post("/Order/MallOrderInfoTable", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "0",
                    INDEX: "20170713170325",
                    METHOD: "MallOrderInfoTable",
                    LoginUser:'2',
                    Status:'3',
                    UserAccount:this.UserAccount,
                    })
                    .then(
                    response => {
                        console.log(response)
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
.show{display: none;}
</style>
