<template>
    <div class="dai" >
       <div class="list-item" v-for='i in orderList' :key='i.key'>
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
                        <span class="red">已完成</span><br>
                        <span @click="toLogistics" class="blue" :class="{show:isshowLogistics}">查看物流</span>
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
// import indexListItem from '../../../../components/myOrder/indexListItem'
import imgUrl from '../../../../assets/common/logo.png'
export default {
    name:'completedOrder',
    components:{
        // indexListItem
    },
    data(){
        return{
            isshowLogistics:false,
            orderStatus:'已完成',
            imgUrl:imgUrl,
            UserAccount:'',
            postInfos:'',
            beginTime:'',
            orderList:[]
        }
    },
    created(){
        this.init();
    },
    methods:{
        toDetail(item){
            localStorage.setItem('completedOrder',JSON.stringify(item));
            
            this.$router.push('completeOrderDetail')
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
                    Status:'5',
                    Num:'10',
                    Sum:'1',
                    UserAccount:this.UserAccount,
                    })
                    .then(
                    response => {
                        // console.log(response)
                         if(response.data.RETURNCODE=='200'){
                          let data=response.data.DATA;
                          this.orderList.length=0;
                          // console.log(data)
                          let DealNumber_ConfirmTime=response.data.DealNumber_ConfirmTime;
                          for(let i=0,len=data.length;i<len;i++){
                                let params=data[i][0];
                                // console.log(data[i][0])
                                let arr=[];
                                for(let j=0;j<data[i][0].BrandName.length;j++){//商品数据格式化
                                  arr.push({
                                    BrandName:params.BrandName[j],
                                    DealMoney:params.DealMoney[j],
                                    CommodityName:params.CommodityName[j],
                                    FilePath:params.FilePath[j].split(',')[0]+params.FilePath[j].split(',')[1],
                                    Postalcode:params.Postalcode[j],
                                    CommodityCode:params.CommodityCode[j],
                                    SupplyMoney:params.SupplyMoney[j],
                                    UserAccount:params.UserAccount[j],
                                    PayInstitution:params.PayInstitution[j],
                                    AddresseeName:params.AddresseeName[j],
                                    Telephone:params.Telephone[j],
                                    DetailedAddress:params.DetailedAddress[j],
                                    CommodityNumber:params.CommodityNumber[j],
                                    DealStatus:params.DealStatus[j],
                                  })
                                }

                                 this.orderList.push({
                                  DealNumber:DealNumber_ConfirmTime[i][0],
                                  ConfirmTime:DealNumber_ConfirmTime[i][1].split('+')[0],
                                  time2:DealNumber_ConfirmTime[i][1].split('+')[1],
                                  obj:arr
                                })
                             }
                             let orderList=JSON.stringify(this.orderList)
                             localStorage.setItem('orderList',orderList)
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
