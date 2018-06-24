<template>
    <div id='index-content'>
        <headers id='index-header'></headers>
        <router-view></router-view>
        <footers></footers>
       
    </div>
</template>

<script>

import Headers from 'components/public/headers'
import Footers from 'components/public/footers'
import rightToolbar from 'components/public/rightToolbar'
export default {
  data() {
    return {
      isshow:false,//工具条是否显示
      list:[
        {text:'秒杀专区',jump:'1'},
        {text:'秒杀专区',jump:'1'},
        {text:'秒杀专区',jump:'1'},
        {text:'秒杀专区',jump:'1'},
        {text:'秒杀专区',jump:'1'},
        {text:'秒杀专区',jump:'1'},
      ]
    };
  },
  components: {
    Headers,
    Footers,
    rightToolbar
  },
  mounted(){
    // window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll () {
                  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                  var offsetTop = document.querySelector('#toolbar').offsetTop
                  console.log(`scrollTop----->${scrollTop}`)
                  console.log(`offsetTop----->${offsetTop}`)
                  if (scrollTop>1000) {
                    this.isshow=true;
                    // confirm("111")
                  }else{
                    this.isshow=false;
                  }
        }
  },
};
</script>

<style scoped>
#index-content{
  position: relative;
}
#toolbar{
  width: 80px;
  height: 240px;
  /* border: 1px solid rgb(221,221,221); */
  display: none;
  position: fixed;
  top: 300px;
  right: 1px;
  z-index: 99999;
}
.isshow{
  display: block !important;
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
