<template>
    <div>
        <div class="title">
            <span class="line"></span>
            <span class="maintitle">品牌商</span>
            <span class="subhead">品牌直达 剔除溢价</span>
            <a class="morebrand" href="/haitao">更多品牌商> </a>
        </div>
        <div class="brands">
            <ul>
                <li   v-for="item in list" :key="item.id">
                    <h2 class="brandname">{{item.name}}</h2>
                    <span class="verline"></span>
                    <p class="price">{{item.price}}</p>
                </li>
            </ul>
            <div class="lastbrand">
                <div class="top">1</div>
                <div class="bottom">2</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'brandingbusiness',
    // props:[list],
    data(){
        return{
            list:[
                {name:"ck制造商",price:"25元起"},
                {name:"22制造商",price:"49元起"},
                {name:"33制造商",price:"59元起"}
            ]
        }
    }
}
</script>
<style scoped>
.title{
    width: 1200px;
    height: 25px;
    line-height: 25px;
    margin: 0 auto;
    text-align: left;
    margin-bottom:18px; 
}
.line{
    display: inline-block;
    width: 3px;
    height: 18px;
    background: #F45B08;
    margin-right: 12px;
}
.maintitle{
    display: inline-block;
    font-size: 25px;
    color: #2D2D2D;
    margin-right:20px; 
}
.subhead{
    display: inline-block;
    font-size: 14px;
    color: #1C1C1C;
    height: 25px;
    line-height: 25px;
}
.morebrand{
    float:right;
    color: #333;
    font-size: 14px;
}
.brands{
    width: 1200px;
    height: 285px;
    margin: 0 auto;
}
.brands ul{
    float: left;
    width: 915px;
    height: 285px;
}
.brands li{
    float: left;
    list-style: none;
    width: 285px;
    height: 285px;
    margin-right:20px;
    background:greenyellow; 
    text-align: center;
}
.brandname{
    margin-top: 40px;
    color: #999;
    font-size: 20px;
    font-weight: 600;
}
.verline{
    display: inline-block;
    width: 36px;
    height: 1px;
    background: #999;
    margin: 16px 0;
}
.price{
    font-size: 14px;
    color: #999;
}
.lastbrand{
    float: left;
    width: 285px;
    height: 285px;
}
.top,.bottom{
    width: 285px;
    height: 132px;
    background:greenyellow; 
}
.top{
    margin-bottom:21px; 
}
</style>


