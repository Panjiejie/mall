<template>
    <div id="content">
        <h3>用户登录</h3>
        <div class="form-item">
            <label for="#username">用户名:</label>
            <input type="text" id='username' placeholder="请输入用户名" v-model="username">
        </div>
        <div class="form-item">
            <label for="#password">密码：</label>
            <input type="password" id='password' placeholder="请输入密码" v-model="password">
        </div>
        <div class="errInfo" :class="{isshow:isshow}">用户名称或密码错误</div>
        <button @click="login($event)">登录</button>
        <p>
            <span @click="resetPassword" style='cursor:pointer'>忘记密码？</span>
            <router-link to="register/registerIndex">新用户注册</router-link>
        </p>
        <div class="otherway">
            <span class="line"></span>
            <span>其他方式登录</span>
            <span class="line"></span>
            <p> <router-link to="loginByPhonenumber">手机验证码登录</router-link></p>
        </div>
    </div>
</template>

<script>
 export default {
   name:'loginPassword',
   components:{
   },
   data() {
     return {
         username:'',
         password:'',
         isshow:false,
     }

   },
   methods:{
       resetPassword(){
           this.$router.push('resetPassword')
            // let obj = '[["UserAccount","UserPasswd","UserMobile","PayPasswd"],["'+this.userInfo.UserAccount+'","'+this.userInfo.UserPasswd+'","'+this.userInfo.UserMobile+'","'+this.password+'"]]';
            //  console.log(obj)
                  
       },
       login(e){
           e.preventDefault();
            
                   this.axios.post("/UserLogin/UserLogin", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "0",
                    INDEX: "20170713170325",
                    METHOD: "UserLogin",
                    LoginUser:'2',
                    UserAccount:this.username,
                    UserPasswd:this.password,
                    UserMobile:'18689207260'
                    })
                    .then(
                    response => {
                        console.log(response)
                        if(response.data.DATA[0].Code){
                            // let UserAccount=response.data.DATA[0].UserAccount;
                            localStorage.setItem('UserAccount',response.data.DATA[0].UserAccount);
                            localStorage.setItem('UserMobile',response.data.DATA[0].UserMobile);
                            localStorage.setItem('UserAvatar',response.data.DATA[0].UserAvatar);
                            localStorage.setItem('LoginUser',response.data.DATA[0].LoginUser);
                            this.$router.push('/');
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
        opacity: 0;
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
            height: 50px;
            line-height: 50px;
            padding-left: 20px;
            border: 1px solid rgb(221,221,221);
            margin-left: 20px;
            outline: none;
        }
        .isshow{
            opacity: 1; 
        }
    }
    button{
        width: 400px;
        height: 50px;
        line-height: 50px;
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
