<template>
    <div id="receive">
        <!-- 购物车收货信息页面 -->
        <div class="receive-body">
            <!-- 收货信息地址 -->
            <div class="receive-infos">
                <div class="infos-title" style='text-align:left;width:100%;'>收货信息</div>
                <div class="infos-content">
                    <p>
                        <img src="../../../assets/brand/location.png" alt="">
                        <span>默认地址</span> 
                    </p>
                    <ul>
                        <li>
                            <span class="infos-title">收&nbsp;&nbsp;货&nbsp;人：</span>
                            <span class="infos-text">{{defaultAddress.name}}</span>
                        </li>
                        <li>
                            <span class="infos-title">联系方式：</span>
                            <span class="infos-text">{{defaultAddress.phoneNum}}</span>
                        </li>
                        <li>
                            <span class="infos-title">收货地址：</span>
                            <span class="infos-text">{{defaultAddress.address}}</span>
                        </li>
                    </ul>
                    <!-- 按钮组 -->
                    <div class="btn-group">
                        <button style="margin-right:10px;" @click="dialogVisible = true">切换地址</button>
                        <button style="margin-left:10px;" @click="newAddress=true">新建地址</button>
                    </div>
                </div>
                <!-- <div class="infos-bottom">
                    <span>默认地址</span>
                </div> -->
            </div>
            <!-- 配送时间 -->
            <!-- <div class="delivery-time">
                <p>配送时间</p>
                <div class="choose-time">
                    <span  @click="changeDeliveryTime(item)" v-for="item in chooseDeliveryTime" :key="item.key" :class="{isOrange:item.isOrange}">{{item.text}}</span>
                </div>
            </div> -->
            <!-- 支付方式 -->
            <div class="payment">
                <p>支付方式</p>
                <div class="choose-payment">
                    <span>货到付款</span>
                </div>
            </div>
            <!-- 发票信息 -->
            <!-- <div class="invoice-information">
                <p>发票信息</p>
                <div class="invoice-content">
                     <el-checkbox v-model="checked">我要开发票</el-checkbox>
                     <span style="margin-left:30px;">发票类型：电子普通发票</span>
                     <span>发票抬头：电子普通发票</span>
                     <span>内容：电子普通发票</span>
                     <span>发票金额：电子普通发票</span>
                     <b>发票信息</b>
                </div>
            </div> -->
            <!-- 购物清单表格 -->
            <div class="goodslist-table">
                <p>商品信息</p>
                <!-- 表格 -->
                <div id="table">
                    <div id="table-header">
                        <span class="goodsinfo" style="line-height:40px">商品信息</span>
                        <span class="price">单价</span>
                        <span class="amount">数量</span>
                        <span class="subtotal">小计</span>
                        <span class="realpay">实付</span>
                    </div>
                    <!-- 表格主体 -->
                    <div class="table-line clearfix" v-for="item in tableList" :key="item.key">
                        <div class="goodsinfo clearfix">
                            <img :src="item.src" alt="">
                            <div class="goodsinfo-right">
                                <span class="infotitle" >{{item.title}}</span><br>
                                <span>{{item.params}}</span>
                            </div>
                        </div>
                        <div class="price">￥ {{item.price}}</div>
                        <div class="amount">{{item.amount}}</div>
                        <div class="subtotal">￥ {{item.subtotal}}</div>
                        <div class="realpay">￥ {{item.subtotal}}</div>
                    </div>
                </div>
            </div>
            <!-- 金额明细 -->
            <div class="price-detail">
                <p>金额明细</p>
                <!-- <orderList></orderList> -->
                <div class="orderList">
                    <ul class="clearfix">
                        <li><span>商品总数</span><span>{{goodsAmount}}</span></li>
                        <!-- <li><span>商品总价</span><span class="red">￥1245</span></li> -->
                        <!-- <li><span>活动优惠</span><span class="red">0</span></li> -->
                        <!-- <li><span>运费</span><span class="red">0</span></li> -->
                        <li><span>应付总额</span><span class="red">￥{{money}}</span></li>
                    </ul>
                 </div>
            </div>
            <!-- 提交订单按钮组 -->
            <div class="commit-group clearfix">
                <div class="group-left">
                    <p> <span>{{UserAccount}}</span>&nbsp;&nbsp;{{defaultAddress.phoneNum}}</p>
                    <p>{{defaultAddress.address}}</p>
                </div>
                <div class="group-right">
                    <button @click="toSuccess">提交订单</button>
                </div>
            </div>
        </div>
        <!-- 切换地址对话框 -->
        <el-dialog
            title="切换地址"
            :visible.sync="dialogVisible"
            width="730px"
            :before-close="handleClose"
            center>
            <div class="change-address">
                <ul>
                    <li @click="changeDefaultAddress(item)" v-for="item in addressList" :key='item.key' :class="{iscolorOrange:item.isDefault}">
                        <div class="address-item">
                            <span>收货人：</span>{{item.AddresseeName}}
                            <a :class="{isshow:item.isDefault}">默认地址</a>
                        </div>
                        <div class="address-item">
                            <span>联系方式：</span>{{item.Telephone}}
                        </div>
                        <div class="address-item">
                            <span>收货地址：</span>{{item.Province}}{{item.RegionCity}}{{item.CountyDistrict}}{{item.DetailedAddress}}
                        </div>
                    </li>
                </ul>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 新建地址dialog -->
        <el-dialog
            title="新增地址"
            :visible.sync="newAddress"
            width="730px"
            :center=true>
            <div class="addcontent">
                <div class="addline clearfix">
                    <span >所在地区：</span>
                    <v-distpicker :province="selected.province" :city="selected.city" :area="selected.area" @province="onChangeProvince" @city="onChangeCity" @area='onChangeArea'></v-distpicker>
                </div>
                <div class="addline">
                    <span >详细地址:</span>
                    <textarea placeholder="街道，门牌号等" v-model='addNewAddress.detailAddress'></textarea>
                </div>
                <div class="addline clearfix">
                    <div class="half">
                        <span >收货人:</span><input type="text" v-model="addNewAddress.consignee">
                    </div>
                    <div class="half">
                        <span>手机号码:</span><input type="text" v-model="addNewAddress.phonenum">
                    </div>
                </div>
                <!-- <div class="addline">
                    <el-checkbox  id='isdefault' v-model="addNewAddress.isDefault">设为默认</el-checkbox>
                </div> -->
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="newAddress = false">取 消</el-button>
                <el-button type="primary" @click="addAdress">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import imgUrl from '../../../assets/common/logo.png'
// import orderList from 'components/myOrder/orderList'
export default {
    name:'configureRecipient',
    components:{
        // orderList,
    },
    data(){
        return{
            UserAccount:'',
            checked:true,
            postInfos:[],
            goodsAmount:'',
            money:0,
            defaultAddress:{
                name:'',
                phoneNum:'',
                address:'',
                Province:'',
                RegionCity:'',
                CountyDistrict:'',
                DetailedAddress:''
            },
            dialogVisible:false,//修改密码弹窗
            newAddress:false,//新建地址对话框
            chooseDeliveryTime:[//选择配送时间
                {text:'不限送货时间：周一至周日',isOrange:true},
                {text:'不限送货时间：周一至周日',isOrange:false},
                {text:'不限送货时间：周一至周日',isOrange:false}
            ],
            tableList:[
                // {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
            ],
            addressList:[
                // {name:'张三',tell:'18732492348',address:'多喝一点酒，多吹一点风，能不能解放',isDefault:true},
                // {name:'张三',tell:'18732492348',address:'多喝一点酒，多吹一点风，能不能解放',isDefault:false},
                // {name:'张三',tell:'18732492348',address:'多喝一点酒，多吹一点风，能不能解放',isDefault:false},
            ],
             addNewAddress:{//新增地址
                detailAddress:'',
                consignee:'',
                phonenum:'',
                isDefault:false,
            },
            selected:{
                province:'广东省',
                city:'深圳市',
                area:'福田区'
            },
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.UserAccount=localStorage.getItem('UserAccount');
            this.postInfos=JSON.parse(localStorage.getItem('cartList'));
            this.requestAddress();
            this.tableInit();
        },
        tableInit(){
            // {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
            for(let i=0;i<this.postInfos.length;i++){
                this.tableList.push({
                    src:this.postInfos[i].src,
                    title:this.postInfos[i].title,
                    params:this.postInfos[i].params,
                    price:this.postInfos[i].price,
                    subtotal:this.postInfos[i].subtotal,
                    amount:this.postInfos[i].amount,
                    CommodityNumber:this.postInfos[i].CommodityNumber
                })
                // this.money=this.money+this.postInfos[i].subtotal*1;
            }
            this.goodsAmount=this.tableList.length;
            this.tableList.forEach(e=>{this.money+=parseInt(e.amount)*parseInt(e.price);})
            
        },
        requestAddress(){
             this.axios.post("/Address/SelectAddressInfo", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "SelectAddressInfo",
                    LoginUser:'2',
                    UserAccount:this.UserAccount,
                    })
                    .then(
                    response => {
                        let data=response.data;
                        // console.log(data)
                        this.addressList.length=0;
                        for(let i=0,len=data.AddressId.length;i<len;i++){
                            this.addressList.push({
                                AddresseeName:data.AddresseeName[i],
                                Telephone:data.Telephone[i],
                                Province:data.Province[i],
                                RegionCity:data.RegionCity[i],
                                CountyDistrict:data.CountyDistrict[i],
                                DetailedAddress:data.DetailedAddress[i],
                                Postalcode:data.Postalcode[i],
                                AddressId:data.AddressId[i],
                                AddressType:data.AddressType[i],
                                isDefault:data.AddressType[i]=='0'?true:false
                            })
                        }
                        // console.log(this.addressList)
                        this.addressList.forEach(e=>{
                            if(e.AddressType=='0'){
                                // this.defaultAddress.name=e.AddresseeName;
                                // this.defaultAddress.phoneNum=e.telephone;
                                let address=e.Province+e.RegionCity+e.CountyDistrict+e.DetailedAddress;
                                // console.log('000')
                                this.$set(this.defaultAddress, `name`, e.AddresseeName)
                                this.$set(this.defaultAddress, `phoneNum`, e.Telephone)
                                this.$set(this.defaultAddress, `address`, address)
                                this.$set(this.defaultAddress, `Province`, e.Province)
                                this.$set(this.defaultAddress, `RegionCity`, e.RegionCity)
                                this.$set(this.defaultAddress, `CountyDistrict`, e.CountyDistrict)
                                this.$set(this.defaultAddress, `DetailedAddress`, e.DetailedAddress)
                            }
                        })
                        // this.rest=10-this.addressList.length*1
                        
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        },
        onChangeProvince(data){
            this.selected.province=data.value;
        },
        onChangeCity(data){
            this.selected.city=data.value;
        },
        onChangeArea(data){
            this.selected.area=data.value;
        },
        changeDefaultAddress(item){
            this.addressList.forEach(e=>e.isDefault=false)
            item.isDefault=true;
            let obj=`[["UserAccount","AddressId"],["${this.UserAccount}","${item.AddressId}"]]`
                console.log(obj)
                 this.axios.post("/Address/UpdateDefaultAddress", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "UpdateDefaultAddress",
                    LoginUser:'2',
                    DATA:encodeURI(obj),
                    })
                    .then(
                    response => {
                        console.log(response)
                        this.requestAddress();
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        },
         handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        changeDeliveryTime(val){
            this.chooseDeliveryTime.forEach(e=>e.isOrange=false);
            val.isOrange=true;
        },
        toSuccess(){
            //提交订单
            
            //    let obj=`[["UserAccount","AddressId"],["${this.UserAccount}","${item.AddressId}"]]`
            let arr=[];
            this.postInfos.forEach(e=>{
                arr.push(`${e.title}`)
            })
            
            let str='"CommodityName":"'+arr+'"';
            console.log(str)
               this.axios.post("/Cart/Settlement", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "Settlement",
                    LoginUser:'2',
                    UserAccount:this.UserAccount,
                    CommodityName:str,
                    AddresseeName:this.defaultAddress.name,
                    Telephone:this.defaultAddress.phoneNum,
                    Province:this.defaultAddress.Province,
                    RegionCity:this.defaultAddress.RegionCity,
                    CountyDistrict:this.defaultAddress.CountyDistrict,
                    DetailedAddress:this.defaultAddress.DetailedAddress,
                    })
                    .then(
                    response => {
                        console.log(response)
                        if(response.data.RETURNCODE=='200'){
                            localStorage.setItem('cartTotalPrice',this.money)
                            this.$router.push('submitOrderSuccess')
                        }
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
            
        },
        addAdress(){
            console.group(this.selected)
            console.group(this.addNewAddress)
            this.newAddress=false;
             let obj = '[["UserAccount","AddresseeName","Telephone","Province","RegionCity","CountyDistrict","DetailedAddress","Postalcode"],["'+this.UserAccount+'","'+this.addNewAddress.consignee+'","'+this.addNewAddress.phonenum+'","'+this.selected.province+'","'+this.selected.city+'","'+this.selected.area+'","'+this.addNewAddress.detailAddress+'","0"]]';
            console.log(obj)
            this.axios.post("/Address/AddAddressInfo", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "AddAddressInfo",
                    LoginUser:'2',
                    DATA:encodeURI(obj),
                    })
                    .then(
                    response => {
                        // let data=response.data;
                        console.log(response)
                        if(response.data.DATA=='1'){
                            //   this.addressList.push({
                            //     AddresseeName:this.addNewAddress.consignee,
                            //     Telephone:this.addNewAddress.phonenum,
                            //     Province:this.selected.province,
                            //     RegionCity:this.selected.city,
                            //     CountyDistrict:this.selected.area,
                            //     DetailedAddress:this.addNewAddress.detailAddress,
                            //     Postalcode:'0',
                            //     // AddressId:data.AddressId[i],
                            //     // AddressType:data.AddressType[i]
                            // })
                            this.requestAddress();
                        }
                                    
                            this.addNewAddress.detailAddress='';
                            this.addNewAddress.consignee='';
                            this.addNewAddress.phonenum='';
                            this.addNewAddress.isDefault=false;
                        
                        // this.addressList.push();

                        
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        },
    },
}
</script>
<style scoped>
#receive{
    /* width: 200px; */
    min-height:500px ;
    background: #f2f2f2;
    padding: 50px 0 60px;
}
.receive-body{
    width: 1200px;
    min-height:300px;
    background: #fff;
    padding: 40px 40px 0;
    margin: 0 auto;
    border: 1px solid rgb(221,221,221)
}
.receive-infos{
    width: 1120px;
    height: 221px;
    /* background: yellowgreen; */
}
.infos-title{
    display: inline-block;
    width: 70px;
    height: 33px;
    vertical-align: top;
    text-align: left;
    font-size: 14px;
}
.infos-content{
    width: 100%;
    height: 147px;
    padding: 0 30px;
    position: relative;
    border: 1px solid rgb(221,221,221);
}
.infos-content p{
    height: 38px;
    line-height: 56px;
    color: rgb(244,91,8);
    text-align: left;
}
.infos-content p span{
    position: relative;
    bottom: 6px;
    
}
.infos-content img{
    /* width: 20px; */
    /* height: 25px; */
    /* margin-top: 14px; */
    position: relative;
    top: -4px;
} 
.infos-content ul{
    height: 76px;
}
.infos-content li{
    list-style: none;
    text-align: left;
    height: 26px;
    line-height: 26px;
}
li .infos-title{
    color: black;
    font-size: 14px;
}
li .infos-text{
    color: #999;
    font-size: 14px;
}
.btn-group{
    position: absolute;
    width: 245px;
    height: 127px;
    line-height: 127px;
    top: 0;
    right: 0;
}
.btn-group button{
    width: 80px;
    height: 30px;
    line-height: 30px;
    border: 1px solid rgb(244,91,8);
    color: rgb(244,91,8);
    background: #fff;
    outline: none;
}
div.infos-bottom{
    height: 41px;
    line-height: 41px;
    text-align: right;
    color: rgb(244,91,8);
    padding-right: 58px;
}
/* 配送时间 */
.delivery-time{
    height: 126px;
    text-align: left;
}
.isOrange{
    color: rgb(244,91,8) !important;
    border-color: rgb(244,91,8) !important;
}
.delivery-time>p{
    height: 34px;
    text-align: left;
    vertical-align: top;
    font-size: 14px;
}
.delivery-time span{
    display: inline-block;
    width: 260px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    font-size: 14px;
    border: 1px solid rgb(221,221,221);
    margin-right:20px;
}
/* 支付方式 */
.payment{
    height: 125px;
    font-size: 14px;
    text-align: left;
}
.payment p{
    height: 34px;
    text-align: left;
    vertical-align: top;
    font-size: 14px;
}
.choose-payment span{
    display: inline-block;
    width: 160px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    font-size: 14px;
    border: 1px solid rgb(244,91,8);
    color: rgb(244,91,8);
}
/* 发票信息 */
.invoice-information{
    height: 161px;
}
.invoice-information p,.goodslist-table p{
    height: 34px;
    text-align: left;
    vertical-align: top;
    font-size: 14px;
}
.invoice-content{
    height: 90px;
    line-height: 90px;
    padding: 0 30px;
    font-size: 14px;
    text-align: left;
    position: relative;
    border: 1px solid rgb(221,221,221);
}
.invoice-content span{
    display: inline-block;
    color: #999;
    margin-right: 20px;
}
.invoice-content b{
    float: right;
    color: rgb(34,108,145)
}
.goodslist-table{
    padding-bottom: 40px;
}
/* 表格 */
#table-header{
        /* width: 930px; */
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background: url(../../../assets/common/shadow.png);
        border: 1px solid rgb(221,221,221);
    }
    #table-header span{
        /* display:inline-block; */
        float: left;
    }
    .goodsinfo{
        width: 488px;
        line-height: 14px;
    }
    .price{width: 250px;}
    .amount{width: 140px;}
    .subtotal{width: 140px;}
    .realpay{width: 98px;}
    .table-line{
        /* width: 930px; */
        height: 90px;
        line-height: 90px;
        border: 1px solid rgb(221,221,221);
        border-top: 0;
    }
    .table-line>div{
        float: left;
        text-align: center;
    }
    .goodsinfo img{
        width: 60px;
        height: 60px;
        margin: 16px 0 0 16px;
        float: left;
    }
    .goodsinfo-right{
        float: left;
        margin:20px 0 0 14px;
        font-size: 12px;
        color: #999;
    }
    .infotitle{
        font-size: 14px;
        color: black;
        line-height: 20px;
    }
    /* 金额明细 */
    .price-detail{
        width: 1120px;
        /* height: 215px; */
    }
    .price-detail p{
        height: 34px;
        text-align: left;
        vertical-align: top;
        font-size: 14px;
        border-bottom: 1px dashed rgb(221,221,221);
    }
     .orderList{
        /* width: 930px; */
        /* height: 270px; */
        padding: 20px 0;
    }
    .orderList li{
        list-style: none;
        font-size: 14px;
        text-align: right;
        height: 26px;
        line-height: 26px;
    }
    .orderList li span:first-child{
        float: left;
        width: 1000px;
        text-align: right;
    }
    .orderList li span.red{
        color: rgb(255,32,64);
    } 
    .orderList li:last-child{
        margin-top: 30px;
    }
    .orderList li:last-child .red{
        font-size: 16px;
        font-weight: 600;
    }
    /* 提交订单 */
    .commit-group{
        width: 1120px;
        height: 90px;
        border-top: 1px solid rgb(221,221,221);
    }
    .group-left{
        width: 415px;
        height: 90px;
        text-align: left;
        padding:30px 0 0 14px; 
        font-size: 14px;
        float: left;
    }
    .group-right{
        width: 245px;
        height: 90px;
        line-height: 90px;
        float: right;
        text-align: right;
    }
    .group-right button{
        width: 180px;
        height: 50px;
        line-height: 50px;
        background: rgb(244,91,8);
        color: #fff;
        text-align: center;
        outline: none;
        border: 1px solid rgb(244,91,8);
        font-size: 14px;
    }
    /* 切换地址对话框 */
    /* .change-address{ */
        /* height: 500px;
        background: yellow; */
    /* } */
    .change-address li{
        height: 110px;
        padding: 20px 24px;
        margin-bottom:20px;
        list-style: none;
        text-align: left;
        font-size: 14px;
        line-height: 22px;
        color: black;
        border: 1px solid rgb(221,221,221);
    }
    .address-item a{
        float: right;
        opacity: 0;
        color: rgb(244,91,8);
    }
    .isshow{
        opacity: 1 !important;
    }
    .iscolorOrange{
        border-color:rgb(244,91,8) !important;
    }
    .address-item span{
        display: inline-block;
        width: 70px;
        text-align: left;
    }
    .el-dialog__header{
        text-align: left;
    }
      #addcontent  .addline{
        height: 72px;
        line-height: 72px;
    }
    #addcontent  .title{
            float: left;
            width: 90px;
            color: red
        }
    #addcontent   textarea{
            width: 570px;
            height: 90px;
            padding: 14px;
            color: #999;
            font-size: 14px;
            resize: none;
        }
</style>
<style>
.distpicker-address-wrapper select{
    width: 187px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #999;
}
.distpicker-address-wrapper{
    width: 580px;
    float: left;
}
.addline{
    margin: 16px 0;
}
.addline>span,.addline>.half>span{
    float: left;
    width: 90px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
}
.half{
    width: 50%;
    float: left;
}
.half>input{
    width: 230px;
    height: 40px;
    line-height: 40px;
    padding-left: 14px;
    color: #999;
    border: 1px solid rgb(221,221,221);
    outline: none;
}
.addline textarea{
    width: 570px;
    height: 90px;
    padding: 14px;
    color: #999;
    font-size: 14px;
    resize: none;
    border: 1px solid rgb(221,221,221)
}
.isdefault{
    margin-left: 90px;
    height: 40px;
    line-height: 40px;
}
</style>

