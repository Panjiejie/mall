<template>
    <div class="dai" >
        <div class="list-item" v-for='item in 4' :key='item.key'>
         <div class="header">
            <span>下单时间：2018-01-08 15:02:00</span>
                &nbsp;&nbsp;
            <span>订单编号：62205723918</span>
         </div>
           <div class="body-content">
               <div class="img-content">
                    <img :src="imgUrl" alt="">
                </div>
                <div class="textinfo">
                    <h4>韩国制造。。。</h4>
                    <h5>颜色分类：洒下是潇洒奥斯的就是</h5>
                </div>
                <div class="operation">
                    <div class="wait-goods">
                        <span class="red">售后中</span><br>
                        <!-- <span @click="toLogistics" class="blue">查看物流</span> -->
                    </div>
                    <div class="goods-price">
                        <div class="money">$39.00</div>
                        <div class="payway">货到付款</div>
                    </div>
                    <div class="goods-price">
                        <div class="money blue" @click="tolookAfterSaleDetail">查看详情</div>
                        <div class="payway blue" @click="toafterSale">售后详情</div>
                        <div class="payway blue" @click="dialogFormVisible=true">请退货</div>
                    </div>
                </div>         
            </div>             
        </div>
        <!-- 退货对话框 -->
        <el-dialog title="退货地址"  :width="'560px'" :visible.sync="dialogFormVisible" :center="true">
            <el-form :model="form">
                <el-form-item label="姓名:" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="电话:" :label-width="formLabelWidth">
                    <el-input v-model="form.num" auto-complete="off" disabled></el-input>
                </el-form-item>
                <el-form-item label="地址:" :label-width="formLabelWidth">
                    <el-input v-model="form.address" auto-complete="off" disabled></el-input>
                </el-form-item>
                <el-form-item label="快递公司:" :label-width="formLabelWidth">
                    <el-input v-model="form.expressCompany" auto-complete="off" placeholder="请输入快递公司"></el-input>
                </el-form-item>
                <el-form-item label="快递单号:" :label-width="formLabelWidth">
                    <el-input v-model="form.courierNumber" auto-complete="off" placeholder="请输入快递单号"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <!-- <el-button @click="dialogFormVisible = false">取 消</el-button> -->
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import imgUrl from '../../../../assets/common/logo.png'

export default {
    name:'afterSale',
    components:{
        // indexListItem
    },
    data(){
        return{
            imgUrl:imgUrl,
            dialogFormVisible:false,
            form: {//请退货对话框信息
                name: 'zs',
                num: '123456789098',
                address:'广东省深圳市福田区。。。。',
                expressCompany:'',//快递公司
                courierNumber:''//快递单号
                },
            formLabelWidth: '120px',
        }
    },
    methods:{
        tolookAfterSaleDetail(){
            this.$router.push('lookAfterSaleDetail')
        },
        toafterSale(){
          this.$router.push('afterSaleDetail')
      },
        toLogistics(){
          alert('这是物流信息')
      },
      
    }
}
</script>
<style scoped>
.list-item {
  width: 990px;
  height: 190px;
  padding: 0 20px 24px;
  margin-bottom: 20px;
}
.header{
    width: 950px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
    background: rgb(241,241,241);
    padding-left: 20px;
    text-align: left;
    border: 1px solid rgb(241,241,241);
    border-bottom: 0;
}
.body-content{
    width: 950px;
    height: 150px;
    border: 1px solid rgb(241,241,241);
    border-top: none;
    padding-left: 20px;
    font-size: 14px;
}
.img-content{
    float: left;
    width: 110px;
    height: 110px;
    border: 1px solid rgb(241,241,241);
    margin: 18px 18px 0 0;
}
.img-content img{
    width: 50px;
    height: 68px;
    margin: 21px 0 0 0;
}
.textinfo{
    float: left;
    width: 445px;
    margin-top: 18px;
    text-align: left;
}
.textinfo h4{
    font-size: 14px;
    color: #333;
    line-height: 20px;
    margin-bottom: 10px;
}
.textinfo h5{
    color: #999;
    font-size: 12px;
    line-height: 20px;
}
.red{
    color: #ff2040;
}
.wait-goods{
    padding-top: 54px;
}
.blue{
    color: rgb(83,133,162);
    cursor: pointer;
}
.operation{
    float: left;
    width: 355px;
}
.operation>div{
    float: left;
    width: 118px;
    height: 150px;
    border-left: 1px solid rgb(241,241,241);
}
.goods-price .money{
    margin-top: 54px;
}
.show{display: none;}
</style>
