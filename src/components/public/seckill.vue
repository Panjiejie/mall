<template>
    <div id="cart-content">
        <div class="c-title">
            首页 > 秒杀专区
        </div>
        <div class="c-banner-content">
            <div class="c-banner"></div>
            <ul class='timeline clearfix'>
                <li v-for='item in timeline' :key='item.key' @click="timelineFilter(item)">
                    <div class="wrapper" :class="{chooseWrapper:item.isBuying}">
                        <div class="t-content" :class="{isborderRight:item.isBuying}">
                            <div class="time">
                                {{item.time}}
                            </div>
                            <div class="status">
                                {{item.status}}
                            </div>
                        </div>
                    </div>
                    <i class="triangle" :class="{opacityShow:item.isBuying}"></i>
                </li>
            </ul>
        </div>
        <!-- 商品区域 -->
        <ul class="seckill clearfix">
            <li v-for='item in seckillList' :key='item.key' :class="{noMargin:item.noMargin}">
                <img :src="item.Filepath"  alt="">
                <h5>{{item.title}}</h5>
                <div>
                    <span class="price"><span class="mlogo">¥</span>{{item.price}}</span>&nbsp;&nbsp;
                    <span class="count-price">￥{{item.subprice}}</span>
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
</template>
<script>
import imgUrl from '../../assets/goodsGuide/bg.png'
export default {
    name:'seckill',
    components:{},
    data(){
        return{
            timeline:[
                {time:'22:00',status:'抢购中',isBuying:true},
                {time:'22:00',status:'抢购中',isBuying:false},
                {time:'22:00',status:'抢购中',isBuying:false},
                {time:'22:00',status:'抢购中',isBuying:false},
                {time:'22:00',status:'抢购中',isBuying:false},
                {time:'22:00',status:'抢购中',isBuying:false},
            ],
            seckillList:[
                {Filepath:imgUrl,title:'商品名称',price:'9999',subprice:'12000',noMargin:false},
                {Filepath:imgUrl,title:'商品名称',price:'9999',subprice:'12000',noMargin:false},
                {Filepath:imgUrl,title:'商品名称',price:'9999',subprice:'12000',noMargin:false},
                {Filepath:imgUrl,title:'商品名称',price:'9999',subprice:'12000',noMargin:false},
                {Filepath:imgUrl,title:'商品名称',price:'9999',subprice:'12000',noMargin:false},
                {Filepath:imgUrl,title:'商品名称',price:'9999',subprice:'12000',noMargin:false},
                {Filepath:imgUrl,title:'商品名称',price:'9999',subprice:'12000',noMargin:false},
            ]
        }
    },
    mounted:function(){
        this.seckillListFilter();
    },
    methods:{
        timelineFilter(item){
            this.timeline.forEach(e=>e.isBuying=false);
            item.isBuying=true;
        },
        seckillListFilter(){
            this.seckillList.forEach((e,index)=>{
                if(index%5==4){
                    e.noMargin=true;
                }
            })
        }
    },
}
</script>
<style scoped>
#cart-content{
    width: 100%;
    height: auto;
    background: #f2f2f2;
}
.c-title{
    width: 1200px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    margin: 0 auto;
    text-align: left;
}
.c-banner-content{
    width: 1200px;
    height: 356px;
    margin: 0 auto;
}
.c-banner{
    width: 1200px;
    height: 230px;
    background: green;
}
.timeline{
    width: 1200px;
    height: 87px;
}
.timeline li{
    width: 200px;
    height: 87px;
    float: left;
    list-style: none;
    position: relative;
    color: rgb(185,185,185);
}
.wrapper{
    padding: 10px 0;
    background: rgb(25,25,25);
    color: rgb(185,185,185);
    border-bottom:5px solid rgb(25,25,25) 
}
.opacityShow{
    opacity: 1 !important;
}
.chooseWrapper{
    border-bottom: 5px solid rgb(254,90,27);
    background: linear-gradient(270deg,rgba(251,116,48),rgb(250,146,35)) 
}
.isborderRight{
    border-right:0 !important;
}
.t-content{
    width: 200px;
    height: 55px;
    /* margin:10px 0; */
    border-right:1px solid rgb(93,93,93); 
}
.timeline li:last-child .t-content{
    border-right: 0;
}
.timeline .triangle{
    width: 14px;
    height: 0;
    border: 6px solid transparent;
    border-top-color: rgb(244,91,8);
    position: absolute;
    bottom: -5px;
    left: 93px;
    opacity: 0;
}
.time{
    width: 100%;
    height: 30px;
    line-height: 40px;
    font-size: 18px;
}
.status{
    width: 100%;
    height: 25px;
    line-height: 35px;
    font-size: 18px;
}
/* 秒杀商品区域 */
.seckill{
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 30px;
    background: #f2f2f2;
    min-height:300px;
}
.seckill li{
    width:230px;
    height: 340px;
    margin:0 12.5px 30px 0;
    float: left;
    list-style: none;
    padding: 15px 15px 0;
    position: relative;
    border: 1px solid rgb(238,238,238);
    background: #fff;
}
.seckill li img{
    display: block;
    width: 200px;
    height: 200px;
    border: 1px solid red;
}
.seckill li h5{
    margin:15px 0 0 14px ; 
    font-size: 16px;
    font-weight: 300;
    color:black;
}
.seckill .price{
    color: #ff2040;
    font-family:"MicrosoftYaHei-Bold";
    font-size: 20px;
}
.seckill .count-price{
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
    width: 228px;
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
.noMargin{
    margin-right: 0 !important;
}
</style>
