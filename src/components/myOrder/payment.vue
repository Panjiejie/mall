<template>
    <div id="consigneeInfoss-content">
        <p>支付方式及送货时间</p>
        <div id="consigneeInfoss">
            <p>支付方式：<span class="red">货到付款</span></p>
            <p>送货时间：<span class="gray">双休日、假日送货(适合于家庭地址)</span></p>
        </div>
    </div>
</template>
<script>
export default {
    name:'consigneeInfo'
}
</script>
<style scoped>
.red{
    color: rgb(255, 32, 64)
}
.gray{
    color: #999;
}
#consigneeInfoss-content{
    text-align: left;
    padding-top:40px ;
    width: 930px;
    height: 150px;
}
#consigneeInfoss-content>p{
    width: 930px;
    height: 32px;
    font-size: 14px;
    vertical-align: top;
}
#consigneeInfoss{
    width: 468px;
    height: 78px;
    padding-left: 12px;
    border: 1px solid rgb(221,221,221);
    background: #f2f2f2;
}
#consigneeInfoss p{
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #333;
}
</style>
