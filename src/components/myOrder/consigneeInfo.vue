<template>
    <div id="consigneeInfo-content">
        <p>收货信息</p>
        <div id="consigneeInfo">
            <p><span>收&nbsp;货&nbsp;人：</span>大中国</p>
            <p><span>联系方式：</span>18689207260</p>
            <p><span>收货地址：</span>我们都有一个家名字叫中国，兄弟姐妹都很多</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'consigneeInfo'
}
</script>
<style scoped>
#consigneeInfo-content{
    text-align: left;
    margin-top:40px ;
}
#consigneeInfo-content>p{
    width: 930px;
    height: 32px;
    font-size: 14px;
    vertical-align: top;
}
#consigneeInfo{
    width: 930px;
    height: 100px;
    padding-left: 12px;
    border: 1px solid rgb(221,221,221)
}
#consigneeInfo p{
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #999;
}
#consigneeInfo  span{
    color :#333;
}
</style>
