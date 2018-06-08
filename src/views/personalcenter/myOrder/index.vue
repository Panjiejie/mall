<template>
    <div class="content">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部订单" name="first">
                <ul>
                    <li>
                        <div class="header">
                            <span>下单时间：2018-01-08 15:02:00</span>
                            &nbsp;&nbsp;
                            <span>订单编号：62205723918</span>
                        </div>
                        <div class="body-content">
                            <img src="../../../assets/common/logo.png" alt="">
                            <div class="textinfo">
                                <h4>韩国制造。。。</h4>
                                <h5>颜色分类：洒下是潇洒奥斯的就是</h5>
                            </div>
                            <div class="operation">
                                <div class="wait-goods">
                                    <span>待发货</span>
                                </div>
                                <div class="goods-price">
                                    <div class="money">$39.00</div>
                                    <div class="payway">货到付款</div>
                                </div>
                                <div class="goods-price">
                                    <div class="money blue">查看详情</div>
                                    <div class="payway blue">申请售后</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="待发货" name="second">
                <waitingSend></waitingSend>
            </el-tab-pane>
            <el-tab-pane label="待收货" name="third">
                <waitingReceived></waitingReceived>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="fourth">
                <completedOrder></completedOrder>
            </el-tab-pane>
            <el-tab-pane label="售后" name="fifth">售后</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import waitingSend from "../myOrder/waitingSend/index";
import waitingReceived from "../myOrder/waitingReceived/index";
import completedOrder from "../myOrder/completedOrder/index";
export default {
  name: "myOrder",
  components: {
    waitingSend,
    waitingReceived,
    completedOrder
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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


