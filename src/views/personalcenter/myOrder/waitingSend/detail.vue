<template>
    <div class="content">
        <div>
            <!-- <innerTitle :none="none" :statusMsg="statusMsg"></innerTitle> -->
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
                    <button @click="toAfterSale">申请售后</button>
                </div>
            </div>
        </div>
        <div class="bottom">
            <innerBottom></innerBottom>
        </div>
    </div>
</template>
<script>
// import innerTitle from '../../../../components/myOrder/innerTitle.vue'
import imgUrl from '../../../../assets/common/waitingSend.png'
import innerBottom from '../../../../components/myOrder/innerBottom.vue'
export default {
    name:'waitingSend',
    components:{
        // innerTitle,
        innerBottom
    },
    data(){
        return{
            none:false,//是否不显示售后按钮
            statusMsg:'等待发货',
            imgUrl:imgUrl
        }
    },
    methods:{
        toAfterSale(){
            this.$router.push('applyForAfterSales')
        }
    }
}
</script>
<style scoped>
/* .title-content{
    width: 990px;
    height: 100px;
    margin-bottom: 24px;
} */
.title-content{
    width: 990px;
    height: 100px;
    padding:20px 30px;
    background: #fff;
    position: relative;
    margin-bottom:22px ;
    border:1px solid rgb(221,221,221)
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


