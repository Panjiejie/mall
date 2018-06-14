<template>
    <div class="content">
        <div class="title">
            <span class="line"></span>
            <span class="maintitle">限时秒杀</span>
            <span class="subhead">每日好物 限量秒杀</span>
            <!-- <a class="morebrand" href="/haitao">查看全部> </a> -->
            <router-link class="morebrand" to="nav/seckillGoodsDetail">查看全部> </router-link>
        </div>
        <div class="brands">
            <div class="seckill-left">
                <h2>限时秒杀</h2>
                <h4>FLASH DEALS</h4>
                <div class="flash">
                    <img src="../../assets/common/kefu.png" style="width:48px;height:52px;" alt="">
                </div>
                <h3>距离开始还剩</h3>
                <div class="countdown">
                    <span class="hours">01</span>:
                    <span class="minutes">26</span>:
                    <span class="seconds">56</span>
                </div>
            </div>
            <div class="seckill-right">
                <ul>
                    <li>
                        <img src="../../assets/common/logo.png" style="width:200px;height:200px;" alt="">
                        <h5>pt950铂金钻石结婚对戒</h5>
                        <div>
                            <span class="price"><span class="mlogo">¥</span>2258</span>
                            <span class="count-price">¥2500</span>
                        </div>
                        <div class="seckill-btn"></div>
                    </li>
                    <li>
                        <img src="../../assets/common/logo.png" style="width:200px;height:200px;" alt="">
                        <h5>pt950铂金钻石结婚对戒</h5>
                        <div>
                            <span class="price"><span class="mlogo">¥</span>2258</span>
                            <span class="count-price">¥2500</span>
                        </div>
                        <div class="seckill-btn"></div>
                    </li>
                    <li>
                        <img src="../../assets/common/logo.png" style="width:200px;height:200px;" alt="">
                        <h5>pt950铂金钻石结婚对戒</h5>
                        <div>
                            <span class="price"><span class="mlogo">¥</span>2258</span>
                            <span class="count-price">¥2500</span>
                        </div>
                        <div class="seckill-btn"></div>
                    </li>
                    <li>
                        <img src="../../assets/common/logo.png" style="width:200px;height:200px;" alt="">
                        <h5>pt950铂金钻石结婚对戒</h5>
                        <div>
                            <span class="price"><span class="mlogo">¥</span>2258</span>
                            <span class="count-price">¥2500</span>
                        </div>
                        <div class="seckill-btn">
                            <div class="progress">
                                <el-progress :text-inside="true" :stroke-width="30" :percentage="20" color="rgba(142, 113, 199, 0.7)">222</el-progress>
                            </div>
                            <span class="seckill-rightnow">立即秒杀</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'seckill',
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
.content{
    width: 1200px;
    height: 383px;
    margin:45px auto 0;  
    /* background: rgba(244,91,8,.2) */
}
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
.seckill-left{
    width: 230px;
    height: 340px;
    float: left;
    background: -webkit-linear-gradient(-45deg, #FF793E, #FBC31D); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(-45deg, #FF793E, #FBC31D); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(-45deg, #FF793E, #FBC31D); /* Firefox 3.6 - 15 */
    background: linear-gradient(-45deg, #FF793E, #FBC31D); /* 标准的语法 */
}
.seckill-left h4,.seckill-left h3,.seckill-left .countdown{
    color: #fff;
}
.seckill-left h2{
    margin-top: 47px;
}
.seckill-right{
    float: left;
    width: 956px;
}
.seckill-left:after , .seckill-right:after{
    content: "";
    display: block;
    clear: both;
}
.seckill-right li{
    width:230px ;
    height: 340px;
    margin-left:9px ;
    float: left;
    list-style: none;
    padding: 3px 3px 0;
    position: relative;
    border: 1px solid #f6f6f6;
    border-top:3px solid rosybrown;
}
.seckill-right li img{
    display: block;
    width: 200px;
    height: 200px;
}
.seckill-right li h5{
    margin:15px 0 14px; 
    font-size: 18px;
    font-weight: 300;
}
.seckill-right .price{
    color: #ff2040;
    font-family:"MicrosoftYaHei-Bold";
    font-size: 20px;
}
.seckill-right .count-price{
    color: #999;
    text-decoration: line-through;
    font-size: 12px;
}
.mlogo{
    font-size: 16px;
    display: inline-block;
    margin-right:6px; 
}
.seckill-btn{
    width: 229px;
    height: 50px;
    background: #ff2040;
    /* margin-top: 5px; */
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 8px 0;
}
.progress{
    width: 135px;
    float: left;
    height: 30px;
    margin-right:8px ;
}
.seckill-rightnow{
    float: left;
    font-size: 14px;
    color: #fff;
    line-height: 30px;
}
.seckill-btn:after{
    content: "";
    display: block;
    clear: both;
}
</style>


