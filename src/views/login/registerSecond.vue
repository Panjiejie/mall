<template>
    <div id='register-content'>
        <div class="photo">
            <img :src="photoDefault"  alt="">
        </div>
        <p @click="updataPhotoDialog=true">修改头像</p>
         <!-- 表单 -->
        <form id='formInfo'>
          <div class="form-item">
            <label for="#userName">用户名:</label>
            <input type="text" id='userName' placeholder="设置用户名称" v-model="userName" @blur="userNameValidate" style="left:7px">
            <span class="userName" :class="{isshow:isshowUserNameWarn}">{{usernameInfo}}</span>
          </div>
          <div class="form-item">
            <label for="#password" >密码:</label>
            <input type="password" id='password' placeholder="设置6-20位以上含字母、数字密码" v-model="password" @blur="passwordValidate" style="left:14px;">
            <span class="userName" :class="{isshow:isshowPasswordWarn}">请6-32位以上且仅含字母数字的密码</span>
          </div>
          <div class="form-item">
            <label for="#password-two" >确认密码:</label>
            <input type="password" id='password-two' placeholder="请再次输入登录密码" @blur="passwordTwoValidate" v-model="passwordTwo" >
            <span class="userName" :class="{isshow:isshowPasswordTwoWarn}">两次密码输入不一致，请重新输入！</span>
          </div>
       <button @click="toThird">下一步</button>
         <!-- 修改头像 -->
        <el-dialog  id="el-dialog" title="修改头像" :visible.sync="updataPhotoDialog" :width="dialogWidth" center>
            <el-upload
                    class="avatar-uploader"
                    action="http://120.78.49.234/ImgUploadApi/api/ImgUpload/ImgPost"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess">
                    <img v-if="photo" :src="photo" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    <div class="warn-info">支持大小不超过5m的jpg、png图片</div>
                    <div class="btn"></div>
            </el-upload>
        </el-dialog>
       </form>
    </div>
</template>
<script>
import {bus} from '../../bus.js'
import photoDefault from '../../assets/common/photoDefault.png'
export default {
    name:'registerSecond',
    data(){
        return{
            photoDefault:photoDefault,
            photo:'',
            userName:'',
            password:'',
            passwordTwo:'',
            isshowUserNameWarn:false,
            isshowPasswordWarn:false,
            isshowPasswordTwoWarn:false,
            updataPhotoDialog:false,
            dialogWidth:'560px',//弹出框宽度
            usernameInfo:'请输入6-20位字母开头且仅含字母和数字的用户名'
        }
    },
    methods:{
        toThird(){
            if(!this.isshowUserNameWarn && !this.isshowPasswordWarn && !this.isshowPasswordTwoWarn){
                bus.$emit('changeSteps', 3);
                this.$router.push('registerThird')
            }
        },
        userNameValidate(){//用户名验证
            let reg=/^[a-z]\w{5,19}$/;
            if(!reg.test(this.userName)){
                if(this.userName!=''){
                    this.isshowUserNameWarn=true;
                }
            }else{
                this.isshowUserNameWarn=false;
            }
        },
        passwordValidate(){//密码验证
            let reg=/^[a-zA-Z\d]{6,32}$/;
            if(!reg.test(this.password)){
                if(this.password!=''){
                    this.isshowPasswordWarn=true;
                    // this.passwordTwoValidate();
                }
            }else {
                    this.isshowPasswordWarn=false;
            }
        },
        passwordTwoValidate(){//两次密码是否一致验证
            if(this.password==this.passwordTwo){
                this.isshowPasswordTwoWarn=false
            }else{
                if(this.passwordTwo!=''){
                    this.isshowPasswordTwoWarn=true;
                    this.passwordTwo='';
                }
            }
        },
        handleAvatarSuccess(res, file) {
            this.photo = URL.createObjectURL(file.raw);
            this.photoDefault=this.photo;
            this.$message({
            type: 'success',
            message: '修改成功!'
          });
          setTimeout(()=>{this.updataPhotoDialog=false;},2000)
            },
    }
}
</script>
<style lang="less" scoped>
/* 上传头像对话框 */
.avatar-uploader-icon{
    border: 1px solid rgb(221,221,221);
}
.avatar[data-v-38438c93]{
    border: 1px solid rgb(221,221,221)
}
.el-dialog__header{
    text-align: left;
}
.avatar-uploader{
    text-align: center;
}
.warn-info{
    height: 36px;
    line-height: 36px;
    color: #999;
    font-size: 14px;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
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
        opacity: 1 !important;
        }
 #formInfo{
        width: 600px;
        margin: 0 auto 0;
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
    #agreement{
    width: 1200px;
    min-height: 400px;
    // background: yellowgreen;
    margin: 0 auto;
    padding: 20px 0 60px;
    h1{
        height: 100px;
        line-height: 100px;
    }
    ul{
        width: 1200px;
        padding: 0 100px;
        line-height: 20px;
        font-size: 14px;
        .title{
            line-height: 70px;
            font-weight: 700;
            color: rgb(241,91,8)
        }
        li{
            list-style: none;
            text-align: left;
        }
    }
}
</style>


