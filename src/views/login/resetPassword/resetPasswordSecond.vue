<template>
    <div id='reset-content'>
        <div class="reset-line clearfix">
            <span class="tips">用户名称:</span>
            <div class="reset-line-right">
                <input type="text" value='zhangsan' disabled>
            </div>
        </div>
        <div class="reset-line clearfix">
            <span class="tips">手机号码:</span>
            <div class="reset-line-right">
                <input type="text" value="1366666666" disabled>
            </div>
        </div>
        <div class="reset-line clearfix">
            <span class="tips">验证码</span>
            <div class="reset-line-right">
                <input type="text" value="" placeholder="短信验证码"  >
                <a class="btn">发送验证码</a>
            </div>
        </div>
        <div class="reset-line clear">
            <span class="notips">1</span>
            <div class="reset-line-right">
                <button @click="toThird">下一步</button>
            </div>
        </div>
    </div>
</template>
<script>
import {bus} from '../../../bus.js'
export default {
    name:'resetPasswordSecond',
    data(){
        return{
        }
    },
    methods:{
        toThird(){
            bus.$emit('changeSteps', 3);
            this.$router.push('resetPasswordThird');
        }
    },
    mounted(){},
}
</script>
<style lang="less" scoped>

#reset-content{
    width: 100%;
    min-height:500px;
    padding-top: 80px;
    font-size: 14px;
    // background: yellowgreen;
    .reset-line{
        width: 100%;
        height: 70px;
        line-height: 70px;
        .tips,.notips{
            float: left;
            // display: inline-block;
            padding-right: 20px;
            width: 36%;
            text-align: right
        }
        .notips{
            opacity: 0;
        }
        .reset-line-right{
            float: left;
            width: 50%;
            position: relative;
            input{
                    width: 400px;
                    height: 50px;
                    line-height: 50px;
                    border: 1px solid rgb(221,221,221);
                    outline: none;
                    padding-left: 20px;
                    float: left;
                    position: relative;
                    top: 10px;
                }
            button{
                float: left;
                width: 400px;
                height: 50px;
                line-height: 50px;
                background: rgb(241,92,8);
                color: #fff;
                font-size: 14px;
                text-align: center;
                border: 1px solid rgb(241,92,8);
                outline: none;
            }
            span{
                float: left;
            }
            .btn{
                position: relative;
                left: -140px;
                color: rgb(241,92,8);
            }
        }
        
    }
}
</style>

