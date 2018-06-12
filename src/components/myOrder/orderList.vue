<template>
    
        <div class="orderList">
            <ul class="clearfix">
                <li><span>商品总数</span><span>4</span></li>
                <li><span>商品总价</span><span class="red">￥1245</span></li>
                <li><span>活动优惠</span><span class="red">0</span></li>
                <li><span>优惠券抵扣</span><span class="red">0</span></li>
                <li><span>运费</span><span class="red">0</span></li>
                <li><span>应付总额</span><span class="red">￥1245</span></li>
            </ul>
        </div>
</template>
<script>
export default {
    name:'orderList',
    // props:['orderList'],
    components:{}
}
</script>
<style scoped>
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


