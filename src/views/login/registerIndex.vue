<template>
    <div>
        <!-- 表单 -->
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号码" prop="pass">
                <el-input type="text" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="短信验证码" prop="checkPass" class="verification-code">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                <span>发送验证码</span>
            </el-form-item>
            <el-form-item label="">
            <el-radio-group v-model="resource">
            <el-radio label="已阅读并同意"></el-radio><router-link to="/">《用户服务协议》</router-link>
            </el-radio-group>
        </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="toSecond">下一步</el-button>
                <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { bus } from '../../bus.js'
export default {
    name:'registerIndex',
    data(){
        var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        resource:'',
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: '',
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
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
.el-form{
    width: 526px;
    margin: 100px auto 0;
    .el-input{
        width: 300px;
    }
    .el-button{
        width: 200px;
        height: 40px;
    }
    .verification-code{
        position: relative;
        span{
            position: absolute;
            top: 0;
            right: 88px;
            color: rgb(241,94,8)
        }
    }
    .el-form-item{
        .el-form-item__error{
            left: 62px !important;
        }
    }
    
}
</style>

