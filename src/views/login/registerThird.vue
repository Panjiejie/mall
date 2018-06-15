<template>
    <div id='pay-password'>
        <form id="formInfo">
            <input type="text" placeholder="设置6位纯数字提现密码">
            <span>请输入格式正确的密码</span>
            <input type="text" placeholder="请再次输入登录密码">
            <span>两次输入密码不一致，请重新输入</span>
            <button @click="toLast">完成注册</button>
        </form>
    </div>
</template>
<script>
import {bus} from '../../bus.js'
export default {
    name:'registerThird',
    data(){
        return{}
    },
    methods:{
        toLast(){
            bus.$emit('changeSteps',4)
            this.$router.push('registerLast')
        }
    }
}
</script>

<style lang="less" scoped>
 #formInfo{
        width: 600px;
        margin: 100px auto 0;
        input{
            display: block;
            width: 400px;
            height: 44px;
            line-height: 44px;
            padding-left: 20px;
            margin: 10px auto;
            font-size: 14px;
            border: 1px solid rgb(221,221,221);
            outline: none;
        }
        span{
            display: block;
            width: 400px;
            text-align: left;
            margin: 0 auto; 
            padding-left: 20px;
            color: rgb(241,91,8);
            position: relative;
            top: -5px;
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
            margin-top: 10px;
        }
    }
</style>
