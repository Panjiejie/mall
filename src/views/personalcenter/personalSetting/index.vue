<template>
    <div class="content">
        <div class="title">基本信息</div>
        <div class="contentbox">
            <div class="editinfos">
                <div class="photobox">

                </div>
                <div class="editphoto" @click='editPhoto'>修改头像</div>
                <div class="line clearfix">
                    <span class="infotitle">用户ID：</span>
                    <span class="infos">00001</span>
                </div>
                <div class="line clearfix">
                    <span class="infotitle">用户名：</span>
                    <span class="infos"><el-input v-model="userName"  id="username" placeholder="请输入用户名"></el-input>
</span>
                </div>
                <div class="line clearfix">
                    <span class="infotitle">性&nbsp;&nbsp;&nbsp;别：</span>
                    <span class="infos">
                        <el-radio v-model="sex" label="1">男</el-radio>
                        <el-radio v-model="sex" label="2">女</el-radio>
                    </span>
                </div>
                <div class="line clearfix">
                    <span class="infotitle">生&nbsp;&nbsp;&nbsp;日：</span>
                    <span class="infos">
                          <div class="block">
                                <!-- <span class="demonstration">默认</span> -->
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                         </div>
                    </span>
                </div>
                <button class="save">保存</button>
            </div>
        </div>
         <!-- 修改头像 -->
        <el-dialog  id="el-dialog" title="修改头像" :visible.sync="updataPhotoDialog" :width="dialogWidth" center>
            <el-upload
                    class="avatar-uploader"
                    action="http://120.78.49.234/ImgUploadApi/api/ImgUpload/ImgPost"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    <div class="warn-info">支持大小不超过5m的jpg、png图片</div>
                    <div class="btn"></div>
            </el-upload>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name:'personalSetting',
    data(){
        return{
            userName:"张三",
            sex:"1",
            pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        dialogWidth:'560px',//弹出框宽度
        updataPhotoDialog:false,
        imageUrl:''//头像
      };
        
    },
    methods:{
        editPhoto(){
            this.updataPhotoDialog=true;
            },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
            this.$message({
            type: 'success',
            message: '修改成功!'
          });
          setTimeout(()=>{this.updataPhotoDialog=false;},2000)
            },
        beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt5M = file.size / 1024 / 1024 < 5;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是jpg、png格式!');
                }
                if (!isLt5M) {
                this.$message.error('上传头像图片大小不能超过 5MB!');
                }
                return isJPG && isLt5M;
            }
    }
}
</script>
<style scoped>
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

.content{
    width: 990px;
    min-width: 660px;
}
.title{
        width: 990px;
        height: 44px;
        background: blueviolet;
        /* background: rgb(240,240,240); */
        line-height:44px;
        text-align: left;
        padding-left: 24px;
        font-size: 16px;
        border-top:2px solid rgb(241,91,8)
}
.contentbox{
    width: 990px;
    height: 616px;
    background: #fff;
    padding: 66px 240px 0;
}
.photobox{
    width: 120px;
    height: 120px;
    background: yellowgreen;
    border: 1px solid #999;
    border-radius: 50%;
    margin: 0 auto 22px;
}
.editphoto{
    font-size: 14px;
    text-align: center;
}
.line span{
    float: left;
    height: 52px;
    line-height: 52px;
}
.infotitle{
    width: 112px;
    text-align: right;
    font-size: 14px;
}
.infos{
    min-width:200px;
    padding-left:32px;
    font-size: 14px;
    text-align: left; 
}
#username{
    width: 220px;
    height: 40px;
}
.el-input{
    width: 220px;
}
.el-radio__input.is-checked .el-radio__inner {
    border-color: rgb(241,91,8);
    background: rgb(241,91,8);
}
.el-radio__input.is-checked+.el-radio__label {
    color: rgb(241,91,8);
}
.save{
    width: 90px;
    height: 32px;
    color: #fff;
    line-height: 32px;
    margin-top: 60px;
    text-align: center;
    border: 1px solid rgb(241,91,8);
    outline: none;
    background: rgb(241,91,8);
}
</style>


