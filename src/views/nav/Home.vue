<template>
    <div id='index-content'>
       <banner></banner>
       <!-- <brandingbusiness></brandingbusiness> -->
       <service></service>
       <seckill id='seckill'></seckill>
       <newgoods></newgoods>
       <common-list :common="commonname1" id='c_1'></common-list>
       <common-list :common="commonname2" id='c_2'></common-list>
       <common-list :common="commonname3" id='c_3'></common-list>
       <common-list :common="commonname4" id='c_4'></common-list>
       <common-list :common="commonname5" id='c_5'></common-list>
       <!-- <common-list :common="commonname6" id='c_6'></common-list> -->
        <!-- 右下角工具条 -->
        <div id='toolbar' :class="{isshow:isshow}" >
          <a  href="#index-header" class="toolbar-item">
            <img src="../../assets/common/return.png" alt="">
            <p>TOP</p>
          </a>
           <a  href="#index-header" class="toolbar-item toolbar-item-2">
            <img src="../../assets/index/index_downloadApp.png" alt="">
            <p>APP下载</p>
          </a>
           <a  href="#index-header" class="toolbar-item toolbar-item-2">
            <img src="../../assets/index/index_kefu.png" alt="">
            <p>联系客服</p>
          </a>
        </div>
        <!-- 左侧工具条 -->
        <div class="left-toolbar clearfix">
          <a href="#seckill">秒杀专区
            <img src="../../assets/index/nav-header.png" alt="">
          </a>
          <a :href="item.jump" v-for="item in list" :key="item.key">{{item.text}}</a>
        </div>
    </div> 
</template>
<script>
// import headers from '../common/headers'
// import footers from '../common/footers'
import brandingbusiness from 'components/index/brandingbusiness'
import service from 'components/index/service'
import seckill from 'components/index/seckill'
import newgoods from 'components/index/newgoods'
import commonList from 'components/index/commonList'
import banner from 'components/index/banner'

// 奶粉
import milkBanner from '../../assets/brandimg/milkpowder/banner.jpg'
import milkTop from '../../assets/brandimg/milkpowder/top.jpg'
import milkBottom from '../../assets/brandimg/milkpowder/bottom.jpg'
// 酒类
import wineBanner from '../../assets/brandimg/wine/banner.jpg'
import wineTop from '../../assets/brandimg/wine/top.jpg'
import wineBottom from '../../assets/brandimg/wine/bottom.jpg'
// 食品
import foodBanner from '../../assets/brandimg/foods/banner.jpg'
import foodTop from '../../assets/brandimg/foods/top.jpg'
import foodBottom from '../../assets/brandimg/foods/bottom.jpg'
// 美妆
import beautyBanner from '../../assets/brandimg/beauty/banner.jpg'
import beautyTop from '../../assets/brandimg/beauty/top.jpg'
import beautyBottom from '../../assets/brandimg/beauty/bottom.jpg'
//珠宝
import jewelryBanner from '../../assets/brandimg/jewelry/banner.jpg'
import jewelryTop from '../../assets/brandimg/jewelry/top.jpg'
import jewelryBottom from '../../assets/brandimg/jewelry/bottom.jpg'

export default {
    name:"index",
    components:{
        brandingbusiness,
        service,
        seckill,
        newgoods,
        commonList,
        banner
    },
    // props:[commonname],
    mounted(){},
    data(){
        return{
            commonname1:{brand:'奶粉',list:['1段','2段','3段','4段'],imgGroup:{banner:milkBanner,top:milkTop,bottom:milkBottom}},
            commonname2:{brand:'酒类',imgGroup:{banner:wineBanner,top:wineTop,bottom:wineBottom},list:['白酒','红酒','黄酒','保健酒','啤酒']},
            commonname3:{brand:'食品',imgGroup:{banner:foodBanner,top:foodTop,bottom:foodBottom},list:['休闲零食','坚果炒货','肉干熟食','蜜饯果干','茶叶','饼干糕点','进口食品','有机食品','保健食品','粮油速食']},
            commonname4:{brand:'美妆',imgGroup:{banner:beautyBanner,top:beautyTop,bottom:beautyBottom},list:['面部护肤','身体护理','美容护肤','口腔护理','彩妆香水','男士护理','洗发护发']},
            commonname5:{brand:'珠宝',imgGroup:{banner:jewelryBanner,top:jewelryTop,bottom:jewelryBottom},list:['手链','戒指','吊坠','情侣对','项链','套链','手镯','脚镯']},
            // commonname6:{brand:'其它',imgGroup:{banner:milkBanner,top:milkTop,bottom:milkBottom},list:['其它']},
            commonList:[
                {}
            ],
            isshow:false,//工具条是否显示
            list:[
            {text:'奶粉',jump:'#c_1'},
            {text:'酒类',jump:'#c_2'},
            {text:'食品',jump:'#c_3'},
            {text:'美妆',jump:'#c_4'},
            {text:'珠宝',jump:'#c_5'},
            // {text:'其它',jump:'#c_6'},
        ]
        }
    },
    mounted(){
      // if(this.handleScroll){
        window.addEventListener('scroll', this.handleScroll)
      // }
    },
    destroyed(){
      window.removeEventListener('scroll',this.handleScroll)
    },
    methods:{
         handleScroll () {
                  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                  var offsetTop = document.querySelector('#toolbar').offsetTop
                  // console.log(`scrollTop----->${scrollTop}`)
                  // console.log(`offsetTop----->${offsetTop}`)
                  if (scrollTop>1000) {
                    this.isshow=true;
                    // confirm("111")
                  }else{
                    this.isshow=false;
                  }
        },
    }
}
</script>
<style scoped>
#index-content{
  position: relative;
}
#toolbar{
  width: 80px;
  height: 240px;
  /* border: 1px solid rgb(221,221,221); */
  /* display: none; */
  opacity: 0;
  position: fixed;
  top: 300px;
  right: 1px;
  z-index: 99999;
}
.isshow{
  /* display: block !important; */
  opacity: 1 !important;
}
.toolbar-item{
  display: block;
  width: 100%;
  height: 80px;
  padding-top: 17px;
  font-size: 14px;
  /* border: 1px solid rgb(221,221,221); */
  border-top: none;
}
/* #toolbar .toolbar-item:first-child{
  background: rgb(244,91,8);
  color: #fff;
  font-weight: bold;
  border: none;
} */
#toolbar .toolbar-item{
  background: rgb(244,91,8);
  color: #fff;
  font-weight: bold;
  /* border: 1px solid #999; */
}
#toolbar .toolbar-item-2{
  background: #fff;
  color: #999;
  border: 1px solid #999;
  border-top: none;
}
/* 左侧工具条 */
.left-toolbar{
  width: 80px;
  /* min-height:300px; */
  border: 2px solid rgb(244,91,8);
  border-radius: 8px;
  position: fixed;
  top: 300px;
  left: 16px;
}
.left-toolbar a{
  display: block;
  width: 100%;
  height: 36px;
  line-height: 36px;
  border-bottom: 1px dashed rgb(244,91,8);
  float: left;
  font-size: 14px;
  color: #333;
}
.left-toolbar a:hover{
  color: #333;
}
.left-toolbar a:first-child,.left-toolbar a:last-child{
  height: 64px;
}
.left-toolbar a:last-child{
  border: none;
}
.left-toolbar a:first-child{
  line-height: 96px;
  position: relative;
}
.left-toolbar a:first-child img{
  position: absolute;
  top: -60px;
  left: -34px;
}
  
</style>

