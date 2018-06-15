<template>
    <div id='register-content'>
        <div class="photo">
            <img src="../../assets/goodsGuide/bg.png" alt="">
        </div>
        <p>修改头像</p>
        <!-- 表单 -->
       <form id='formInfo'>
       <input type="text" placeholder="请输入用户名称">
       <span class="userName" :class="{isshow:isshowUserNameWarn}">{{userName}}</span>
       <input type="text" placeholder="设置6位以上含字母、数字密码">
       <span class="userName" :class="{isshow:isshowUserNameWarn}">{{userName}}</span>
       <input type="text" placeholder="请再次输入登录密码">
       <span class="userName" :class="{isshow:isshowUserNameWarn}">{{userName}}</span>
       <button @click="toThird">下一步</button>
       </form>
    </div>
</template>
<script>
import {bus} from '../../bus.js'
export default {
    name:'registerSecond',
    data(){
        return{
            userName:'333',
            isshowUserNameWarn:true,
        }
    },
    methods:{
        toThird(){
            bus.$emit('changeSteps', 3);
            this.$router.push('registerThird')
        }
    }
}
</script>
<style lang="less" scoped>
    .photo{
        text-align: center;
        img{
            width: 100px;
            height: 100px;
            border: 1px solid rgb(221,221,221);
            border-radius: 50%;
        }
    }
    p{
        font-size: 14px;
        color: rgb(241,91,8);
        height: 60px;
        line-height: 60px;
    }
    .isshow{
        display: block;
    }
    #formInfo{
        width: 600px;
        margin: 0 auto;
        input{
            display: block;
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
            padding-left: 20px;
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
        }
    }
</style>


