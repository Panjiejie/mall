<template>
    <div class="order-success">
        <div class="success-content">
            <img :src="src" alt="">
            <h5>订单提交成功</h5>
            <h6>我们将尽快为您发货，请提前下载正品汇APP收货</h6>
            <div class='s_line'><span class="s_title">支付方式：</span><span>货到付款</span></div>
            <div class='s_line'><span class="s_title">支付金额：</span><span class="red">￥{{price}}</span></div>
            <div class="btngroup">
                <button class='enterIndex' @click="toIndex">进入首页</button>
                <button class='checkOrder' @click="toOrder">查看订单</button>
            </div>
        </div>
    </div>
</template>
<script>
import imgUrl from '../../../assets/cartOrder/order_success.png'
export default {
    name:'submitOrderSuccess',
    data(){
        return{
            src:imgUrl,
            price:180.00,
        }
    },
    created(){
        this.price=localStorage.getItem('cartTotalPrice')
    },
    methods:{
        toIndex(){
            this.$router.push('/')
        },
        toOrder(){
            this.$router.push('/nav/personalCenter/myOrder')
        }
    },
}
</script>
<style scoped>
.order-success{
    padding: 50px 0;
    background: #f2f2f2;
}
.success-content{
    width: 1200px;
    height: 714px;
    background: #fff;
    margin: 0 auto;
    padding-top: 200px;
}
img{
    width: 60px;
    height: 60px;
}
h5{
    margin-top: 60px;
    font-size: 18px;
}
h6{
    margin: 10px 40px;
    color: #999;
    font-size: 14px;
}
.s_line{
    font-size:14px; 
    width: 314px;
    margin: 0 auto;
}
.s_line span{
    display: inline-block;
    width: 50%;
}
.s_title{
    text-align: right;
}
.s_line span:not(.s_title){
    text-align: left;
}
.red{
    color: #ff2040;
}
.btngroup{
    margin-top: 40px;
}
button{
    width: 160px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    outline: none;
}
.enterIndex{
    color: #fff;
    background: rgb(244,91,8);
    border: 1px solid rgb(244,91,8);
    margin-right: 6px;
}
.checkOrder{
    color: rgb(153,153,153);
    background: rgb(234,234,234);
    border: 1px solid rgb(153,153,153);
    margin-left: 6px;
}
</style>

