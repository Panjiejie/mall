<template>
    <div id="banner" @mouseleave="leave">
           <div id="banner-nav" >
               <ul class="slidebar" >
                   <li v-for="item in navLeft" :class="{isorange:item.isShow}" :key="item.key"  @mouseenter="enter(item)" >
                       {{item.text}}<span>&gt;</span>
                   </li>
                   <!-- <li @mouseenter="brands()" :class="{isorange:isShow}" >
                       品牌<span>&gt;</span>
                   </li> -->
               </ul>
                <!-- 二级导航 -->
                <div class="banner-detail" v-bind:class="{ active: isActive }">
                    <p>分类推荐</p>
                    <ul class="second-mnue clearfix">
                        <li class="clearfix" v-for="item in detailmsg" :key="item.key" @click="toGoodsDetail">
                            <img :src="item.FilePath" alt="">
                            <div class="goods-detail">
                                <h4>{{item.title}}</h4>
                                <p class="brandName">{{item.BrandName}}</p>
                                <p class="price">￥{{item.price}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 二级导航品牌 -->
                 <!-- <div class="banner-detail brand-tab" v-bind:class="{ brands: isBrands }">
                    <div class="brand-tab-left">
                        <div class="tab-title">
                            <span>品牌商</span>
                        </div>
                        <ul class="brand-detail clearfix">
                            <li class="clearfix" v-for="item in brand" :key="item.key" @click="toBrands">
                                <img :src="item.Filepath" alt="">
                                <p>{{item.brandName}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="brand-tab-right">
                        <div class="tab-title">
                            <span>热门品牌</span>
                            <router-link to="nav/toBrands">查看全部></router-link>
                        </div>
                        <ul class="brand-detail clearfix">
                            <li class="clearfix" v-for="item in brand" :key="item.key" @click="toBrands">
                                <img :src="item.Filepath" alt="">
                                <p>{{item.brandName}}</p>
                            </li>
                        </ul>
                    </div>
                </div> -->
           </div>
           <!-- 轮播 -->
           <div id="banner-swiper">
                 <Carousel autoplay v-model="value2" loop>
                     <CarouselItem  v-for="item in list" :key="item.key" @click="toGoodsDetail">
                        <img :src="item.src" alt="" style="width:1080px;height:460px;">
                     </CarouselItem>
                </Carousel>
           </div>
       </div>
</template>
<script>
import imgurl from "../../assets/common/kefu.png";
export default {
  name: "banner",
  data() {
    return {
      vals: "", //slidebar li值
      value2: 0,
      isActive: false, //行业右侧显示隐藏
      isBrands: false, //品牌内容显示隐藏
      isShow: false, //品牌显示隐藏背景色
      lis: "", //nav li的val
      navLeft: [
        { isShow: false, text: "奶粉" },
        { isShow: false, text: "酒类" },
        { isShow: false, text: "食品" },
        { isShow: false, text: "美妆" },
        { isShow: false, text: "其它" },
        // { isShow: false, text: "其他" }
      ],
      list: [
        { src: imgurl },
        { src: imgurl },
        { src: imgurl },
        { src: imgurl }
      ],
      detailmsg: [
        // {
        //   Filepath: imgurl,
        //   title: "[定]Yvess 原汁机 柠檬橙子榨汁机1",
        //   subtitle: "明星产品 明星产品",
        //   price: "255"
        // },
        // {
        //   Filepath: imgurl,
        //   title: "[定]Yvess 原汁机 柠檬橙子榨汁机2",
        //   subtitle: "明星产品 明星产品",
        //   price: "255"
        // },
        // {
        //   Filepath: imgurl,
        //   title: "[定]Yvess 原汁机 柠檬橙子榨汁机3",
        //   subtitle: "明星产品 明星产品",
        //   price: "255"
        // },
        // {
        //   Filepath: imgurl,
        //   title: "[定]Yvess 原汁机 柠檬橙子榨汁机4",
        //   subtitle: "明星产品 明星产品",
        //   price: "255"
        // },
        // {
        //   Filepath: imgurl,
        //   title: "[定]Yvess 原汁机 柠檬橙子榨汁机5",
        //   subtitle: "明星产品 明星产品",
        //   price: "255"
        // },
        // {
        //   Filepath: imgurl,
        //   title: "[定]Yvess 原汁机 柠檬橙子榨汁机6",
        //   subtitle: "明星产品 明星产品",
        //   price: "255"
        // },
        // {
        //   Filepath: imgurl,
        //   title: "[定]Yvess 原汁机 柠檬橙子榨汁机7",
        //   subtitle: "明星产品 明星产品",
        //   price: "255"
        // },
        // {
        //   Filepath: imgurl,
        //   title: "[定]Yvess 原汁机 柠檬橙子榨汁机8",
        //   subtitle: "明星产品 明星产品",
        //   price: "255"
        // }
      ],
      brand: [
        { Filepath: imgurl, brandName: "卡地亚1" },
        { Filepath: imgurl, brandName: "卡地亚2" },
        { Filepath: imgurl, brandName: "卡地亚3" },
        { Filepath: imgurl, brandName: "卡地亚4" },
        { Filepath: imgurl, brandName: "卡地亚5" },
        { Filepath: imgurl, brandName: "卡地亚6" },
        { Filepath: imgurl, brandName: "卡地亚7" },
        { Filepath: imgurl, brandName: "卡地亚8" },
        { Filepath: imgurl, brandName: "卡地亚9" }
      ]
    };
  },
  watch: {
    vals: function(newval, oldval) {
      //监听左侧导航vals值 来请求不同商品
      // console.log(oldval+"----oldval;"+newval+"------newval");
      this.lis = newval;
    }
  },
  created(){
      this.initBanner(); 
  },
  methods: {
    initBanner() {
        // this.navLeftInit();
    },
    // navLeftInit() {
    //   // let obj='[["Status","Sort","StockSum","Sum","Num"],["1","0","1","10","1"]]';
    //   let obj = '[["UserAccount","Status"],["test001","0"]]';
    //   this.axios
    //     .post("/Mall/MallIndustryNameInfo", {
    //       SOURCE: "22",
    //       CREDENTIALS: "0",
    //       TERMINAL: "0",
    //       INDEX: "20170713170325",
    //       METHOD: "MallIndustryNameInfo",
    //       DATA: encodeURI(obj)
    //     })
    //     .then(
    //       response => {
    //         console.log("请求成功");
    //         console.log(response);
    //         let IndustryName=response.data.DATA[0].IndustryName;
    //         for(let i=0;i<IndustryName.length;i++){
    //             this.navLefts.push({isShow:false,industryName:IndustryName[i]});
    //         }
    //       },
    //       response => {
    //         console.log("请求失败");
    //         console.log(response);
    //       }
    //     );
    // },
    enter(val) {
      //nav li鼠标移入事件
      this.vals = val;
      this.isShow = false; //隐藏品牌背景色
      this.navLeft.forEach(item => (item.isShow = false));
      val.isShow = true; //当前背景色显示
      this.isBrands = false; //隐藏品牌内容
      this.isActive = true; //显示当前内容
      console.log(val);
      // if(this.detailmsg.length==0){
 //請求行業具體信息
       let obj = '[["Status","Sort","StockSum","IndustryNameOne","Sum","Num"],["1","0","0","'+val.text+'","1","9"]]';
       console.log(obj)
      this.axios.post("/Mall/MallCommodityInfo", {
          SOURCE: "22",
          CREDENTIALS: "0",
          TERMINAL: "0",
          INDEX: "20170713170325",
          METHOD: "MallCommodityInfo",
          DATA:encodeURI(obj)
        })
        .then(
          response => {
            // console.log(response)
            let data=response.data.DATA[0];
            // console.log(data.FilePath);
            this.detailmsg.length=0;
            for(let i=0,len=data.FilePath.length;i<len;i++){
                let FilePath=data.FilePath[i].split(',');
                FilePath=FilePath[0]+FilePath[1];
                this.detailmsg.push({
                title:data.CommodityName[i],
                FilePath:FilePath,
                BrandName:data.BrandName[i],
                price:data.SupplyMoney[i],
                AttributeGroup:data.AttributeGroup[i]
              })
            }
              
            
          },
          response => {
            console.log("请求失败");
            console.log(response);
          }
        );
      // }
     
    },
    leave() {
      // 隐藏行业和品牌内容，去除nav背景色
      this.isActive = false;
      this.isBrands = false;
      this.navLeft.forEach(item => (item.isShow = false));
      this.isShow = false;
    },
    brands() {
      //品牌li进入事件
      //隐藏 其他li背景色，隐藏其他li详情内容
      //显示品牌背景色和内容
      this.navLeft.forEach(item => (item.isShow = false));
      this.isActive = false;
      this.isBrands = true;
      this.isShow = true;
    },
    toBrands() {
      this.$router.push("nav/toBrands");
    },
    toGoodsDetail() {
      this.$router.push("nav/goodsdetail");
    }
  }
};
</script>
<style scoped>
.isorange {
  background: rgb(249, 113, 39);
}
#banner {
  width: 1200px;
  height: 460px;
  margin: 0 auto 45px;
  position: relative;
}
.banner-detail {
  width: 1080px;
  height: 460px;
  background: rgba(27, 91, 96, 0.6);
  position: absolute;
  top: 0;
  left: 120px;
  z-index: 999;
  padding: 30px 0 0 30px;
  display: none;
}
.active,
.brands {
  display: block;
}
#banner-nav {
  width: 120px;
  height: 460px;
  float: left;
  background: #233b3c;
}
.slidebar {
  width: 100%;
  height: 100%;
  color: #fff;
}
.slidebar li:first-of-type {
  margin-top: 24px;
}
.slidebar li {
  list-style: none;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  vertical-align: top;
  /* padding-left: 36px; */
}
.slidebar li:hover {
  background: rgb(249, 113, 39);
}

.slidebar li span {
  display: inline-block;
  margin-left: 16px;
}
#banner-swiper {
  width: 1080px;
  height: 460px;
  float: left;
  /* border: 1px solid red; */
}
/* 二级导航 */
.banner-detail > p {
  color: #fff;
  text-align: left;
  font-size: 14px;
}
.second-mnue {
  width: 100%;
}
.second-mnue li {
  width: 300px;
  height: 100px;
  float: left;
  margin: 20px 20px 0 0;
  list-style: none;
  text-align: left;
  background: #fff;
}
.second-mnue img {
  width: 100px;
  height: 100px;
  float: left;
}
.second-mnue .goods-detail {
  float: left;
  width: 200px;
  height: 100px;
  padding: 10px;
  border-left: 1px solid rgb(234, 234, 234);
}
.second-mnue h4 {
  font-size: 14px;
  text-indent: 14px;
  text-align: left;
}
.second-mnue p {
  color: #999;
}
.second-mnue .price {
  color: rgb(255, 32, 64);
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 800;
  margin: 10px 0 0 12px;
}
.brandName{
  margin: 6px 0 0 12px;
}
/* 品牌 */
.tab-title {
  text-align: left;
  width: 390px;
  font-size: 14px;
  color: #fff;
  margin-bottom: 20px;
}

.brand-tab ul {
  width: 390px;
  height: 360px;
}
.brand-tab li {
  width: 130px;
  height: 120px;
  float: left;
  color: #fff;
  list-style: none;
  text-align: center;
  font-size: 14px;
}
.brand-tab img {
  width: 80px;
  height: 80px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid transparent;
}
.brand-tab-left {
  margin-right: 120px;
}
.brand-tab-left,
.brand-tab-right {
  float: left;
  width: 390px;
}
.brand-tab a {
  color: #fff;
  float: right;
}
</style>


