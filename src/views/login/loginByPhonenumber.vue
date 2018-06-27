<template>
    <div id="content">
        <h3>用户登录</h3>
        <div class="form-item">
            <label for="#phonenumber">手机号码:</label>
            <input type="text" id='phonenumber' placeholder="请输入手机号码" v-model="UserMobile">
        </div>
        <div class="form-item">
            <label for="#verification-code" style="position:relative;left:50px;">验证码：</label>
            <input type="text" id='verification-code' placeholder="请输入验证码" style="position:relative;left:40px;" v-model="verificationCode">
            <a @click="sendVerificationCode">发送验证码</a>
        </div>
        <div class="errInfo" :class="{isshow:isshow}" style='opacity:0;'>验证码错误</div>
        <button @click="toHome">登录</button>
        <p class="clearfix">
            <router-link to="register/registerIndex">新用户注册</router-link>
        </p>
        <div class="otherway">
            <span class="line"></span>
            <span>其他方式登录</span>
            <span class="line"></span>
            <p><router-link to="loginPassword">账号密码登录</router-link></p>
        </div>
    </div>
</template>

<script>
 export default {
   name:'loginByPhonenumber',
   components:{
   },
   data() {
     return {
         UserMobile:'',
         verificationCode:'',
         isshow:false,
     }

   },
   methods:{
       sendVerificationCode(){//发送验证码
            // let obj = '[["UserAccount","UserPasswd","UserMobile","PayPasswd"],["'+this.userInfo.UserAccount+'","'+this.userInfo.UserPasswd+'","'+this.userInfo.UserMobile+'","'+this.password+'"]]';
                //    console.log(obj)
                   
                   this.axios.post("/UserLogin/SendLoginSMS", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "SendLoginSMS",
                    LoginUser:'2',
                    UserMobile:this.UserMobile,
                    })
                    .then(
                    response => {
                        console.log(response)
                        if(response.data.RETURNCODE=='200'){
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
       toHome(){
                this.axios.post("/UserLogin/MobileLogin", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "MobileLogin",
                    LoginUser:'2',
                    UserMobile:this.UserMobile,
                    Verification:this.verificationCode
                    })
                    .then(
                    response => {
                        console.log(response)
                        if(response.data.DATA[0].Code=='1'){
                            localStorage.setItem('UserAccount',response.data.DATA[0].UserAccount);
                            localStorage.setItem('UserMobile',response.data.DATA[0].UserMobile);
                            localStorage.setItem('UserAvatar',response.data.DATA[0].UserAvatar);
                               this.$router.push('/')
                        }else{
                            this.isshow=true;
                        }
                       
                     },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        
       }
   },
   components: {

   }
 }
</script>

<style scoped lang='less'>
#content{
    width: 1200px;
    min-height: 600px;
    // height: 100%;
    margin: 20px auto ;
    background: #fff;
    // background: blueviolet;
    .isshow{
        opacity: 0 !important;
    }
    h3{
        font-size: 18px;
        color: #999;
        line-height: 40px;
        padding-top: 100px;
        width: 600px;
        text-align: center;
        padding-left: 56px;
        margin: 0 auto;
    }
    .errInfo{
        height: 40px;
        line-height: 40px;
        width: 600px;
        margin: 0 auto;
        text-align: left;
        padding-left: 156px;
        font-size: 14px;
        color: #ff2040;
    }
    .form-item{
        width: 600px;
        margin: 0 auto;
        line-height: 30px;
        height: 60px;
        padding-top: 10px;
        font-size: 14px;
        label{
            display: inline-block;
            color: rgb(241,94,8);
            height: 40px;
            line-height: 40px;
            font-size: 14px;
        }
        input{
            width: 400px;
            height: 40px;
            line-height: 40px;
            padding-left: 20px;
            border: 1px solid rgb(221,221,221);
            margin-left: 20px;
            outline: none;
        }
        a{
            position: relative;
            left: -50px;
            color: rgb(241,94,8);
        }
        a:hover{
            color: rgb(241,94,8);
        }
    }
    button{
        width: 400px;
        height: 40px;
        line-height: 40px;
        background: rgb(241,94,8);
        color: #fff;
        font-size: 14px;
        border: 1px solid rgb(241,94,8);
        outline: none;
        position: relative;
        left: 34px;
    }
    p{
        width: 600px;
        margin: 20px auto 0;
        color: rgb(241,94,8);
        font-size: 14px;
        // background: blue;
        padding:   0 84px 0 156px;
        line-height: 40px;
        text-align: left;
        a{
            float: right;
            color: rgb(241,94,8)
        }
        a:hover{
            color: rgb(241,94,8);
        }
    }
    .otherway {
        margin-top: 30px;
        position: relative;
        left: 32px;
        p{
        text-align: center;
        padding: 0;
            a{
                float: none;
            }
        }
        .line{
            width: 142px;
            height: 0;
            border-bottom: 1px solid #999;
            display: inline-block;
            position: relative;
            bottom: 6px;
            margin: 0 14px;
        }
        span{
            font-size: 14px;
            color: #999;
        }
    }
}
</style>
