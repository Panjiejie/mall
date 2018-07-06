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
                    <input type="text" id="num" placeholder="输入新的手机号码" v-model='num'>
                </div>
                <div class="verification-code">
                    <label for="code">验证码：</label>
                    <input type="text" id="code" placeholder="短信验证码" v-model='verificationCode'>
                    <a @click="sendVerificationCode" class="send-code">发送验证码</a>
                    <span :class="{isshow:isshow}" style="color:#ff2040;font-size:12px;">{{second}}S后重发</span>
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
            num:'',//手机号码
            verificationCode:'',//验证码
            second:60,
            UserAccount:'',
            isshow:false,
            form:{
                name:''
            }
        }
    },
    methods:{
        toSuccess(){
            this.changePhoneNum();
            
        },
        changePhoneNum(){//修改手机号码
              let OldPhoneNumber=localStorage.getItem('UserMobile');
            //   let obj=`[["NewPhoneNumber","OldPhoneNumber","Verification"],["${this.num}","${OldPhoneNumber}","${this.verificationCode}"]]`
              this.axios.post("/UserInfo/ChangePhoneNumber", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "0",
                    INDEX: "20170713170325",
                    METHOD: "ChangePhoneNumber",
                    LoginUser:'2',
                    NewPhoneNumber:this.num,
                    OldPhoneNumber:OldPhoneNumber,
                    Verification:this.verificationCode
                    })
                    .then(
                    response => {
                        // console.log(response)
                         if(response.data.DATA[0].Code=='1'){
                            // this.$message({
                            //     message:'验证码已发送，请注意查收！',
                            //     type:'success'
                            // })
                            this.$router.push('changeSuccess')
                        }
                        
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );



           
        },
        sendVerificationCode(){//发送验证码
        if(this.isshow==false){
            this.UserAccount=localStorage.getItem('UserAccount');
                    this.axios.post("/UserRegister/AccoutProving", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "0",
                    INDEX: "20170713170325",
                    METHOD: "AccountProving",
                    LoginUser:'2',
                    // UserAccount:this.UserAccount,
                    UserMobile:this.num
                    })
                    .then(
                    response => {
                        // console.log(response)
                         if(response.data.DATA[0].result=='false'){
                            this.$message({
                                message:'验证码已发送，请注意查收！',
                                type:'success'
                            })
                        }
                        this.isshow=true;
                        var inter=setInterval(()=>{
                            this.second--;
                            if(this.second==0){
                            this.isshow=false;
                            this.second=60;
                            window.clearInterval(inter);
                        }
                        },1000)
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
            }
                    
        },
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
    opacity: 0;
    width: 68px;
    display: inline-block
}
.isshow{
    opacity: 1 !important;
}
#next{
    width: 160px;
    height: 40px;
    background:rgb(244,91,8);
    color: #fff;
    border: 1px solid rgb(244,91,8);
    outline: none;
    font-size: 14px;
}
.el-step__main .is-success{
    color: rgb(244,91,8);
}
</style>
