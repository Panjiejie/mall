<template>
    <div class="content">
        <div class="title-content">
            <div class="imgcontent">
                <img :src="imgUrl" alt=""> 
                <p>等待发货</p>  
            </div>
            <div class="infoscontent">
                <div class="info">
                    <span class="title">订单编号：</span>622326482494
                </div>
                <div class="info">
                    <span class="title">订单编号：</span>622326482494
                </div>
            </div>
            <button>申请售后</button>
        </div>
    </div>
</template>
<script>
import imgUrl from '../../assets/common/logo.png'
export default {
    name:'innerTitle',
    data(){
        return{
            imgUrl:imgUrl
        }
    },

}
</script>
<style scoped>
.title-content{
    width: 990px;
    height: 100px;
    padding:20px 30px;
    background: #fff;
    position: relative;
    /* margin-bottom:22px ; */
}
.imgcontent{
    float: left;
    width: 60px;
    height: 100px;
}
img{
    width: 30px;
    height: 30px;
}
p{
    color: rgb(244,91,8);
    font-size: 14px;
}
.infoscontent{
    width: 410px;
    height: 100px;
    color: black;
    float: left;
    text-align: left;
    margin-left: 100px;
}
.title{
    color: #999;
    font-size: 12px;
}
button{
    width: 90px;
    height: 36px;
    background: transparent;
    border: 1px solid #ff2040;
    color: #ff2040;
    position: absolute;
    top: 32px;
    right: 30px;
}
.info{
    height: 30px;
    line-height: 30px;
}
</style>


