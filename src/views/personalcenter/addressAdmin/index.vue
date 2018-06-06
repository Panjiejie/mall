<template>
    <div class="content">
        <div class="title">
            安全管理 <span>(地址最多<span class="red">10</span>条，还能保存<span class="red">7</span>条)</span>
            <a href=""> +新增地址</a>
        </div>
        <div class="contentbox">
                <div class="section" v-for="item in 2" :key="item.key">
                    <ul>
                        <li class="half">
                            <span class="stitle">收货人:</span>
                            <span class="innertext">我爱我家</span>
                        </li>
                        <li class="half">
                            <span class="stitle">联系方式:</span>
                            <span class="innertext">{{num | numfilter}}</span>
                        </li>
                        <li>
                            <span class="stitle">所在地区:</span>
                            <span class="innertext">广东省深圳市南山区</span>
                        </li>
                        <li class="last">
                            <span class="stitle">详细地址:</span>
                            <span class="innertext">深南大道6029号车公庙深南大道6029号车公庙深南大道6029号车公庙深南大道6029号车公庙深南大道6029号车公庙深南大道6029号车公庙</span>
                        </li>
                    </ul>
                    <div class="btncontent">
                        <input type="button" value="默认地址">
                        <div class="btngroup">
                            <a href="">编辑</a>
                            <a href="">删除</a>
                        </div>
                    </div>
                </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name:'personalSetting',
    data(){
        return{
            useraccount:"12345632",
            num:"18689207260"
        }
    },
    filters:{
        numfilter(val){
            var reg = /^(\d{3})\d*(\d{4})$/;
            val=val.replace(reg, "$1****$2");
            return val;
            
        }
    }
}
</script>
<style scoped>
.red{
    color: rgb(255,64,32)
}
.content{
    width: 990px;
    min-height: 660px;
    font-size: 14px;
}
.title{
        width: 990px;
        height: 44px;
        /* background: blueviolet; */
        /* background: rgb(240,240,240); */
        line-height:44px;
        text-align: left;
        padding-left: 24px;
        font-size: 16px;
        border-top:2px solid rgb(241,91,8);
        padding-right: 40px;
}
.title a{
    float: right;
    color: black;
}
.title>span{
    font-size: 14px;
}
.contentbox{
    width: 990px;
    height: 616px;
    background: #fff;
    padding: 0 40px 40px;
    font-size: 14px;
}
.section{
    width: 910px;
    height: 174px;
    position: relative;
    padding-bottom:32px;
    padding-top: 40px;
    border-bottom: 1px dotted rgb(221,221,221)
}
.section ul{
    width: 704px;
    height: 142px;
}
.section li{
    width: 100%;
    float: left;
    text-align: left;
    list-style: none;
    height: 36px;
    line-height: 36px;
}
.section .half{
    width: 50%;
}
.stitle{
    display: inline-block;
    width: 87px;
    text-align: left;
    font-size: 14px;
    color: black;
}
.innertext{
    text-align: left;
    color: #999;
}
.last .stitle{
    float: left;
}
.last .innertext{
    float: left;
    width: 616px;
    line-height: 24px;
}
.btncontent{
    width: 160px;
    height: 180px;
    position: absolute;
    top: 62px;
    right: 0;
}
.btncontent input{
    width: 100px;
    height: 32px;
    line-height: 32px;
    border: 1px solid rgb(241,91,8);
    color: rgb(241,91,8);
    outline: none;
}
.btncontent a{
    font-size: 14px;
    color: rgb(34,108,145);
    display: inline-block;
    margin:20px  16px 0 0;
}
</style>


