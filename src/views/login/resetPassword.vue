<template>
    <div id='reset-password'>
        <p>重置密码</p>
        <el-steps :active='active' simple @down='change(data)'>
            <el-step title="填写用户名" ></el-step>
            <el-step title="验证身份" ></el-step>
            <el-step title="设置新密码" ></el-step>
            <el-step title="完成" ></el-step>
        </el-steps>
        <router-view>
        </router-view>
    </div>
</template>
<script>
import { bus } from '../../bus.js'
export default {
    name:'resetPassword',
    data(){
        return{
            active:1,
        }
    },
    mounted(){
         bus.$on('changeSteps', (text) => {
            // console.log('这是接受的数据'+text);
            this.active=text;
            })
    }
}
</script>
<style lang="less" scoped>
#reset-password{
    width: 1200px;
    min-height: 600px;
    background: #fff;
    margin: 20px auto;
    padding:  20px 40px;
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
    .el-steps{
    width: 800px;
    margin: 10px auto ;
}
}

</style>
