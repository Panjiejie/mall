<template>
    <div class="content">
        <div>
            <!-- <innerTitle :none="none" :statusMsg="statusMsg"></innerTitle> -->
             <div class="content">
                <div class="title-content">
                    <div class="imgcontent">
                        <img :src="imgUrl" alt=""> 
                        <p>等待发货</p>  
                    </div>
                    <div class="infoscontent">
                        <div class="info">
                            <span class="title">订单编号：</span>{{waitingSendDetailItem.DealNumber}}
                        </div>
                        <div class="info">
                            <span class="title">下单时间：</span>{{waitingSendDetailItem.ConfirmTime}}
                        </div>
                    </div>
                    <!-- <button @click="toAfterSale">申请售后</button> -->
                </div>
            </div>
        </div>
        <div class="bottom">
            <innerBottom></innerBottom>
        </div>
    </div>
</template>
<script>
// import innerTitle from '../../../../components/myOrder/innerTitle.vue'
import imgUrl from '../../../../assets/common/waitingSend.png'
import innerBottom from '../../../../components/myOrder/innerBottom.vue'
export default {
    name:'waitingSend',
    components:{
        // innerTitle,
        innerBottom,
        orderList:[],
    },
    data(){
        return{
            none:false,//是否不显示售后按钮
            statusMsg:'等待发货',
            imgUrl:imgUrl,
            waitingSendDetailItem:'',
            UserAccount:''
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.waitingSendDetailItem=JSON.parse(localStorage.getItem('waitingSendDetailItem')).DealNumber;
            // console.log(this.waitingSendDetailItem)
            this.requestOrderInfo();
        },
        requestOrderInfo(){
             this.UserAccount=localStorage.getItem('UserAccount');
              this.axios.post("/Order/OrderInfo", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "0",
                    INDEX: "20170713170325",
                    METHOD: "OrderInfo",
                    LoginUser:'2',
                    UserAccount:this.UserAccount,
                    DealNumber:this.waitingSendDetailItem,
                    })
                    .then(
                    response => {
                        console.log(response)
                        //  if(response.data.RETURNCODE=='200'){
                        //   let data=response.data.DATA;
                        //   this.orderList.length=0;
                        //   // console.log(data)
                        //   let DealNumber_ConfirmTime=response.data.DealNumber_ConfirmTime;
                        //   for(let i=0,len=data.length;i<len;i++){
                        //         let params=data[i][0];
                        //         // console.log(data[i][0])
                        //         let arr=[];
                        //         for(let j=0;j<data[i][0].BrandName.length;j++){//商品数据格式化
                        //           arr.push({
                        //             BrandName:params.BrandName[j],
                        //             DealMoney:params.DealMoney[j],
                        //             CommodityName:params.CommodityName[j],
                        //             FilePath:params.FilePath[j].split(',')[0]+params.FilePath[j].split(',')[1],
                        //             Postalcode:params.Postalcode[j],
                        //             CommodityCode:params.CommodityCode[j],
                        //             SupplyMoney:params.SupplyMoney[j],
                        //             UserAccount:params.UserAccount[j],
                        //             PayInstitution:params.PayInstitution[j],
                        //             AddresseeName:params.AddresseeName[j],
                        //             Telephone:params.Telephone[j],
                        //             DetailedAddress:params.DetailedAddress[j],
                        //             CommodityNumber:params.CommodityNumber[j],
                        //             DealStatus:params.DealStatus[j],
                        //           })
                        //         }

                        //          this.orderList.push({
                        //           DealNumber:DealNumber_ConfirmTime[i][0],
                        //           ConfirmTime:DealNumber_ConfirmTime[i][1].split('+')[0],
                        //           time2:DealNumber_ConfirmTime[i][1].split('+')[1],
                        //           obj:arr
                        //         })
                        //      }
                        //      let orderList=JSON.stringify(this.orderList)
                        //      localStorage.setItem('orderList',orderList)
                        // }
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        },
        toAfterSale(){
            this.$router.push('applyForAfterSales')
        }
    }
}
</script>
<style scoped>
/* .title-content{
    width: 990px;
    height: 100px;
    margin-bottom: 24px;
} */
.title-content{
    width: 990px;
    height: 100px;
    padding:20px 30px;
    background: #fff;
    position: relative;
    margin-bottom:22px ;
    border:1px solid rgb(221,221,221)
}
.imgcontent{
    float: left;
    width: 60px;
    height: 100px;
}
img{
    width: 30px;
    height: 30px;
}
p{
    color: rgb(244,91,8);
    font-size: 14px;
}
.infoscontent{
    width: 410px;
    height: 100px;
    color: black;
    float: left;
    text-align: left;
    margin-left: 100px;
}
.title{
    color: #999;
    font-size: 12px;
}
button{
    width: 90px;
    height: 36px;
    background: transparent;
    border: 1px solid #ff2040;
    color: #ff2040;
    position: absolute;
    top: 32px;
    right: 30px;
}
.info{
    height: 30px;
    line-height: 30px;
}
</style>


