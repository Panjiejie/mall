<template>
    <div id='reset-content'>
        <div class="reset-line clearfix">
            <span class="tips">新的密码:</span>
            <div class="reset-line-right">
                <input type="password" v-model='passwordOne' placeholder="设置6至20位登录密码" >
            </div>
        </div>
        <div class="reset-line clearfix">
            <span class="tips">重复密码:</span>
            <div class="reset-line-right">
                <input type="password" v-model="passwordTwo" placeholder="请再次输入登录密码">
            </div>
        </div>
        <div class="reset-line clear">
            <span class="notips">1</span>
            <div class="reset-line-right">
                <button @click="toLast">下一步</button>
            </div>
        </div>
    </div>
</template>
<script>
import {bus} from '../../../bus.js'
export default {
    name:'resetPasswordThird',
    data(){
        return{
            passwordOne:'',
            passwordTwo:'',
            UserAccount:''
        }
    },
    created(){
        this.UserAccount=localStorage.getItem('resetUserName')
    },
    methods:{
        toLast(){
            // bus.$emit('changeSteps', 4);
            if(this.passwordOne!='' && this.passwordTwo!='' && this.passwordTwo==this.passwordOne){
                // this.$router.push('resetPasswordLast');
                this.ModifyPasswd();
            }else{
                this.$message({
                    message:'两次输入不一致，请重新输入！',
                    type:'success'
                })
                this.passwordOne='';
                this.passwordTwo='';
            }
            
        },
        ModifyPasswd(){
            this.axios.post("/UserPassword/ModifyPasswd", {
            SOURCE: "22",
            CREDENTIALS: "0",
            TERMINAL: "0",
            INDEX: "20170713170325",
            METHOD: "ModifyPasswd",
            LoginUser:'2',
            UserAccount:this.UserAccount,
            NewPasswd:this.passwordOne
            })
            .then(
            response => {
            //     if(response.data.DATA[0].Code=='1'){
            //         this.$router.push('resetPasswordThird');
            //     }
            },
            response => {
                console.log("请求失败");
                console.log(response);
            }
            );
        }
    },
    mounted(){
            bus.$emit('changeSteps', 3);
    },
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
                left: -180px;
                color: rgb(241,92,8);
            }
        }
        
    }
}
</style>


