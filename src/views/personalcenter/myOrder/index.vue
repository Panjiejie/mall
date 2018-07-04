<template>
    <div class="content">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部订单" name="first">
                <indexListItem></indexListItem>
               <div class="page">
                    <template>
                         <Page :total="100" show-elevator></Page>
                    </template>
                </div>
            </el-tab-pane>
            <el-tab-pane label="待发货" name="second">
                <waitingSend></waitingSend>
                <div class="page">
                    <template>
                         <Page :total="100" show-elevator></Page>
                    </template>
                </div>
            </el-tab-pane>
            <el-tab-pane label="待收货" name="third">
                <waitingReceived></waitingReceived>
                <div class="page">
                    <template>
                         <Page :total="100" show-elevator></Page>
                    </template>
                </div>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="fourth">
                <completedOrder></completedOrder>
                <div class="page">
                    <template>
                         <Page :total="100" show-elevator></Page>
                    </template>
                </div>
            </el-tab-pane>
            <el-tab-pane label="售后" name="fifth">
                <afterSale></afterSale>
                <div class="page">
                    <template>
                         <Page :total="100" show-elevator></Page>
                    </template>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import waitingSend from "../myOrder/waitingSend/index";
import waitingReceived from "../myOrder/waitingReceived/index";
import completedOrder from "../myOrder/completedOrder/index";
import afterSale from "../myOrder/afterSale/index";
import indexListItem from '../../../components/myOrder/indexListItem.vue'
export default {
  name: "myOrder",
  components: {
    waitingSend,
    waitingReceived,
    completedOrder,
    afterSale,
    indexListItem
  },
  data() {
    return {
      activeName: "first",
      UserAccount:'',
      orderList:[]
    };
  },
  created(){
    this.init();
  },
  methods: {
    init(){
      this.requestAllOrder();
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    requestAllOrder(){
      this.UserAccount=localStorage.getItem('UserAccount');
              this.axios.post("/Order/MallOrderInfoTable", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "0",
                    INDEX: "20170713170325",
                    METHOD: "MallOrderInfoTable",
                    LoginUser:'2',
                    Status:'7',
                    UserAccount:this.UserAccount,
                    })
                    .then(
                    response => {
                        // if(response.data.RETURNCODE=='200'){
                        //   let data=response.data.DATA[0];
                        //   this.orderList.length=0;
                        //   for(let i=0,len=data.DealNumber.length;i<len;i++){
                        //      this.orderList.push({
                        //       DealNumber:data.DealNumber[i],
                        //       CommodityCode:data.CommodityCode[i],
                        //       DealMoney:data.DealMoney[i],
                        //       UserAccount:data.UserAccount[i],
                        //       AddresseeName:data.AddresseeName[i],
                        //       Telephone:data.Telephone[i],
                        //       DetailedAddress:data.DetailedAddress[i],
                        //       ConfirmTime:ConfirmTime[i]
                        //     })
                        //   }
                        //   console.log(data)
                        // }

                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
    }
  }
};
</script>
<style scoped>
.content {
  background: #fff;
}
.content .el-tabs .el-tabs__header {
  margin-bottom: 0 !important;
}
ul {
  width: 990px;
  font-size: 14px;
  padding: 0 20px 20px;
}
li {
  width: 950px;
  height: 190px;
  list-style: none;
  border: 1px solid rgb(221, 221, 221);
}
.header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: rgb(242, 241, 241);
  text-align: left;
  padding: 0 20px;
}
.endtime {
  float: right;
  color: rgb(255, 64, 32);
}
.body-content {
  padding-left: 20px;
  text-align: left;
}
.body-content img {
  float: left;
  width: 110px;
  height: 110px;
  border: 1px solid rgb(221, 221, 221);
  margin: 24px 18px 0 0;
}
.textinfo {
  float: left;
  width: 440px;
  height: 150px;
  padding-top: 18px;
  line-height: 28px;
}
.textinfo h4 {
  font-weight: 400;
}
.textinfo h5 {
  color: #999;
  font-size: 12px;
}
.operation {
  width: 360px;
  height: 150px;
  background: rgba(222, 222, 22, 0.1);
  float: right;
}
.operation > div {
  width: 120px;
  height: 150px;
  border-left: 1px solid rgb(221, 221, 221);
  float: left;
}
.wait-goods {
  /* line-height: 150px; */
  text-align: center;
  color: rgb(255, 64, 32);
}
.money,
.payway {
  width: 120px;
  height: 75px;
  text-align: center;
}
.money {
  vertical-align: bottom;
}
.blue {
  color: rgb(34, 108, 145);
}
</style>


