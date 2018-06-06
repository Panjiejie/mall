<template>
    <div class="content">
        <div class="title">基本信息</div>
        <div class="contentbox">
            <div class="editinfos">
                <div class="photobox">

                </div>
                <div class="editphoto">修改头像</div>
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
                        <!-- <select name="year" id="year" v-model="1">
                            <option value=""></option>
                        </select> -->
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'personalSetting',
    data(){
        return{
            userName:"张三",
            sex:"1"
        }
    }
}
</script>
<style scoped>
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
</style>


