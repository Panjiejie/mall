<template>
    <div id="shopping-cart-content">
        <div id="shopping-cart">
            <!-- table-header -->
            <div class="c-title clearfix">
                <div class="checkbox">
                    <el-checkbox v-model="checked">全选</el-checkbox>
                </div>
                <div class="goodsinfo">商品信息</div>
                <div class="price">单价</div>
                <div class="amount">数量</div>
                <div class="subtotal">小计</div>
                <div class="operation">操作</div>
            </div>
            <!-- table-body -->
            <div class="c-body">
                <div class="c-body-line" v-for='item in cartLists' :key='item.key'>
                    <div class="checkbox">
                        <el-checkbox v-model="item.ischecked"></el-checkbox>
                    </div>
                    <div class="goodsinfo">
                        <img :src="item.src" alt="">
                        <h5>{{item.title}}</h5>
                        <span>{{item.params}}</span>
                    </div>
                    <div class="price">
                        <span>￥{{item.price}}</span>
                        <span>￥{{item.price}}</span>
                    </div>
                    <div class="amount">
                        <el-input-number v-model="item.amount"  :min="1" :max="10" label="描述文字"></el-input-number>
                    </div>
                    <div class="subtotal">
                        ￥{{item.subtotal}}
                    </div>
                    <div class="operation">
                        <span>移入收藏夹</span>
                        <span>删除</span>
                    </div>
                </div>
            </div>
            <!-- table-footer -->
            <div class="c-table-footer clearfix">
                <div class="havechoose">
                    <el-checkbox v-model="checked">已选({{havechoose}})</el-checkbox>
                </div>
                <div class="footer-center">
                    <span class='f-operation'>删除选中商品</span>
                    <span class='f-operation'>移入收藏夹</span>
                    <span class="gray">共&nbsp;{{totalGoods}}&nbsp;件商品 已选择&nbsp;{{havechoose}}&nbsp;件 &nbsp;&nbsp;&nbsp;商品合计：￥&nbsp;{{totalPrice}} &nbsp;&nbsp;&nbsp;活动优惠-￥&nbsp;{{discount}}&nbsp;&nbsp;&nbsp; 应付总额：<span class="red"> ￥{{realPay}}</span></span>
                </div>
                <div class="f-btn">
                    下单结算
                </div>
            </div>
            <!-- swiper -->
            <div class="carousel-content">
                <div class="carousel-title">
                    同类商品推荐
                    <span>查看更多></span>
                </div>
                <div class="carousel-body">
                    <div class="carousel">
                        <Carousel
                            v-model="value3"
                            :autoplay="setting.autoplay"
                            :autoplay-speed="setting.autoplaySpeed"
                            :dots="setting.dots"
                            :radius-dot="setting.radiusDot"
                            :trigger="setting.trigger"
                            :arrow="setting.arrow">
                            <CarouselItem v-for=' i in 5' :key='i.key'>
                                <div class="demo-carousel" >
                                    {{i}}
                                    <!-- <div v-for="i in 4" :key='i.key'>{{i}}</div> -->
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import imgUrl from '../../../assets/goodsGuide/bg.png'
export default {
    name:'shoppingCart',
    components:{},
    data(){
        return{
            checked:false,//全选checkbox
            havechoose:0,//已选商品数量
            totalGoods:'1',//购物车商品总数
            totalPrice:0,//购物车商品总价
            discount:'12',//活动优惠
            realPay:'134',//实际应付金额
             value3: 0,
                setting: {//轮播设置
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'none',
                    radiusDot: false,
                    trigger: 'click',
                    arrow: 'hover'
                },
            cartList:[
                 {ischecked:false,src:imgUrl,title:'我电话是多少你看下都是粗底层开始的补充潇洒小姐先后顺序wodedsaasxasxa',params:'颜色：灰色 尺码：160',price:'249',subprice:'249',amount:'1',subtotal:'249'}
                ,{ischecked:true,src:imgUrl,title:'我电话是多少你看下都是粗底层开始的补充潇洒小姐先后顺序wodedsaasxasxa',params:'颜色：灰色 尺码：160',price:'249',subprice:'249',amount:'10',subtotal:'249'}
                ,{ischecked:false,src:imgUrl,title:'我电话是多少你看下都是粗底层开始的补充潇洒小姐先后顺序wodedsaasxasxa',params:'颜色：灰色 尺码：160',price:'249',subprice:'249',amount:'1',subtotal:'249'}
                ,{ischecked:false,src:imgUrl,title:'我电话是多少你看下都是粗底层开始的补充潇洒小姐先后顺序wodedsaasxasxa',params:'颜色：灰色 尺码：160',price:'249',subprice:'249',amount:'1',subtotal:'249'}
            ],
        }
    },
    mounted:function(){
        // this.cartInit();
    },
    computed:{
        cartLists:function(){
             this.cartList.forEach(item=>{
                item.subtotal=item.price*item.amount;
                this.totalPrice+=item.subtotal*1;
                if(item.ischecked){
                    this.havechoose+=1;
                }
            });
            this.realPay=this.totalPrice-this.discount;
            this.totalGoods=this.cartList.length;
            return this.cartList;
        }
    },
    methods:{
        cartInit(){
            
        },
    }
}
</script>
<style scoped>
#shopping-cart-content{
    width: 100%;
    min-height: 800px;
    background: #fff;
    position: relative;
}
#shopping-cart{
    width: 1200px;
    min-height: 1000px;
    padding: 50px 0 40px 0;
    margin: 0 auto;
    /* background: yellowgreen; */
    position: relative;
    z-index: 2;
}
.c-title{
    width: 1200px;
    height: 60px;
    line-height: 60px;
    background: #f2f2f2;
    font-size: 14px;
    border: 1px solid rgb(221,221,221);
}
.c-title>div{
    float: left;
}
.checkbox{
    width: 100px;
    height: 100%;
}
.goodsinfo{
    width: 520px;
    height: 100%;
}
.price,.amount,.subtotal{
    width: 148px;
    height: 100%;
}
.operation{
    width: 134px;
    height: 100%;
}
.c-body-line{
    width: 1200px;
    height: 140px;
    border: 1px solid rgb(221,221,221);
    border-top: 0;
}
.c-body-line>div{
    float: left;
}
.c-body-line .goodsinfo{
    text-align: left;
}
.c-body-line .checkbox{
    width: 100px;
    height: 140px;
    line-height: 140px;
}
.goodsinfo img{
    float: left;
    margin: 20px 14px 0 0;
    width: 100px;
    height: 100px;
    border: 1px solid red;
}
.goodsinfo h5{
    margin: 20px 0 14px 0;
    line-height: 18px;
    font-size: 14px;
}
.goodsinfo span{
    color: #999;
}
.c-body-line .price,.c-body-line .operation{
    padding-top: 42px;
}
.price span,.operation span{
    display: block;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
}
.operation span{
    color: rgb(34,108,145);
}
.price span:last-child{
    color: #999;
    text-decoration: line-through;
}
.c-body-line .amount{
    line-height: 140px;
}
.el-input-number{
    width: 140px;
}
.c-body-line .subtotal{
    line-height: 140px;
    color: #ff2040;
    font-size: 14px;
}
.checkbox{
    padding-left: 30px;
    text-align: left;
}
/* table-footer */
.c-table-footer{
    width: 1200px;
    height: 90px;
    line-height: 90px;
    border: 1px solid rgb(221,221,221);
    border-top: none;
    font-size: 14px;
    position: relative;
}
.c-table-footer>div{
    float: left;
}
.havechoose{
    width: 153px;
    padding-left: 30px;
    text-align: left;
}
.footer-center{
    width: 890px;
    text-align: left;
    font-size: 14px;
    color: #999;
}
.footer-center .f-operation{
    font-size: 14px;
    color: black;
    display: inline-block;
    margin-right: 70px;
}
.red{
    color: #ff2040;
    font-size:20px;
    font-weight: 600; 
}
.f-btn{
    width: 160px;
    height: 90px;
    line-height: 90px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    background: rgb(244,91,8);
    position: absolute;
    top: 0;
    right: 0;
}
/* swiper */
.carousel-content{
    width: 1200px;
    height: 420px;
    margin: 64px 0 40px;
}
.carousel-title{
    width: 100%;
    height: 42px;
    line-height: 42px;
    font-size: 16px;
    background:#f2f2f2;
    padding-left: 16px;
    position: relative;
    text-align: left;
}
.carousel-title span{
    position: absolute;
    top: 0;
    right: 16px;
    font-size: 12px;
}
.carousel-body{
    width: 1200px;
    height: 378px;
    padding: 0 30px;
}
.carousel{
    width: 100%;
    height: 378px;
    background: #fff;
}
</style>
<style>
.ivu-carousel{
    height: 100%;
    background:red;
}
</style>

