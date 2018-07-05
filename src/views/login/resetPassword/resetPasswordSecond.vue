<template>
    <div id='reset-content'>
        <div class="reset-line clearfix">
            <span class="tips">用户名称:</span>
            <div class="reset-line-right">
                <input type="text" v-model='UserAccount' disabled>
            </div>
        </div>
        <div class="reset-line clearfix">
            <span class="tips">手机号码:</span>
            <div class="reset-line-right">
                <input type="text" v-model='phoneNum' disabled>
            </div>
        </div>
        <div class="reset-line clearfix">
            <span class="tips">验证码</span>
            <div class="reset-line-right">
                <input type="text" v-model='verificationCode' placeholder="短信验证码"  >
                <a class="btn" @click="sendVerificationCode">发送验证码</a>
            </div>
        </div>
        <div class="reset-line clear">
            <span class="notips">1</span>
            <div class="reset-line-right">
                <button @click="toThird">下一步</button>
            </div>
        </div>
    </div>
</template>
<script>
import {bus} from '../../../bus.js'
export default {
    name:'resetPasswordSecond',
    data(){
        return{
            UserAccount:'',
            phoneNum:'',
            verificationCode:''
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.UserAccount=localStorage.getItem('resetUserName');
            this.requestPhoneNum();
        },
        requestPhoneNum(){
            this.axios.post("/UserPassword/MallUserMobile", {
            SOURCE: "22",
            CREDENTIALS: "0",
            TERMINAL: "0",
            INDEX: "20170713170325",
            METHOD: "MallUserMobile",
            UserAccount:this.UserAccount,
            })
            .then(
            response => {
                if(response.data.DATA[0]=='1'){
                    this.phoneNum=response.data.UserMobile;
                }
            },
            response => {
                console.log("请求失败");
                console.log(response);
            }
            );
        },
        sendVerificationCode(){
            this.axios.post("/UserInfo/ProvingAccout", {
            SOURCE: "22",
            CREDENTIALS: "0",
            TERMINAL: "0",
            INDEX: "20170713170325",
            METHOD: "AccountProving",
            UserAccount:this.UserAccount,
            UserMobile:this.phoneNum
            })
            .then(
            response => {
                if(response.data.DATA[0].result=='true'){
                    this.$message({
                        message:'验证码已发送，请注意查收！',
                        type:'success'
                    })
                }
            },
            response => {
                console.log("请求失败");
                console.log(response);
            }
            );
        },
        validateVerification(){
             this.axios.post("/Code/VerifyAuthCode", {
            SOURCE: "22",
            CREDENTIALS: "0",
            TERMINAL: "0",
            INDEX: "20170713170325",
            METHOD: "VerifyAuthCode",
            VerificationCode:this.verificationCode,
            UserMobile:this.phoneNum
            })
            .then(
            response => {
                if(response.data.DATA[0].Code=='1'){
                    this.$router.push('resetPasswordThird');
                }
            },
            response => {
                console.log("请求失败");
                console.log(response);
            }
            );
        },
        toThird(){
            this.validateVerification();
            // this.$router.push('resetPasswordThird');
        }
    },
    mounted(){
            bus.$emit('changeSteps', 2);

    },
}
</script>
<style lang="less" scoped>

#reset-content{
    width: 100%;
    min-height:500px;
    padding-top: 80px;
    font-size: 14px;
    // background: yellowgreen;
    .reset-line{
        width: 100%;
        height: 70px;
        line-height: 70px;
        .tips,.notips{
            float: left;
            // display: inline-block;
            padding-right: 20px;
            width: 36%;
            text-align: right
        }
        .notips{
            opacity: 0;
        }
        .reset-line-right{
            float: left;
            width: 50%;
            position: relative;
            input{
                    width: 400px;
                    height: 50px;
                    line-height: 50px;
                    border: 1px solid rgb(221,221,221);
                    outline: none;
                    padding-left: 20px;
                    float: left;
                    position: relative;
                    top: 10px;
                }
            button{
                float: left;
                width: 400px;
                height: 50px;
                line-height: 50px;
                background: rgb(241,92,8);
                color: #fff;
                font-size: 14px;
                text-align: center;
                border: 1px solid rgb(241,92,8);
                outline: none;
            }
            span{
                float: left;
            }
            .btn{
                position: relative;
                left: -140px;
                color: rgb(241,92,8);
            }
        }
        
    }
}
</style>

