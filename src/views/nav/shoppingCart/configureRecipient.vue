<template>
    <div id="receive">
        <!-- 购物车收货信息页面 -->
        <div class="receive-body">
            <!-- 收货信息地址 -->
            <div class="receive-infos">
                <div class="infos-title">收货信息</div>
                <div class="infos-content">
                    <p>
                        <img src="../../../assets/common/kefu.png" alt="">
                        <span>默认地址</span> 
                    </p>
                    <ul>
                        <li>
                            <span class="infos-title">收货人：</span>
                            <span class="infos-text">kaihua</span>
                        </li>
                        <li>
                            <span class="infos-title">收货人：</span>
                            <span class="infos-text">kaihua</span>
                        </li>
                        <li>
                            <span class="infos-title">收货人：</span>
                            <span class="infos-text">kaihua</span>
                        </li>
                    </ul>
                    <!-- 按钮组 -->
                    <div class="btn-group">
                        <button style="margin-right:10px;">切换地址</button>
                        <button style="margin-left:10px;">新建地址</button>
                    </div>
                </div>
                <div class="infos-bottom">
                    <span>默认地址</span>
                </div>
            </div>
            <!-- 配送时间 -->
            <div class="delivery-time">
                <p>配送时间</p>
                <div class="choose-time">
                    <span v-for="item in chooseDeliveryTime" :key="item.key" :class="{isOrange:item.isOrange}">{{item.text}}</span>
                </div>
            </div>
            <!-- 支付方式 -->
            <div class="payment">
                <p>支付方式</p>
                <div class="choose-payment">
                    <span>货到付款</span>
                </div>
            </div>
            <!-- 发票信息 -->
            <div class="invoice-infomation"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'configureRecipient',
    components:{},
    data(){
        return{
            chooseDeliveryTime:[//选择配送时间
                {text:'不限送货时间：周一至周日',isOrange:true},
                {text:'不限送货时间：周一至周日',isOrange:false},
                {text:'不限送货时间：周一至周日',isOrange:false}
            ],
        }
    },
    methods:{},
}
</script>
<style scoped>
#receive{
    /* width: 200px; */
    min-height:500px ;
    background: #f2f2f2;
    padding: 50px 0 60px;
}
.receive-body{
    width: 1200px;
    min-height:300px;
    background: #fff;
    padding: 40px 40px 0;
    margin: 0 auto;
    border: 1px solid rgb(221,221,221)
}
.receive-infos{
    width: 1120px;
    height: 221px;
    /* background: yellowgreen; */
}
.infos-title{
    width: 100%;
    height: 33px;
    vertical-align: top;
    text-align: left;
    font-size: 14px;
}
.infos-content{
    width: 100%;
    height: 147px;
    padding: 0 30px;
    position: relative;
    border: 1px solid rgb(221,221,221);
}
.infos-content p{
    height: 50px;
    /* line-height: 50px; */
    color: rgb(244,91,8);
    text-align: left;
}
.infos-content p span{
    position: relative;
    bottom: 6px;
    
}
.infos-content img{
    width: 20px;
    height: 25px;
    margin-top: 14px;
}
.infos-content ul{
    height: 76px;
}
.infos-content li{
    list-style: none;
    text-align: left;
    height: 26px;
    line-height: 26px;
}
li .infos-title{
    color: black;
    font-size: 14px;
}
li .infos-text{
    color: #999;
    font-size: 14px;
}
.btn-group{
    position: absolute;
    width: 245px;
    height: 127px;
    line-height: 127px;
    top: 0;
    right: 0;
}
.btn-group button{
    width: 80px;
    height: 30px;
    line-height: 30px;
    border: 1px solid rgb(244,91,8);
    color: rgb(244,91,8);
    background: #fff;
    outline: none;
}
div.infos-bottom{
    height: 41px;
    line-height: 41px;
    text-align: right;
    color: rgb(244,91,8);
    padding-right: 58px;
}
/* 配送时间 */
.delivery-time{
    height: 126px;
    background: yellow;
    text-align: left;
}
.isOrange{
    color: rgb(244,91,8) !important;
    border-color: rgb(244,91,8) !important;
}
.delivery-time>p{
    height: 34px;
    text-align: left;
    vertical-align: top;
    font-size: 14px;
}
.delivery-time span{
    display: inline-block;
    width: 260px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    font-size: 14px;
    border: 1px solid rgb(221,221,221);
    margin-right:20px;
}
/* 支付方式 */
.payment{
    height: 125px;
    font-size: 14px;
    text-align: left;
}
.payment p{
    height: 34px;
    text-align: left;
    vertical-align: top;
    font-size: 14px;
}
.choose-payment span{
    display: inline-block;
    width: 160px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    font-size: 14px;
    border: 1px solid rgb(244,91,8);
    color: rgb(244,91,8);
}
/* 发票信息 */
</style>


