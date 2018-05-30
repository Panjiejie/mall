<template>
    <div class="content">
        <div class="title">
            <span class="line"></span>
            <span class="maintitle">新品上架</span>
            <a class="morebrand" href="/haitao"> &lt; </a>
            <a class="morebrand" href="/haitao"> &gt; </a>
        </div>
        <div class="brands">
            <div class="seckill-left">
                <h2>春季新品上架</h2>
                <span class="newline"></span>
            </div>
            <div class="seckill-right">
                <ul>
                    <li>
                        <img src="../../assets/common/logo.png" style="width:200px;height:200px;" alt="">
                        <h5>pt950铂金钻石结婚对戒</h5>
                        <div>
                            <span class="price"><span class="mlogo">¥</span>2258</span>
                        </div>
                        <div class="seckill-btn"></div>
                    </li>
                    <li>
                        <img src="../../assets/common/logo.png" style="width:200px;height:200px;" alt="">
                        <h5>pt950铂金钻石结婚对戒</h5>
                        <div>
                            <span class="price"><span class="mlogo">¥</span>2258</span>
                        </div>
                        <div class="seckill-btn"></div>
                    </li>
                    <li>
                        <img src="../../assets/common/logo.png" style="width:200px;height:200px;" alt="">
                        <h5>pt950铂金钻石结婚对戒</h5>
                        <div>
                            <span class="price"><span class="mlogo">¥</span>2258</span>
                        </div>
                        <div class="seckill-btn">立即购买</div>
                    </li>
                    <li class="last">
                        <h2>浏览更多新品</h2>
                        <h4>Browse more new products</h4>
                        <span class="lines"></span>
                        <div class="arr">&gt;</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'newgoods',
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
    background: #70d4c0;
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
    background: -webkit-linear-gradient(-45deg, #F1293E, #FBC31D); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(-45deg, #F1293E, #FBC31D); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(-45deg, #F1293E, #FBC31D); /* Firefox 3.6 - 15 */
    background: linear-gradient(-45deg, #F1293E, #FBC31D); /* 标准的语法 */
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
    width:225px ;
    height: 340px;
    margin-left:14px ;
    float: left;
    list-style: none;
    padding: 3px 3px 0;
    position: relative;
    border: 1px solid #f6f6f6;
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
    width: 225px;
    height: 50px;
    background: #ff2040;
    /* margin-top: 5px; */
    position: absolute;
    bottom: 0;
    left: 0;
    /* padding: 10px 8px 0; */
    color: #fff;
    line-height: 50px;
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
.seckill-left h2{
    color: #9fb1a2;
    font-weight: 400;
    margin:47px 25px 0;
    width: 180px;
    border-bottom: 2px solid #9fb1a2;
}
.seckill-right .last{
    padding-top:90px ;
}
.seckill-right .last .line{
    width: 36px;
    color:#787878;
    display: block;
    margin: 30px 97px 0;
}
.arr{
    width: 54px;
    height: 54px;
    border: 2px solid #f45b08;
    border-radius: 50%;
    font-size: 24px;
    color: #f45b08;
    margin: 44px 88px 0;

}
</style>





