<template>
    <div class="content">
        <div class="title">更换手机号码</div>
        <div class="bottom">
            <div class="change-content">
                <el-steps :active="active"  finish-status="success" :align-center="alignCenter">
                <el-step title="步骤 1" style="color:rgb(244,91,8)"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3"></el-step>
                </el-steps>
                <div class="num">
                    <label for="num">手机号码：</label>
                    <input type="text" id="num" placeholder="输入新的手机号码">
                </div>
                <div class="verification-code">
                    <label for="code">验证码：</label>
                    <input type="text" id="code" placeholder="短信验证码">
                    <a href="" class="send-code">发送验证码</a>
                    <span>60S后重发</span>
                </div>
                <button id="next" @click="toSuccess">下一步</button>
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
    name:'changePhonenumberSecond',
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
        toSuccess(){
            this.$router.push('changeSuccess')
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
}
.number{
    margin: 70px 0 30px;
    font-size: 14px;
}
.verification-code,.num{
    font-size: 14px;
    position: relative;
    margin-bottom: 86px;
}
.num{
    text-align: left;
    padding-left: 40px;
    margin:52px 0 26px 0; 
}
#code,.num>input{
    width: 260px;
    height: 42px;
    line-height: 42px;
    padding:0 10px;
    border: 1px solid rgb(221,221,221);
    color: #999;
    outline: none;
}
.send-code{
    color: rgb(244,91,8);
    position: absolute;
    top: 10px;
    right: 138px;
}
.verification-code span{
    color: #999;
}
#next{
    width: 160px;
    height: 40px;
    background:rgb(244,91,8);
    color: #fff;
    border: 1px solid rgb(244,91,8);
    outline: none;
}
.el-step__main .is-success{
    color: rgb(244,91,8);
}
</style>
