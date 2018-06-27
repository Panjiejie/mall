<template>
    <div class="content">
        <div class="title">安全管理</div>
        <div class="contentbox">
            <div class="content-title">您当前的账号{{UserAccount}}</div>
            <div class="line">
                <img src="../../../assets/common/green_g.png" alt="">
                <div class="btncontent">
                    <h4>登录密码</h4>
                    <div class="textinfos">
                        建议您定期更换密码，设置安全性高的密码可以使账号更安全
                    </div>
                    <input type="button" value="修改"  @click="passwordDialog = true" >
                </div>
            </div>
            <div class="line">
                <img src="../../../assets/common/phone_yellow.png" alt="">
                <div class="btncontent lastcontent">
                    <h4>安全手机 {{num | numfilter}}</h4>
                    <div class="textinfos">
                        安全手机可以用于登录账号，重置密码或其他安全验证
                    </div>
                    <input type="button" value="更换" @click="changePhonenumber" style='right:-23px;'>
                    <!-- <router-link to="changePhonenumber">更换</router-link> -->
                </div>
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
        <!-- 修改密码对话框 -->
        <el-dialog  id="el-dialog" title="修改密码" :visible.sync="passwordDialog" :width="dialogWidth" center>
            <el-form :model="form">
                <el-form-item label="原密码" :label-width="formLabelWidth">
                <el-input v-model="form.oldPassword" auto-complete="off" placeholder="请输入原密码" :type="str" @blur="oldPasswordValidate"></el-input>
                </el-form-item>
                <el-form-item label="新密码" :label-width="formLabelWidth">
                    <el-input v-model="form.newPassword" auto-complete="off" placeholder="设置6-20位登录密码" :type="str" @blur="newPasswordValidate"></el-input>
                </el-form-item>
                <el-form-item label="再次输入" :label-width="formLabelWidth">
                    <el-input v-model="form.newPasswordTwo" auto-complete="off" placeholder="请再次输入登录密码" :type="str" @blur="isPasswordEqual"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancleEditPassword">取 消</el-button>
                <el-button type="primary" @click="editPassword">确 定</el-button>
            </div>
        </el-dialog>
        <!-- <router-view></router-view> -->
    </div>
</template>
<script>
export default {
    name:'personalSetting',
    data(){
        return{
            UserAccount:"",
            str:'text',
            num:"18689207260",
            passwordDialog:false,//修改密码对话框控制
            form: {
                oldPassword: '',
                newPassword: '',
                newPasswordTwo: '',
                },
            formLabelWidth:'120px',
            dialogWidth:'564px',
            isPasswordEqualValue:false,
            newPasswordValidateValue:false
        }
    },
    created(){
        this.UserAccount=localStorage.getItem('UserAccount');
        this.num=localStorage.getItem('UserMobile');
    },
    methods:{
        editPassword() {//修改密码
        console.log(this.newPasswordValidateValue +'newPasswordValidateValue')
        console.log(this.isPasswordEqualValue+'isPasswordEqualValue')
          if(this.newPasswordValidateValue && this.isPasswordEqualValue){
               this.axios.post("/UserPassword/MallUpdatePasswd", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "0",
                    INDEX: "20170713170325",
                    METHOD: "MallUpdatePasswd",
                    LoginUser:'2',
                    UserAccount:this.UserAccount,
                    Passwd:this.form.oldPassword,
                    NewPasswd:this.form.newPasswordTwo
                    })
                    .then(
                    response => {
                        console.log(response)
                        // if(response.data.DATA[0].Code){
                        //     // let UserAccount=response.data.DATA[0].UserAccount;
                        //     localStorage.setItem('UserAccount',response.data.DATA[0].UserAccount);
                        //     localStorage.setItem('UserMobile',response.data.DATA[0].UserMobile);
                        //     localStorage.setItem('UserAvatar',response.data.DATA[0].UserAvatar);
                        //     localStorage.setItem('LoginUser',response.data.DATA[0].LoginUser);
                        //     this.$router.push('/');
                        // }
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
            // this.passwordDialog=false;
            // this.passwordDialog=false;
            // this.$message({
            //     type: 'success',
            //     message: '修改成功!'
            // });
        }else{
            this.$message({
                        message:'请输入格式正确的有效信息',
                        type:'warn'
                    })
        }
        
      },
      cancleEditPassword(){
        // 取消修改密码
        this.passwordDialog=false;
        this.$message({
            type: 'info',
            message: '已取消修改'
          }); 
      },
      changePhonenumber(){//进入修改手机号码页面
            this.$router.push('changePhonenumber')
      },
      oldPasswordValidate(){//旧密码验证
        // this.$message('旧密码验证')
      },
      newPasswordValidate(){
        //    let reg=/^[a-zA-Z\d]{6,32}$/;
            // if(!reg.test(this.form.newPassword)){
                if(false){
                if(this.form.newPassword!=''){
                    this.$message({
                        message:'请输入格式正确的密码',
                        type:'warn'
                    })
                     this.newPasswordValidateValue=false;
                }else{
                    this.newPasswordValidateValue=true;
                }
            }
      },
      isPasswordEqual(){
          if(this.form.newPassword!=this.form.newPasswordTwo && this.form.newPassword!='' && this.form.newPasswordTwo!=''){
              this.$message({
                        message:'两次输入密码不一致，请重新输入',
                        type:'warn'
                    });
              this.form.newPasswordTwo='';
              this.isPasswordEqualValue=false;
          }else{
              this.isPasswordEqualValue=true;
          }
      },

    },
    filters:{
        numfilter(val){
            var reg = /^(\d{3})\d*(\d{4})$/;
            val=val.replace(reg, "$1****$2");
            return val;
            
        }
    }
}
</script>
<style scoped>
/* 弹出框 */
.el-dialog__header{
    text-align: left;
}
.el-form-item__label{
    text-align: left;
}
.el-dialog__footer{
    text-align: center;
}
.el-button--primary{
    background: rgb(241,91,8);
    border-color: rgb(241,91,8);
}
.el-dialog--center {
    text-align: center;
    width: 562px !important;
    height: 500px ;
}
/* 安全提示 */
.safewarn{
    margin-top: 214px;
    width: 900px;
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
    width: 990px;
    min-width: 660px;
}
.title{
        width: 990px;
        height: 44px;
        background: url(../../../assets/common/shadow.png);
        /* background: rgb(240,240,240); */
        line-height:44px;
        text-align: left;
        padding-left: 24px;
        font-size: 16px;
        border-top:2px solid rgb(241,91,8);
        border-bottom: 1px solid rgb(221,221,221);
}
.contentbox{
    width: 990px;
    /* height: 616px; */
    background: #fff;
    padding: 40px;
    font-size: 14px;
}
.content-title{
    text-align: left;
    padding-bottom: 14px;
    border-bottom: 1px solid rgb(221,221,221);
}
.line{
    width: 100%;
    height: 110px;
    padding-left: 30px;
}
.line img{
    float: left;
    margin-top: 35px;
}
.btncontent{
    float: left;
    width: 830px;
    height: 110px;
    padding-left:46px;
    /* background: blueviolet; */
    position: relative;
}
.btncontent input{
    position: absolute;
    top: 40px;
    right: 0;
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid rgb(221,221,221);
    outline: none;
    background: rgb(247,245,244)
}
.btncontent h4{
    width: 620px;
    height: 66px;
    text-align: left;
    line-height: 66px;
}
.textinfos{
    text-align: left;
    width: 620px;
}
.line{
    border-bottom:1px dotted rgb(221,221,221)
}
</style>


