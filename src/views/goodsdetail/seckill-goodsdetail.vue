<template>
    <div id="content">
        <div class="detail-top">
            <div id="header">
                <ul>
                    <li> <router-link to="/">首页</router-link>&gt;</li>
                    <li><router-link to="toBrands">品牌</router-link>&gt;</li>
                    <li><router-link to="toBrandDetail">耐克</router-link>&gt;</li>
                    <li>耐克NIKE BENASSI SOLARSOFT</li>
                </ul>
            </div>
            <!-- 商品详情左侧-->
            <div class="goodschoose">
                <div class="leftside">
                    <div class="imgbox">
                        <div class="bigbox">
                            <img :src="bigImg" alt="" style="width:100%;height:100%;">
                        </div>
                        <div class="minibox">
                            <ul>
                                <li @mouseenter="enter(item)" v-for="item in imglist" :key="item.key">
                                    <img :src="item.src" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 收藏 -->
                    <div class="collocation">
                        <span>
                            <img @click="changeHeart()" :src="heart" alt="" style="width:20px;height:20px;"> 收藏商品
                        </span>
                        <span style="margin-left:38px;">
                            <img @click="toBrandDetail" src="../../assets/common/detail-home.png" alt="" style="width:20px;height:20px;"> 品牌主页
                        </span>
                    </div>
                </div>

                <!-- 商品详情右侧 -->
                <div class="rightside">
                    <div class="title">我们都有一个家名字叫中国，兄弟姐妹都很多我们都有一个家名字叫中国，兄弟姐妹都很多我们都有一个家名字叫中国，兄弟姐妹都很多</div>
                    <div class="subtitle">[官方授权，正品保障] 超值预售火热进行中</div>
                    <!-- 中间图文部分 -->
                    <div class="textinfo">
                        <div class="seckill">
                            <div class="seckill-top">
                                <span class="seckill-text">限时秒杀</span>
                                <div class="endtime">
                                    <span class="end">距离结束：</span>
                                    <span class="timecontent">23</span>:
                                    <span class="timecontent">22</span>:
                                    <span class="timecontent">21</span>
                                </div>
                            </div>
                            <!-- 图文下 -->
                            <div class="seckill-bottom">
                                <div class="title clearfix">
                                    <img src="../../assets/common/medal.png" alt="" style="float:left;">
                                    <span class="ltitle">正品汇正品保障</span>
                                    <span class="rsearch">商品追溯-></span>
                                </div>
                                <div class="text-content">
                                    <div class="line">
                                        <span class="ptitle" style="margin-right:36px;">秒杀价</span>
                                        <span class="seckill-money">￥
                                            <span style="font-size:30px;">255.00</span>
                                        </span>
                                        <span class="oldermoney">￥298.00</span>
                                    </div>
                                    <div class="otherline">
                                        <span class="ptitle">运费</span>
                                        <span class="yunfei">运费10块</span>
                                    </div>
                                    <div class="otherline" style="margin-bottom:16px;">
                                        <span class="ptitle">服务</span>
                                        <span class="yunfei">无忧货到付款 正品汇正品认证</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 选择参数部分 -->
                    <div class="choose-params">
                        <div class="choose-color choose-line clearfix">
                            <span class="ptitle">选择颜色</span>
                            <ul class="clearfix">
                                <li v-for="item in chooseImgList" :key="item.key" @click="chooseColorClick(item)"><img :src="item.imgsrc" :class="{imggray:item.isgray,imgorange:item.isorange}" alt=""></li>
                            </ul>
                            
                        </div>
                        <div class="choose-size">
                            <span class="ptitle">选择尺码</span>
                            <ul class="sizefather">
                                <li :class="{sizecontent:item.isgray,size_orange:item.isorange}" v-for="item in chooleSizeList" :key="item.key" @click="chooseSizeClick(item)">{{item.label}}</li>
                            </ul>
                        </div>
                        <div class="mount-choose">
                            <span class="ptitle">选择数量</span>
                            <div class="input-number">
                                <el-input-number id="numbers" v-model="inputNumber" :min="1" label="描述文字"></el-input-number>
                            </div>
                        </div>
                        <!-- 按钮组 -->
                        <div class="btngroups">
                            <button class="addcart"><img src="../../assets/common/cart.png" alt=""> 加入购物车</button>
                            <button class="buying">立即购买</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 图文详情 -->
        <div class="bottom-bg">
            <div class="bottom-content">
                <!-- 图文详情主体 -->
                <div class="bcmain">
                    <div class="bcmain-header">
                        <div class="title">商品详情</div>
                        <div class="introduce">
                            <div class="brand-name">
                                <span class="intro-title">品牌</span>
                                <span class="intro-content">{{brandname}}</span>
                            </div>
                            <ul>
                                <li v-for="item in list" :key="item.key">
                                    <span class="intro-title">{{item.title}}</span>
                                    <span class="intro-content">{{item.content}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="gray"></div>
                    <!-- 图文详情左下 -->
                    <div class="bcbody">
                        <div class="bcbody-content">
                            <ul>
                                <li v-for="i in 5" :key="i.key"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 图文详情右侧 -->
                <div class="bcright">
                    <div class="bcright-header">
                        24小时热销榜
                    </div>
                    <div class="bcright-body">
                        <ul>
                            <li v-for="item in rightlist" :key="item.key" @click="toGoodsDetail">
                                <img :src="item.src" style="width:200px;height:200px;" alt="">
                                <h5>{{item.name}}</h5>
                                <h6>{{item.subtitle}}</h6>
                                <div>
                                    <span class="price">
                                        <span class="mlogo">¥</span> {{item.price}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import heart from '../../assets/common/detail_heart.png'
import redHeart from '../../assets/common/detail-redheart.png'
import imgurl from "../../assets/common/wechat.png";
import imgurl1 from "../../assets/common/weibo.png";
export default {
  name: "goodsdetail",
  components: {
    // imgurl
  },
  data() {
    return {
      brandname: "耐克(NIKE)",
      inputNumber: 1, //商品数量计数器
      chooleSizeList: [
        {
          label: 42,
          isgray: true,
          isorange: false
        },
        {
          label: 43,
          isgray: true,
          isorange: false
        },
        {
          label: 44,
          isgray: true,
          isorange: false
        }
      ],
      chooseImgList:[
          {imgsrc:imgurl,isgray:true,isorange:false},
          {imgsrc:imgurl,isgray:true,isorange:false}
      ],
      list: [
        {
          title: "店铺",
          content:
            "耐克(NIKE)福建莆田货222222222222222222222222222222222222222222222"
        },
        { title: "商品毛重", content: "1.0kg" },
        { title: "货号", content: "705475" },
        { title: "适用人群", content: "女士" },
        { title: "适用场景", content: "休闲" },
        { title: "适用场景", content: "休闲" },
        { title: "适用场景", content: "休闲" }
      ],
      rightlist: [
        {
          name: "pt950铂金钻石结婚对戒",
          subtitle: "预约赠限量巧克力",
          price: "2500",
          src: imgurl
        },
        {
          name: "pt950铂金钻石结婚对戒",
          subtitle: "预约赠限量巧克力",
          price: "2500",
          src: imgurl
        },
        {
          name: "pt950铂金钻石结婚对戒",
          subtitle: "预约赠限量巧克力",
          price: "2500",
          src: imgurl
        },
        {
          name: "pt950铂金钻石结婚对戒",
          subtitle: "预约赠限量巧克力",
          price: "2500",
          src: imgurl
        },
        {
          name: "pt950铂金钻石结婚对戒",
          subtitle: "预约赠限量巧克力",
          price: "2500",
          src: imgurl
        },
        {
          name: "pt950铂金钻石结婚对戒",
          subtitle: "预约赠限量巧克力",
          price: "2500",
          src: imgurl
        },
        {
          name: "pt950铂金钻石结婚对戒",
          subtitle: "预约赠限量巧克力",
          price: "2500",
          src: imgurl
        },
        {
          name: "pt950铂金钻石结婚对戒",
          subtitle: "预约赠限量巧克力",
          price: "2500",
          src: imgurl
        }
      ],
      bigImg: imgurl, //左侧大图src
      heart: heart, //收藏小心心图标src
      imglist: [
        { src: imgurl },
        { src: imgurl1 },
        { src: imgurl },
        { src: imgurl1 },
        { src: imgurl }
      ]
    };
  },
  methods: {
    enter(value) {
      //左侧点击换图片事件
      this.bigImg = value.src;
    },
    changeHeart() {
      //收藏事件
      if (this.heart == redHeart) {
        this.heart = heart;
      } else if (this.heart == heart) {
        this.heart = redHeart;
      }
    },
    chooseSizeClick(item) {
      //选择尺码
      _.forEach(this.chooleSizeList, e => {
        e.isgray = true;
        e.isorange = false;
      });
      item.isgray = false;
      item.isorange = true;
    },
    chooseColorClick(item){
        //选择颜色
         _.forEach(this.chooseImgList, e => {
        e.isgray = true;
        e.isorange = false;
      });
      item.isgray = false;
      item.isorange = true;
    },
    toBrandDetail(){
      this.$router.push('toBrandDetail')
    },
    toGoodsDetail(){
      this.$router.push('goodsdetail')
    }
  }
};
</script>
<style scoped>
.detail-top {
  width: 1200px;
  min-height: 687px;
  /* background: rgba(244,91,8,.1); */
  margin: 0 auto;
}
#header {
  width: 1200px;
  height: 50px;
  line-height: 50px;
  background: #fff;
}
#header ul {
  width: 1200px;
  height: 50px;
  font-size: 14px;
}
#header ul li {
  float: left;
  list-style: none;
}
.bottom-bg {
  width: 100%;
  background: #f2f2f2;
}
.bottom-bg:after {
  content: "";
  display: block;
  clear: both;
}
.bottom-content {
  width: 1200px;
  margin: 0 auto;
}
.bcmain {
  width: 900px;
  margin: 40px 40px 0 0;
  float: left;
  background: #fff;
  border-top: none;
}
.bcright {
  width: 260px;
  float: left;
  margin-top: 40px;
}
.bcmain-header {
  width: 900px;
  /* min-height: 300px; */
  background: #fff;
  border: 1px solid #e7e7e7;
}
.bcmain-header .title {
  width: 900;
  height: 44px;
  border-top: 3px solid #f45b08;
  text-align: center;
  line-height: 44px;
  background: #fff;

  /* 条纹背景 */
  /* -webkit-background-size: 50px 50px;
    -moz-background-size: 50px 50px;
    background-size: 50px 50px; /* 控制条纹的大小 */
  /*background-image: -webkit-gradient(linear, 0 0, 100% 100%,
                            color-stop(.25, rgba(255, 255, 255, .2)), color-stop(.25, transparent),
                            color-stop(.5, transparent), color-stop(.5, rgba(255, 255, 255, .2)),
                            color-stop(.75, rgba(255, 255, 255, .2)), color-stop(.75, transparent),
                            to(transparent));
    background-image: -moz-linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
                        transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
                        transparent 75%, transparent);
    background-image: -o-linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
                        transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
                        transparent 75%, transparent);
    background-image: linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
                        transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
                        transparent 75%, transparent); */
}
.introduce {
  width: 900;
  /* height: 256px; */
  padding: 30px 30px 36px;
  text-align: left;
}
.brand-name {
  width: 840;
  height: 36px;
  border-bottom: 1px dotted #e1e1e1;
}
.intro-title {
  display: inline-block;
  width: 68px;
  font-size: 14px;
  margin-right: 30px;
  height: 36px;
  line-height: 36px;
}
.intro-content {
  color: #999;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
}
.introduce ul:after {
  content: "";
  display: block;
  clear: both;
}
.introduce li {
  list-style: none;
  min-width: 418px;
  height: 36px;
  line-height: 36px;
  float: left;
}
.introduce ul {
  border-bottom: 1px dotted #e1e1e1;
  padding-bottom: 6px;
}
/* 图文详情左下 */
.bcbody {
  width: 900px;
  /* margin-top: 30px; */
  padding: 50px 24px 0;
  background: rgb(255, 255, 255);
  border: 1px solid #e7e7e7;
}

.gray {
  width: 900px;
  height: 30px;
  margin: 0 auto;
  background: #f2f2f2;
}
.bcbody-content {
  width: 100%;
  /* height: 100px; */
  /* border: 1px solid red; */
}
.bcbody-content ul {
  width: 100%;
  border-top: 1px solid #999;
}
.bcbody-content li {
  width: 100%;
  min-height: 200px;
  border: 1px solid yellow;
  border-top: none;
  list-style: none;
}
.bcbody-content:after {
  display: block;
  content: "";
  clear: both;
}
/* 图文详情右侧 */
.bcright {
  width: 260px;
}
.bcright-header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: #f45b08;
  color: #fff;
  font-size: 14px;
}
.bcright-body {
  width: 100%;
  padding: 15px 15px 0;
  background: #fff;
  border: 1px solid #e7e7e7;
}
.bcright-body ul {
  width: 100%;
}
.bcright-body li {
  width: 100%;
  height: 340px;
  border: 1px solid rgb(221,221,221);
  margin-bottom: 15px;
  list-style: none;
  padding: 15px 15px 0;
}
/* .bcright-body li img {
  border: 1px solid #999;
} */
.bcright-body li h5 {
  font-size: 16px;
  color: #333;
  margin: 15px 0 14px;
}
.bcright-body li h6 {
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
}
.bcright-body li div {
  color: #ff2040;
  font-size: 20px;
}
/* 选择商品信息 商品详情 */
.leftside {
  width: 558px;
  height: 496px;
  /* background: rgba(251,45,51,.1); */
  margin-bottom: 16px;
  float: left;
}
.bigbox {
  width: 460px;
  height: 460px;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  margin-bottom: 16px;
  float: left;
}
.minibox {
  float: left;
  width: 84px;
  height: 460px;
  margin-left: 14px;
}
.imgbox:after {
  content: "";
  display: block;
  clear: both;
}
.minibox ul {
  width: 100%;
  height: 100%;
}
.minibox li {
  width: 84px;
  height: 84px;
  margin-top: 10px;
  border: 1px solid #cdcdcd;
  list-style: none;
}
.minibox li:hover {
  border: 1px solid #f45f0f;
}
.minibox li:first-child {
  margin-top: 0;
}
.minibox li img {
  width: 100%;
  height: 100%;
}
/* 收藏 */
.collocation {
  width: 558px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  /* border: 1px solid red; */
  text-align: left;
}
.collocation span {
  display: inline-block;
  height: 20px;
  line-height: 20px;
}
.collocation img {
  margin-right: 12px;
  vertical-align: middle;
}
/* 商品详情右侧 */
.rightside {
  width: 642px;
  min-height: 200px;
  padding-left: 42px;
  /* background: #f45b08; */
  float: left;
  text-align: left;
}
.rightside .title {
  font-family: "MicrosoftYaHei-Bold";
  font-size: 21px;
  color: #362f27;
  text-align: left;
}
.rightside .subtitle {
  margin: 16px 0 30px;
  color: #a9a9a9;
  font-size: 14px;
}
.textinfo {
  width: 100%;
  min-height: 220px;
  background: #f5f5f5;
}
/* 选择参数 */
.choose-params {
  width: 100%;
  padding: 28px 0 30px 14px;
}
.choose-color ul{
    float: left;
}
.choose-color li{
    float: left;
    list-style: none;
}
.choose-color .imggray {
  width: 60px;
  height: 60px;
  line-height: 60px;
  margin-right: 16px;
  vertical-align: middle;
  border: 1px solid #999;
}
.choose-color .imgorange{
  width: 60px;
  height: 60px;
  line-height: 60px;
  margin-right: 16px;
  vertical-align: middle;
  border: 1px solid rgb(244, 91, 8)
}
.choose-line {
  margin-bottom: 28px;
  line-height: 60px;
}
.ptitle {
  font-size: 14px;
  margin-right: 16px;
  float: left;
}
.sizecontent {
  display: inline-block;
  width: 80px;
  height: 34px;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 34px;
  margin: 0 16px 16px 0;
}
.size_orange {
  display: inline-block;
  width: 80px;
  height: 34px;
  text-align: center;
  line-height: 34px;
  margin: 0 16px 16px 0;
  border: 1px solid rgba(244, 91, 8);
}
.sizefather {
  width: 502px;
  float: left;
}
.choose-size:after {
  content: "";
  display: block;
  clear: both;
}
/* 计数器 */
.mount-choose {
  margin-top: 12px;
  margin-bottom: 40px;
  height: 34px;
  line-height: 34px;
}
.input-number {
  height: 34px;
}
#numbers {
  width: 140px;
  height: 34px;
}
.el-input_inner {
  height: 34px;
  line-height: 34px;
}
.el-input-number__decrease,
.el-input-number__increase {
  background: #fff;
  color: rgb(76, 70, 64);
}
/* 按钮组 */
.btngroups button {
  width: 160px;
  height: 50px;
  border: 1px solid rgb(244, 91, 8);
  background: #fff;
  color: rgb(244, 91, 8);
  position: relative;
  font-size: 14px;
}
.btngroups button img{
  position: absolute;
  top: 10px;
  left: 12px;
}
.btngroups .addcart {
  background: rgb(244, 91, 8);
  color: #fff;
  margin-right: 24px;
}
.goodschoose:after {
  content: "";
  display: block;
  clear: both;
}
/* 秒杀图文详情 */
.seckill-top {
  width: 600px;
  height: 44px;
  background: rgb(251, 41, 51);
  color: #fff;
  padding: 0 14px;
}
.seckill-text {
  float: left;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  line-height: 44px;
}
.endtime {
  float: right;
  height: 44px;
  line-height: 44px;
}
.end {
  font-size: 14px;
  color: #fff;
}
.timecontent {
  display: inline-block;
  width: 28px;
  height: 28px;
  /* transform: translateY(8px); */
  background: rgb(54, 47, 39);
  color: #fff;
  line-height: 28px;
  margin-top: 8px;
  text-align: center;
  margin-right: 1px;
}
.seckill-bottom {
  width: 100%;
  height: 36px;
  padding: 0 14px;
  line-height: 36px;
  background: linear-gradient(left, rgb(244, 93, 8), rgb(251, 221, 29));
}
/* .seckill-bottom .title {
  margin-bottom: 16px;
} */
.ltitle {
  display: inline-block;
  font-size: 14px;
  color: #fff;
  margin-left: 12px;
}
.rsearch {
  font-size: 14px;
  float: right;
}
.line {
  height: 30px;
  line-height: 30px;
  margin-bottom: 14px;
}
.seckill-money {
  font-size: 14px;
  color: rgb(251, 41, 51);
  display: inline-block;
  margin: 0 24px 0 0;
  font-weight: bold;
}
.oldermoney {
  font-size: 16px;
  text-decoration: line-through;
  color: #999;
}
.otherline .ptitle {
  width: 66px;
  height: 36px;
  text-align: left;
  height: 36px;
  font-size: 14px;
}
.yunfei {
  display: inline-block;
  height: 36px;
  font-size: 14px;
  line-height: 36px;
}
#header a{
  color: #333;
}
#header a:hover{
  color: #333;
}
</style>



