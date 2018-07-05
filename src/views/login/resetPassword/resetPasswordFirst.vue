<template>
    <div id='reset-content'>
        <div class="reset-line clearfix">
            <span class="tips">用户名称:</span>
            <div class="reset-line-right">
                <input type="text" placeholder="请输入用户名称" v-model="phoneNumber">
                <!-- <span class="warnInfos">请输入正确的用户名或手机号</span> -->
            </div>
        </div>
        <div class="reset-line clearfix">
            <span class="tips">验证码:</span>
            <div class="reset-line-right">
                <input type="text" placeholder="输入图形验证码" v-model="verificationCode">
                <!-- <br><span class="warnInfos">验证码错误</span> -->
            </div>
        </div>
        <div class="reset-line clearfix">
            <span class="notips">1</span>
            <div class="reset-line-right">
                <img :src="img" alt="">
                <span @click="imgRequest" style="cursor:pointer;">看不清？换一张</span>
            </div>
        </div>
        <div class="reset-line clear">
            <span class="notips">1</span>
            <div class="reset-line-right">
                <button @click="toSecond">下一步</button>
            </div>
        </div>
    </div>
</template>
<script>
import {bus} from '../../../bus.js'
import img from '../../../assets/index/nav-header.png'
export default {
    name:'resetPasswordFirst',
    data(){
        return{
            img:'',
            qrCode:'',
            phoneNumber:'',
            verificationCode:'',
            isshowUserNumWarn:false,
        }
    },
    created(){
        this.imgRequest();
    },
    methods:{
        imgRequest(){
         this.axios.get("/Code/GraphicalCode", {
          SOURCE: "22",
          CREDENTIALS: "0",
          TERMINAL: "0",
          INDEX: "20170713170325",
          METHOD: "MallCommodityInfo",
          // DATA:encodeURI(obj)
        })
        .then(
          response => {
            if(response.data.code=='1'){
                this.img=response.data.data.img;
                this.code=response.data.data.code;
            }
          },
          response => {
            console.log("请求失败");
            console.log(response);
          }
        );
        },
        toSecond(){
            if(this.code==this.verificationCode){
                localStorage.setItem('resetUserName',this.phoneNumber)
                this.$router.push('resetPassword/resetPasswordSecond');
            }else{
                this.imgRequest();
                this.$message({
                    message:'验证码错误，请重新输入！',
                    type:'success'
                })
                this.verificationCode='';
            }
            
        },
        phonenumValidate(){//账号验证
            //  if(this.phoneNumber!='' && this.phoneNumber.length<21){
            //     this.isshowUserNumWarn=false;
            //     }else {
            //     this.isshowUserNumWarn=true;
            //  }

        }
    },
    mounted(){
            bus.$emit('changeSteps', 1);

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
            // display: inline-block;
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
            img{
                width: 146px;
                height: 57px;
                float: left;
            }
            .warnInfos{
            float: none;
            line-height: 14px;
            color: #ff2040;
            position: relative;
            top: 12px;
            font-size: 13px;
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
        }
        
    }
}
</style>
