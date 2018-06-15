<template>
    <div>
        <!-- 表单 -->
        <form id='formInfo'>
          <div class="form-item">
            <label for="#phone">手机号:</label>
            <input type="text" id='phone' placeholder="输入手机号码">
            <span class="userName" :class="{isshow:isshowUserNameWarn}">{{userName}}</span>
          </div>
          <div class="form-item">
            <label for="#verification-code">验证码:</label>
            <input type="text" placeholder="短信验证码">
            <!-- <a>发送验证码</a> -->
            <span class="userName" :class="{isshow:isshowUserNameWarn}">{{verificationCode}}</span>
          </div>
          <P>
            <el-radio v-model="radio" label="1">已阅读并同意</el-radio><span>《用户服务协议》</span>
          </P>
       <button @click="toSecond">下一步</button>
       </form>
    </div>
</template>
<script>
import { bus } from '../../bus.js'
export default {
    name:'registerIndex',
    data(){
       return{
         userName:'333',
         verificationCode:'请输入正确的验证码',
         isshowUserNameWarn:true,
         radio:''
       }
    },
     methods: {
      toSecond(){
        bus.$emit('changeSteps', 2);
        this.$router.push('registerSecond')
      },
    }
}
</script>
<style scoped lang='less'>
 #formInfo{
        width: 600px;
        margin: 100px auto 0;
        label{
          display: inline-block;
          font-size: 14px;
          margin-right: 20px;
        }
        input{
            display:inline-block;
            width: 400px;
            height: 44px;
            line-height: 44px;
            padding-left: 20px;
            margin: 0 auto;
            font-size: 14px;
            border: 1px solid rgb(221,221,221);
            outline: none;
        }
        span{
            display: block;
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
          color: rgb(241,91,8);
          font-size: 14px;
          position: relative;
          left: -80px;
        }
    }
</style>

