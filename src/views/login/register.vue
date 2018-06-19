<template>
    <div id='register'>
        <p>新用户注册
            <span>已有账号,<router-link to="../loginPassword">立即登录</router-link></span>
        </p>
        <el-steps :active='active' simple @down='change(data)'>
            <el-step title="验证手机" ></el-step>
            <el-step title="信息完善" ></el-step>
            <el-step title="提现密码" ></el-step>
            <el-step title="注册完成" ></el-step>
        </el-steps>
        <router-view>
        </router-view>
        
    </div>
</template>
<script>

import { bus } from '../../bus.js'
export default {
    name:'register',
    data(){
        return{
            active:1
        }
    },

   mounted(){
        bus.$on('changeSteps', (text) => {
            console.log('这是接受的数据'+text);
            this.active=text;
            })
   },
    methods:{
        change(data){
            this.active=data;
        }
    }
}
</script>
<style lang="less" scoped>
#register{
    width: 1200px;
    height: 600px;
    padding:  20px 40px;
    margin: 20px 0;
    background: #fff;
    p{
       text-align: left;
       font-size: 14px;
       height: 50px;
       line-height: 50px;
       span{
           float: right;
           a{
               color: rgb(224,91,8);
               cursor: pointer;
           }
       } 
    }
}
.el-steps{
    width: 800px;
    margin: 10px auto ;
}

</style>
 