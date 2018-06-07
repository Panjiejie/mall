<template>
    <div id="content">
        <div class="step">
            <el-steps :active="1" finish-status="success" align-center>
                <el-step title="提交订单" description="22222222444534"></el-step>
                <el-step title="等待出库"></el-step>
                <el-step title="等待签收"></el-step>
                <el-step title="等待付款"></el-step>
                <el-step title="交易完成"></el-step>
            </el-steps>
        </div>
        <div class='line'>商品信息</div>
        <div id="table">
            <table>
                <th>
                    <td>商品信息</td>
                    <td>单价</td>
                    <td>数量</td>
                    <td>小计</td>
                    <td>实付</td>
                </th>
                <tr v-for="item in tableList" :key="item.key">
                    <td>
                        <img :src="item.imgUrl" alt="">
                        <span>{{item.title}}</span>
                        <span>颜色：{{item.color}} 尺寸：{{item.size}}</span>
                    </td>
                    <td>￥{{item.price}}</td>
                    <td>{{item.amount}}</td>
                    <td>{{item.subtotal}}</td>
                    <td>{{item.net}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import imgUrl from '../../assets/common/logo.png'
export default {
    name:'innerBottom',
    data(){
        return{
            tableList:[
                {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
                {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
                {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
            ]
        }
    }
}
</script>
<style scoped>
    #content{
        width: 990px;
        min-height:600px;
        background: #fff;
        padding: 0 30px;
    }
    .step{
        width: 930px;
        height: 108px;
        padding-top: 24px;
        margin-bottom: 26px;
    }
    .line{
        height:48px;
        line-height:48px;
        text-align:left;
        font-size: 14px;
        color: #333;
    }
    table{
        border-collapse: collapse;
        border: 1px solid #999;
        width: 930px;
        border-top: none;
    }
    #table img{
        width: 60px;
        height: 60px;
    }
    th{
        height: 40px;
        /* width: 930px; */
    }
    th td{
        border-right:1px solid #999;
        border-top:1px solid #999;
        height: 40px; 
    }
    tr{
        height: 92px;
        border-top: 1px solid #999;
    }
</style>
