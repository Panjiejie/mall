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
                <div class="c-body-line" v-for='(item,index) in cartList' :key='item.key'>
                    <div class="checkbox">
                        <el-checkbox v-model="item.ischecked" @change="changes(item)"></el-checkbox>
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
                        <el-input-number v-model="item.amount"  :min="1" @change='amountChange(item)' label="描述文字"></el-input-number>
                    </div>
                    <div class="subtotal">
                        ￥{{item.subtotal}}
                    </div>
                    <div class="operation">
                        <span @click="removeToMyfavorite(item,index)">移入收藏夹</span>
                        <span @click="deleteCartGoodsItem(item,index)">删除</span>
                    </div>
                </div>
            </div>
            <!-- table-footer -->
            <div class="c-table-footer clearfix">
                <div class="havechoose">
                    <el-checkbox v-model="checked">已选({{havechoose}})</el-checkbox>
                </div>
                <div class="footer-center">
                    <span class='f-operation' @click="deleteCheckedGoods">删除选中商品</span>
                    <!-- <span class='f-operation'>移入收藏夹</span> -->
                    <span class="gray">共&nbsp;{{totalGoods}}件商品 已选择&nbsp;{{havechoose}}件 &nbsp;商品合计：￥&nbsp;{{totalPrice}} &nbsp; 应付总额：<span class="red"> ￥{{realPay}}</span></span>
                </div>
                <div class="f-btn" @click="toConfigureRecipient">
                    下单结算
                </div>
            </div>
            <!-- swiper -->
            <!-- <div class="carousel-content">
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
                            <CarouselItem v-for='item in swiperList' :key='item.key'>
                                <div class="demo-carousel" >
                                    <goodsItem :itemParams='i' v-for='i in item' :key='i.key'></goodsItem>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div> 
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
import imgUrl from "../../../assets/goodsGuide/bg.png";
import goodsItem from "../../../components/public/goodsitem";
export default {
  name: "shoppingCart",
  components: {
    goodsItem
  },
  data() {
    return {
      UserAccount:'',
      postInfos:[],
      checked: false, //全选checkbox
      // havechoose: 0, //已选商品数量
      // totalGoods: 0, //购物车商品总数
      // totalPrice: 0, //购物车商品总价
      discount: 12, //活动优惠
      // realPay: 0, //实际应付金额
      chooseList: [], //已选择商品
      swiperList: [
        [
          // {
          //   src: imgUrl,
          //   name: "多热烈的白羊",
          //   subtitle: "小毛驴",
          //   price: "12345"
          // },
        ]
      ],
      value3: 0,
      setting: {
        //轮播设置
        autoplay: false,
        autoplaySpeed: 2000,
        dots: "none",
        radiusDot: false,
        trigger: "click",
        arrow: "hover"
      },
      cartList: [
        // {
        //   ischecked: false,
        //   src: imgUrl,
        //   title:
        //     "我电话是多少你看下都是粗底层开始的补充潇洒小姐先后顺序wodedsaasxasxa",
        //   params: "颜色：灰色 尺码：160",
        //   price: "249",
        //   subprice: "249",
        //   amount: "1",
        //   subtotal: "249"
        // },
      ]
    };
  },
  created(){
    this.initTable();
  },
  mounted() {
  },
  watch:{
    checked(newval,oldval){
       if(newval){
         this.cartList.forEach(e=>e.ischecked=true)
       }else{
         this.cartList.forEach(e=>e.ischecked=false)
       }
    }
  },
  computed: {
    totalGoods:{
     get(){
      let num=0;
      this.cartList.forEach(e=>{
          num+=parseInt(e.amount);
      })
       return num;
     }
    },
    havechoose:{
     get(){
        //已选商品数量
      let num = 0;
      this.cartList.forEach(e=>{
        if(e.ischecked){
          num+=parseInt(e.amount);
        }
      })
      return num;
     }
    },
    totalPrice:{
      get(){
        let num =0;
        this.cartList.forEach(e=>{
        if(e.ischecked){
          num+=parseInt(e.amount)*parseInt(e.price);
        }
      })
      return num;
      }
    },
    realPay:{
      get(){
        // return this.totalPrice - this.discount > 0 ? this.totalPrice - this.discount : 0
        return this.totalPrice
      }
    }
  },
  methods: {
    changes(val){
      // this.cartList.forEach(e=>{
      //   e.ischecked?'':this.checked=false
      // })
      // if(val.ischecked=='false'){
        this.checked=false;
      // }
    },
    toConfigureRecipient(){
      if(this.checked){//全选
        this.postInfos=this.cartList;
        console.log(this.postInfos)
        localStorage.setItem('cartList',JSON.stringify(this.postInfos));
        this.$router.push('../nav/configureRecipient')
      }else{//非全选
        this.cartList.forEach(e=>{//筛选出选择的商品
          if(e.ischecked){
            this.postInfos.push(e);
          }
          })
        localStorage.setItem('cartList',JSON.stringify(this.postInfos))
        console.log(this.postInfos)
        if(this.postInfos.length>0){//所选结算商品不为0 跳转结算界面
          this.$router.push('../nav/configureRecipient')
        }else{
          this.postInfos.length=0;
          this.$message({
            message:'请先选择要结算的商品！',
            type:'warn'
          })
        }
      } 
    },
    amountChange(item){//改变商品数量
      // console.log(item)
      item.subtotal=item.amount*item.price;
       this.axios.post("/Cart/UpdateDealSum", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "UpdateDealSum",
                    LoginUser:'2',
                    UserAccount:this.UserAccount,
                    CommodityName:item.title,
                    DealSum:item.amount,
                    DealMoney:item.subtotal
                    })
                    .then(
                    response => {
                        console.log(response)
                        this.cartList.splice(index,1)
                        
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
    },
    initTable(){
      this.cartList.forEach(e=>e.subtotal=e.price*e.amount*1);
      //请求表格数据
      this.UserAccount=localStorage.getItem('UserAccount');
             this.axios.post("/Cart/SelectCommodityInfo", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "SelectCommodityInfo",
                    LoginUser:'2',
                    UserAccount:this.UserAccount
                    })
                    .then(
                    response => {
                        // console.log(response)
                        let data=response.data;
                        this.cartList.length=0;
                        for(let i=0,len=data.DealSum.length;i<len;i++){
                            let FilePath=data.FilePath[i];
                            // console.log(FilePath)
                                FilePath=FilePath.split(',')[0]+FilePath.split(',')[1];
                                // console.log(FilePath)
                            this.cartList.push({
                                        src:FilePath,
                                        title:data.CommodityName[i],
                                        price:data.SupplyMoney[i],
                                        amount:data.DealSum[i],
                                        ischecked: false,
                                        subtotal:data.DealSum[i]*data.SupplyMoney[i],
                                        params:data.BrandName[i],
                                        CommodityNumber:data.CommodityNumber[i]
                                    })
                        } 
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
    },
    deleteCartGoodsItem(item,index){
              // 删除单个商品
              let str='"CommodityName":["'+item.title+'"]';
              this.axios.post("/Cart/DelCommodityInfo", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "DelCommodityInfo",
                    LoginUser:'2',
                    UserAccount:this.UserAccount,
                    CommodityName:str
                    })
                    .then(
                    response => {
                        console.log(response)
                        this.cartList.splice(index,1)
                        
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
    },
    deleteCheckedGoods(){//删除选中商品
      let arr=[];
      this.cartList.forEach(e=>{
        if(e.ischecked){
          arr.push(`${e.title}`)
        }
        })
        console.log(arr)
        let str='"CommodityName":"'+arr+'"';
              this.axios.post("/Cart/DelCommodityInfo", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "DelCommodityInfo",
                    LoginUser:'2',
                    UserAccount:this.UserAccount,
                    CommodityName:str
                    })
                    .then(
                    response => {
                        console.log(response)
                        this.cartList.forEach((e,index)=>{
                          if(e.ischecked){
                            this.cartList.splice(index,1)
                          }
                          
                        })
                        
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
    },
    removeToMyfavorite(item,index){
              // let str='"CommodityName":["'+item.title+'"]';
              this.axios.post("/Cart/SetFavoriteCommodity", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "SetFavoriteCommodity",
                    LoginUser:'2',
                    UserAccount:this.UserAccount,
                    CommodityNumber:item.CommodityNumber
                    })
                    .then(
                    response => {
                        console.log(response)
                        this.cartList.splice(index,1)
                        
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
    }
  }
};
</script>
<style scoped>
#shopping-cart-content {
  width: 100%;
  min-height: 800px;
  background: #fff;
  position: relative;
}
#shopping-cart {
  width: 1200px;
  min-height: 1000px;
  padding: 50px 0 40px 0;
  margin: 0 auto;
  /* background: yellowgreen; */
  position: relative;
  z-index: 2;
}
.c-title {
  width: 1200px;
  height: 60px;
  line-height: 60px;
  background: url(../../../assets/common/shadow.png);
  font-size: 14px;
  border: 1px solid rgb(221, 221, 221);
}
.c-title > div {
  float: left;
}
.checkbox {
  width: 100px;
  height: 100%;
}
.goodsinfo {
  width: 520px;
  height: 100%;
}
.price,
.amount,
.subtotal {
  width: 148px;
  height: 100%;
}
.operation {
  width: 134px;
  height: 100%;
}
.c-body-line {
  width: 1200px;
  height: 140px;
  border: 1px solid rgb(221, 221, 221);
  border-top: 0;
}
.c-body-line > div {
  float: left;
}
.c-body-line .goodsinfo {
  text-align: left;
}
.c-body-line .checkbox {
  width: 100px;
  height: 140px;
  line-height: 140px;
}
.goodsinfo img {
  float: left;
  margin: 20px 14px 0 0;
  width: 100px;
  height: 100px;
  /* border: 1px solid red; */
}
.goodsinfo h5 {
  margin: 20px 0 14px 0;
  line-height: 18px;
  font-size: 14px;
}
.goodsinfo span {
  color: #999;
}
.c-body-line .price,
.c-body-line .operation {
  padding-top: 42px;
}
.price span,
.operation span {
  display: block;
  height: 28px;
  line-height: 28px;
  font-size: 14px;
}
.operation span {
  color: rgb(34, 108, 145);
  cursor: pointer;
}
.price span:last-child {
  color: #999;
  text-decoration: line-through;
}
.c-body-line .amount {
  line-height: 140px;
}
.el-input-number {
  width: 140px;
}
.c-body-line .subtotal {
  line-height: 140px;
  color: #ff2040;
  font-size: 14px;
}
.checkbox {
  padding-left: 30px;
  text-align: left;
}
/* table-footer */
.c-table-footer {
  width: 1200px;
  height: 90px;
  line-height: 90px;
  border: 1px solid rgb(221, 221, 221);
  border-top: none;
  font-size: 14px;
  position: relative;
}
.c-table-footer > div {
  float: left;
}
.havechoose {
  width: 153px;
  padding-left: 30px;
  text-align: left;
}
.footer-center {
  width: 890px;
  text-align: left;
  font-size: 14px;
  color: #999;
}
.footer-center .f-operation {
  font-size: 14px;
  color: black;
  display: inline-block;
  margin-right: 70px;
  cursor: pointer;
}
.red {
  color: #ff2040;
  font-size: 20px;
  font-weight: 600;
}
.f-btn {
  width: 160px;
  height: 90px;
  line-height: 90px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  background: rgb(244, 91, 8);
  position: absolute;
  top: 0;
  right: 0;
}
/* swiper */
.carousel-content {
  width: 1200px;
  height: 420px;
  margin: 64px 0 40px;
}
.carousel-title {
  width: 100%;
  height: 42px;
  line-height: 42px;
  font-size: 16px;
  background: #f2f2f2;
  padding-left: 16px;
  position: relative;
  text-align: left;
}
.carousel-title span {
  position: absolute;
  top: 0;
  right: 16px;
  font-size: 12px;
}
.carousel-body {
  width: 1200px;
  height: 378px;
  padding: 0 30px;
}
.carousel {
  width: 100%;
  height: 378px;
  background: #fff;
}
</style>
<style>
.ivu-carousel {
  height: 100%;
  /* background:red; */
}
.demo-carousel {
  width: 960px;
  height: 380px;
  margin: 0 auto;
  background: blue;
}
.item-content {
  float: left;
}
</style>

