<template>
    <div id="invoice">
        <!-- 发票 -->
        <div class="invoice-line clearfix">
            <div class="invoice-line-left">
                <span>发票类别：</span>
            </div>
            <div class="invoice-line-right">
                <button @click="btnlist1Sorts(item)" v-for='item in btnlist1' :key='item.key' :class="{isorange:item.ischeck}">{{item.text}}</button>
                <button @click="btnlist2Sorts(item)" v-for='item in btnlist2' :key='item.key' :class="{isorange:item.ischeck}">{{item.text}}</button>
            </div>            
        </div>
         <div class="invoice-line clearfix" v-if='isshowTitle'>
            <div class="invoice-line-left">
                <span>发票抬头：</span>
            </div>
            <div class="invoice-line-right">
                <input type="text" placeholder="请输入发票抬头" v-model='invoiceTitle'>
            </div>            
        </div>
        <div class="invoice-line clearfix" v-if="isshowIdentifier">
            <div class="invoice-line-left">
                <span>纳税人识别号：</span>
            </div>
            <div class="invoice-line-right">
                <input type="text" placeholder="请输写购买方纳税人识别号或统一社会信用代码" v-model='invoiceIdentifier'>
            </div>            
        </div>
        <div class="email-line clearfix" v-if='isshowConnection'>
            <span>收票人手机：</span><input type="text">
            <span>收票人邮箱：</span><input type="text">
        </div>
        <div class="email-line clearfix">
            <span class="invoice-content">发票内容：</span>
            <div class="btngroups">
                <button class="btn-item" @click="gerInvoiceContent(item)" v-for='item in btnGroups' :key='item.key' :class="{isorange:item.ischeck}">{{item.text}}</button>
            </div>
        </div>
        <div class="must-know">发票须知</div>
        <div class="must-know">1.正品汇商城纸质发票暂不支持填写税号</div>
        <div class="must-know">2.选择电子发票的订单付款后纳税人识别号不可修改，请确认信息后付款</div>
        <div class="must-know">3.电子发票可在订单完成后，在订单详情中下载和查看</div>
        <div class="must-know">4.发票金额为实际支付金额，不包含优惠券，礼品卡等</div>
    </div>
</template>
<script>
export default {
    name:'invoice',
    data(){
        return{
            invoiceTitle:'',//发票抬头
            invoiceIdentifier:'',//纳税人识别号
            invoicePhonenum:'',//收票人手机
            invoiceEmail:'',//收票人邮箱
            invoiceSort1:'',//发票类别1
            sort1Value:'',//类别1value
            sort2Value:'',//类别2value
            invoiceSort2:'',//发票类别2
            invoiceContent:'',//发票内容
            isshowIdentifier:true,//是否显示纳税人识别号
            isshowTitle:true,//是否显示发票抬头
            isshowConnection:true,//是否显示联系方式
            btnlist1:[
                {text:'电子发票(非纸质)',value:'1', ischeck:true},
                {text:'普通发票(纸质)', value:'2',ischeck:false},
            ],
            btnlist2:[
                {text:'个人',value:'3',ischeck:true},
                {text:'单位',value:'4',ischeck:false},
            ],
            btnGroups:[
                {text:'日用品',ischeck:true},
                {text:'家居用品',ischeck:false},
                {text:'食品',ischeck:false},
                {text:'饮料/酒',ischeck:false},
                {text:'服饰',ischeck:false},
                {text:'化妆品',ischeck:false},
            ]
        }
    },
    mounted(){
        this.controlIsShow();
    },
    methods:{
        btnlist1Sorts(item){
            this.btnlist1.forEach(e=>e.ischeck=false);
            item.ischeck=true;
            this.invoiceSort1=item.text;
            this.sort1Value=item.value;
            this.controlIsShow();
        },
        btnlist2Sorts(item){
            this.btnlist2.forEach(e=>e.ischeck=false);
            item.ischeck=true;
            this.invoiceSort2=item.text;
            this.sort2Value=item.value;
            this.controlIsShow();
        },
        gerInvoiceContent(item){//选择发票内容
            this.btnGroups.forEach(e=>e.ischeck=false);
            item.ischeck=true;
            this.invoiceContent=item.text;
        },
        controlIsShow(){//控制填写内容显示隐藏
            if(this.sort1Value=='1' && this.sort2Value=='3'){
                this.isshowIdentifier=false;
                this.isshowConnection=true;
            }
            if(this.sort1Value=='1' && this.sort2Value=='4'){
                this.isshowIdentifier=true;
                this.isshowConnection=true;
            }
            if(this.sort1Value=='2' && this.sort2Value=='3'){
                this.isshowIdentifier=false;
                this.isshowConnection=false;
            }
            if(this.sort1Value=='2' && this.sort2Value=='4'){
                this.isshowConnection=false;
                this.isshowIdentifier=true;
            }
        }
    },
}
</script>
<style lang="less" scoped>
#invoice{
    .invoice-line{
        div{
            float: left;
          }
        .invoice-line-left{
            width: 100px;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            text-align: left;
        }
        .invoice-line-right{
            width: 560px;
            button{
                width: 180px;
                height: 40px;
                line-height: 40px;
                margin-right: 16px;
                background: #fff;
                border: 1px solid rgb(221,221,221);
                font-size: 14px;
                color: #333;
                outline: none;
                margin-bottom: 14px;
          }
          button:nth-child(2n){
              margin-right: 50px;
          }
         .isorange{
                color: rgb(241,92,8);
                border-color: rgb(241,92,8);
             }
          input{
              width: 560px;
              height: 40px;
              line-height: 40px;
              color: #999;
              font-size: 14px;
              border: 1px solid rgb(221,221,221);
              outline: none;
              padding-left: 14px;
              margin-bottom: 14px;
          }
        }  
          
    }
    .email-line{
        span{
            float: left;
            width: 100px;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            text-align: left;
        }
        span:last-of-type{
            margin-left: 60px;
        }
        input{
             float: left;
              width: 200px;
              height: 40px;
              line-height: 40px;
              color: #999;
              font-size: 14px;
              border: 1px solid rgb(221,221,221);
              outline: none;
              padding-left: 14px;
              margin-bottom: 14px;
          }
        .invoice-content{
            margin: 0 !important;
        }
        .btngroups{
            width: 560px;
            float: left;
        }
        .btn-item{
            width: 70px;
            height: 40px;
            line-height: 40px;
            margin-right: 16px;
            background: #fff;
            border: 1px solid rgb(221,221,221);
            font-size: 14px;
            color: #333;
            outline: none;
            margin-bottom: 24px;
        }
        .isorange{
                color: rgb(241,92,8);
                border-color: rgb(241,92,8);
             }
    }
    .must-know{
        font-size: 12px;
        color: #999;
    }
}
</style>
