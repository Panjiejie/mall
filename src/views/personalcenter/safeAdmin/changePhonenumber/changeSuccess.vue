<template>
    <div class="content">
        <div class="title">更换手机号码</div>
        <div class="bottom">
            <div class="change-content">
                <div class="img-content">
                    <img src="../../../../assets/index/circle_success.png" style="margin-top:78px;" alt="">   
                </div>
                <h3>手机号码更换成功</h3>
                <div class="subtitle">
                    您可以在下次使用新号码进行登录
                </div>
                <button id="return" @click="toIndex">返回</button>
            </div>
             <!-- 安全服务提示 -->
            <div class="safewarn">
                <h5>安全服务提示</h5>
                <ul>
                    <li>安全服务提示安全服务提示安全服务提示安全服务提示</li>
                    <li>安全服务提示安全服务提示安全服务提示安全服务提示</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'changeSuccess',
    data(){
        return{
            active:1,
            // space:200,
            alignCenter:true,
            form:{
                name:''
            }
        }
    },
    methods:{
        toIndex(){
            this.$router.push('safeAdmin')
        }
    }
}
</script>
<style scoped>
/* 安全提示 */
.safewarn{
    margin: 22px 0 0;
    width: 910px;
    min-height: 124px;
    padding: 30px;
    background: #f2f2f2;
    text-align: left;
}
.safewarn h5{
    font-size: 14px;
}
.safewarn li{
    height: 24px;
    line-height: 24px;
    color: #999;
    margin-left: 20px;
}

.content{
    background: #fff;
    padding: 40px;
}
.title{
    width: 910px;
    height: 28px;
    vertical-align: top;
    border-bottom: 1px solid rgb(221,221,221);
    text-align: left;
    font-size: 14px;
}
.bottom{
    width: 910px;
    height: 605px;
    /* background: yellowgreen; */
    padding-top:16px;
}
.change-content{
    width: 502px;
    height: 442px;
    margin: 0 auto;
    font-size: 14px;
}
.img-content{
    width: 502px;
    height: 184px;
    line-height: 184px;
}
h3{
    font-weight: 400;
    height: 34px;
    line-height:34px; 
}
.subtitle{
    font-size: 12px;
    color: #999;
    margin-bottom: 40px;
    /* height: 28px;
    line-height: 28px; */
}
#return{
    width: 160px;
    height: 40px;
    background:rgb(244,91,8);
    color: #fff;
    border: 1px solid rgb(244,91,8);
    outline: none;
}
</style>
