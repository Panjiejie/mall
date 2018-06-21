<template>
    <div id="consigneeInfo-content">
        <p>发票信息</p>
        <div id="consigneeInfo">
            <p><span>发票类型：</span>大中国</p>
            <p><span>发票内容：</span>18689207260</p>
            <p><span>发票抬头：</span>我们都有一个家名字叫中国，兄弟姐妹都很多</p>
            <button @click="dialogVisible=true">修改信息</button>
        </div>
        <!-- 发票 -->
        <el-dialog
        title="发票信息"
        :visible.sync="dialogVisible"
        width="760px"
        :center="true">
        <invoice></invoice>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>
<script>
import invoice from './invoice.vue'
export default {
    name:'consigneeInfo',
    components:{
        invoice
    },
    data(){
        return{
            dialogVisible:false
        }
    },
}
</script>
<style scoped>
#consigneeInfo-content{
    text-align: left;
    margin-top:40px ;
}
#consigneeInfo-content>p{
    width: 930px;
    height: 32px;
    font-size: 14px;
    vertical-align: top;
}
#consigneeInfo{
    width: 930px;
    height: 100px;
    padding-left: 12px;
    position: relative;
    border: 1px solid rgb(221,221,221)
}
#consigneeInfo p{
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #999;
}
#consigneeInfo  span{
    color :#333;
}
#consigneeInfo button{
    width: 76px;
    height: 25px;
    border: 1px solid rgb(244,91,8);
    font-size: 14px;
    color: rgb(244,91,8);
    background: transparent;
    outline: none;
    position: absolute;
    top: 38px;
    right: 22px;
}
</style>
