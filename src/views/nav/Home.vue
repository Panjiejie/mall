<template>
    <div id='index-content'>
       <banner></banner>
       <!-- <brandingbusiness></brandingbusiness> -->
       <service></service>
       <seckill id='seckill'></seckill>
       <newgoods></newgoods>
       <common-list :commonname="commonname1" id='c_1'></common-list>
       <common-list :commonname="commonname2" id='c_2'></common-list>
       <common-list :commonname="commonname3" id='c_3'></common-list>
       <common-list :commonname="commonname4" id='c_4'></common-list>
       <common-list :commonname="commonname5" id='c_5'></common-list>
        <!-- 右下角工具条 -->
        <div id='toolbar' :class="{isshow:isshow}" >
          <a  href="#index-header" class="toolbar-item">
            <img src="../../assets/common/return.png" alt="">
            <p>TOP</p>
          </a>
           <a  href="#index-header" class="toolbar-item">
            <img src="../../assets/common/return.png" alt="">
            <p>TOP</p>
          </a>
           <a  href="#index-header" class="toolbar-item">
            <img src="../../assets/common/return.png" alt="">
            <p>TOP</p>
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
            commonname1:"奶粉",
            commonname2:"酒类",
            commonname3:"食品",
            commonname4:"美妆",
            commonname5:"其它",
            commonList:[
                {}
            ],
            isshow:false,//工具条是否显示
            list:[
            {text:'奶粉',jump:'#c_1'},
            {text:'酒类',jump:'#c_2'},
            {text:'食品',jump:'#c_3'},
            {text:'美妆',jump:'#c_4'},
            {text:'其它',jump:'#c_5'},
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
  border: 1px solid rgb(221,221,221);
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
  border: none;
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

