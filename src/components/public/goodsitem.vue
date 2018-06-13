<template>
    <div class="item-content" @click="toGoodsDetail">
        <img :src="itemParams.src" style="width:200px;height:200px;" alt="">
        <h5>{{itemParams.title}}</h5>
        <h6>{{itemParams.subtitle}}</h6>
        <div>
            <span class="price"><span class="mlogo">¥</span> {{itemParams.price}}</span>
        </div>
    </div>
</template>
<script>
import imgurl from '../../assets/common/logo.png'
export default {
  name: "goodsItem",
  props: ['itemParams'],
  data() {
    return {
        item:{src:imgurl,title:'多热烈的白羊',subtitle:'小毛驴',price:'12345'}
    };
  },
  methods:{
      toGoodsDetail(){
          this.$router.push('goodsDetail')
      }
  }
};
</script>
<style scoped>
.item-content{
    width: 230px;
    height: 340px;
    background: #fff;
    padding: 15px 15px 0;
    border: 1px solid rgb(221,221,221);
    margin-bottom: 12px;
}
.item-content img{
    border: 1px solid #999;
}
.item-content h5{
    font-size: 14px; 
    color: #333;
    margin: 15px 0 0;
}
.item-content h6{
    font-size: 14px;
    color: #999;
    margin-bottom: 5px;
    font-weight: 400;
}
.price{
    color: #ff2040;
    font-size: 20px;
}
</style>

