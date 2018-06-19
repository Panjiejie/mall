<template>
    <div id='pay-password'>
           <!-- 表单 -->
        <form id='formInfo'>
          <div class="form-item">
            <label for="#psd">提现密码:</label>
            <input type="password" id='psd' placeholder="设置6位数字提现密码" v-model="password" @blur="passwordValidate">
            <span class="userName" :class="{isshow:isshowPasswordInfo}">请输入6位纯数字密码！</span>
          </div>
          <div class="form-item">
            <label for="#password-two">确认密码:</label>
            <input type="password" id='password-two' placeholder="请再次输入提现密码" v-model="passwordTwo" @blur="passwordTwoValidate" >
            <span class="userName" :class="{isshow:isshowPasswordTwoInfo}">两次输入密码不一致，请重新输入！</span>
          </div>
        <button @click="toLast">完成注册</button>
       </form>
    </div>
</template>
<script>
import {bus} from '../../bus.js'
export default {
    name:'registerThird',
    data(){
        return{
            password:'',
            passwordTwo:'',
            isshowPasswordInfo:false,
            isshowPasswordTwoInfo:false
        }
    },
    methods:{
        toLast(){
            if(!this.isshowPasswordInfo && !this.isshowPasswordTwoInfo && this.password!='' && this.passwordTwo!=''){
                 bus.$emit('changeSteps',4)
                 this.$router.push('registerLast')
            }else{
                this.$message({
                    message:'请补全信息',
                    type:'success'
                })
            }
        },
        passwordValidate(){//首次输入支付密码验证
            let reg=/^\d{6}$/;
            if(!reg.test(this.password)){
                if(this.password!=''){
                    this.isshowPasswordInfo=true;
                }
            }else{
                this.isshowPasswordInfo=false;
            }
        },
        passwordTwoValidate(){//验证两次输入支付密码是否一致
            if(this.password!=this.passwordTwo){
                if(this.passwordTwo!=''){
                    this.isshowPasswordTwoInfo=true;
                    this.passwordTwo='';
                }
            }else{
                this.isshowPasswordInfo=false;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.isshow{
    opacity: 1 !important;
}
#formInfo{
        width: 600px;
        margin: 100px auto 0;
        .form-item{
          width: 600px;
          margin: 0 auto;
        }
        label{
          display: inline-block;
          font-size: 14px;
          margin-right: 20px;
          // width: 200px;
          text-align: right;
        }
        input{
            display:inline-block;
            width: 400px;
            height: 44px;
            background: #fff;
            line-height: 44px;
            padding-left: 20px;
            // margin: 0 auto;
            font-size: 14px;
            border: 1px solid rgb(221,221,221);
            outline: none;
            position: relative;
        }
        span{
            display: block;
            opacity: 0;
            width: 400px;
            text-align: left;
            margin: 0 auto; 
            padding-left: 50px;
            color: rgb(241,91,8);
        }
        button{
            width: 400px;
            height: 44px;
            line-height: 44px;
            border: 1px solid rgb(241,91,8);
            background: rgb(241,91,8);
            color: #fff;
            font-size: 14px;
            outline: none;
            position: relative;
            left: 34px;
            margin-top: 12px;
        }
        p{
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          span{
            display: inline;
            padding: 0;
          }
          .el-radio{
            margin-right: 0;
          }
        }
        a{
          display: inline-block;
          color: rgb(241,91,8);
          font-size: 14px;
          position: relative;
          // right: 184px;
          right: -184px;
          top: -50px;
        }
    }

</style>
