<template>
    <div id="consigneeInfo-content">
        <p>发票信息</p>
        <div id="consigneeInfo">
            <p><span>发票类型：</span>大中国</p>
            <p><span>发票内容：</span>18689207260</p>
            <p><span>发票抬头：</span>我们都有一个家名字叫中国，兄弟姐妹都很多</p>
            <button>修改信息</button>
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
    position: relative;
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
#consigneeInfo button{
    width: 76px;
    height: 25px;
    border: 1px solid rgb(244,91,8);
    font-size: 14px;
    color: rgb(244,91,8);
    background: transparent;
    outline: none;
    position: absolute;
    top: 38px;
    right: 22px;
}
</style>
