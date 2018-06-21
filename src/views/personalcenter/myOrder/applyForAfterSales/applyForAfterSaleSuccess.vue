<template>
<div class="content">
    <h3>申请退货</h3>
    <div id='register-last'>
        <img src="../../../../assets/index/circle_success.png" alt="">
        <p>售后申请提交成功</p>
        <div>售后人员将与你联系，请保持手机畅通</div>
        <button @click="toMyOrder">返回</button>
    </div>
    <!-- 温馨提醒 -->
        <div class="warm-tips">
            <h3>温馨提醒</h3>
            <ul>
                <li>商品寄回地址将在审核通过后以短信形式告知，或在申请记录中查询。</li>
                <li>提交服务单后，售后专员可能与您电话沟通，请保持手机畅通。</li>
                <li>退货处理成功后退款金额将原路返回到您的支持账户中。</li>
            </ul>
        </div>
</div>
    
</template>
<script>
// import {bus} from '../../../bus.js'
export default {
    name:'applyForAfterSaleSuccess',
    data(){
        return{
            time:3
        }
    },
    methods:{
        toMyOrder(){
            this.$router.push('myOrder')
        }
    },
    mounted(){
            // bus.$emit('changeSteps', 4);
            // this.a();
    }
}
</script>
<style lang="less" scoped>
.content{
    background: #fff;
    padding: 40px;
    h3{
        height: 30px;
        vertical-align: top;
        text-align: left;
        border-bottom: 1px solid rgb(221,221,221);
    }
    #register-last{
    // width: 600px;
    height: 480px;
    margin: 0 auto ;
    text-align: center;
    background: #fff;
    padding-top:80px ;
    p{
        font-size: 20px;
        font-weight: normal;
        height: 40px;
        line-height: 40px;
        margin: 60px 0 0;
    }
    div{
        font-size: 14px;
        color: #999;
        height: 20px;
        line-height: 20px;
    }
    button{
            width: 160px;
            height: 44px;
            line-height: 44px;
            border: 1px solid rgb(241,91,8);
            background: rgb(241,91,8);
            color: #fff;
            font-size: 14px;
            outline: none;
            margin-top: 40px;
        }
    }
      .warm-tips{
        height: 140px;
        border: 1px solid rgb(221,221,221);
        padding-left: 30px;
        background: url(../../../../assets/common/shadow.png);
        h3{
            height: 50px;
            line-height: 50px;
            border: none;
        }
        li{
            text-align: left;
            font-size: 14px;
            color: #999;
            line-height: 20px;
        }
    }
}

</style>
