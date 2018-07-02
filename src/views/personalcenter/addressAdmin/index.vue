<template>
    <div class="content">
        <div class="title">
            收货地址 <span>(地址最多<span class="red">10</span>条，还能保存<span class="red">{{rest}}</span>条)</span>
            <a class="orange" @click="dialogVisible=true"> + 新增地址</a>
        </div>
        <div class="contentbox">
                <div class="section" v-for="(item,index) in addressList" :key="item.key">
                    <ul>
                        <li class="half">
                            <span class="stitle">收货人:</span>
                            <span class="innertext">{{item.AddresseeName}}</span>
                        </li>
                        <li class="half">
                            <span class="stitle">联系方式:</span>
                            <span class="innertext">{{item.Telephone | numfilter}}</span>
                        </li>
                        <li>
                            <span class="stitle">所在地区:</span>
                            <span class="innertext">{{item.Province}}{{item.RegionCity}}{{item.CountyDistrict}}</span>
                        </li>
                        <li class="last">
                            <span class="stitle">详细地址:</span>
                            <span class="innertext">{{item.DetailedAddress}}</span>
                        </li>
                    </ul>
                    <div class="btncontent">
                        <input type="button" @click="setDefaultAddress(item,index)" :value="item.AddressType=='1'?'设为默认':'默认地址'">
                        <div class="btngroup">
                            <a @click="openEditAddressDialog(item,index)">编辑</a>
                            <a @click="showDeleteAddressDialog(index,item)">删除</a>
                        </div>
                    </div>
                </div>
        </div>
        <!-- 新增地址dialog -->
        <el-dialog
            title="新增地址"
            :visible.sync="dialogVisible"
            width="730px"
            :center=true>
            <div class="addcontent">
                <div class="addline clearfix">
                    <span >所在地区：</span>
                    <v-distpicker :province="selected.province" :city="selected.city" :area="selected.area" ></v-distpicker>
                </div>
                <div class="addline">
                    <span >详细地址:</span>
                    <textarea placeholder="街道，门牌号等" v-model="addNewAddress.detailAddress"></textarea>
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
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addAdress">确 定</el-button>
            </span>
        </el-dialog>
          <!-- 删除地址dialog -->
        <el-dialog
            title="删除"
            :visible.sync="deleteAddress"
            width="30%"
            :center=true>
            <span>确定删除本条地址吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="deleteAddress = false">取 消</el-button>
                <el-button type="primary" @click="openDeleteAddressDialog">确 定</el-button>
            </span>
        </el-dialog>
          <!-- 编辑地址dialog -->
          <el-dialog
            title="编辑地址"
            :visible.sync="editAddressDialog"
            width="730px"
            :center=true>
            <div class="addcontent">
                <div class="addline clearfix">
                    <span >所在地区：</span>
                    <v-distpicker :province="editselected.province" :city="editselected.city" :area="editselected.area" ></v-distpicker>
                </div>
                <div class="addline">
                    <span >详细地址:</span>
                    <textarea placeholder="街道，门牌号等" v-model='editAddress.detailAddress'></textarea>
                </div>
                <div class="addline clearfix">
                    <div class="half">
                        <span >收货人:</span><input type="text" v-model="editAddress.consignee">
                    </div>
                    <div class="half">
                        <span>手机号码:</span><input type="text" v-model="editAddress.phonenum">
                    </div>
                </div>
                <!-- <div class="addline">
                    <el-checkbox  class='isdefault' v-model="editAddress.isDefault">设为默认</el-checkbox>
                </div> -->
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editAddressDialog = false">取 消</el-button>
                <el-button type="primary" @click="EditAddressDialog()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
export default {
    name:'addressAdmin',
    components:{
        VDistpicker
    },
    data(){
        return{
            useraccount:"12345632",
            num:"18689207260",
            // rest:3,//剩余可添加地址
            index:'',
            checked:false,//新增地址是否设为默认
            dialogVisible:false,//显示隐藏添加地址对话框
            deleteAddress:false,//显示隐藏删除地址对话框
            editAddressDialog:false,//显示隐藏编辑地址对话框
            AddressId:'',
            addressList:[
                // {
                //                 AddresseeName:1,
                //                 Telephone:1,
                //                 Province:1,
                //                 RegionCity:1,
                //                 CountyDistrict:1,
                //                 DetailedAddress:1,
                //                 Postalcode:1,
                //                 AddressId:1,
                //                 AddressType:1
                // }
            ],
            AddressId:'',
            selected:{
                province:'广东省',
                city:'深圳市',
                area:'福田区'
            },
            addNewAddress:{//新增地址
                detailAddress:'',
                consignee:'',
                phonenum:'',
                isDefault:false,
            },
            editselected:{//编辑地址省市区
                province:'广东省',
                city:'深圳市',
                area:'福田区'
            },
            editAddress:{//编辑地址
                detailAddress:'',
                consignee:'',
                phonenum:'',
                isDefault:false,
            }
        }
    },
    created(){
        this.PageInit();
    },
    filters:{
        numfilter(val){
            var reg = /^(\d{3})\d*(\d{4})$/;
            val=val.replace(reg, "$1****$2");
            return val;
            
        }
    },
    computed:{
        rest(){
            return 10-this.addressList.length*1
        }
    },
    methods:{
        addAdress(){
            console.log(this.selected)
            console.log(this.addNewAddress)
             let obj = '[["UserAccount","AddresseeName","Telephone","Province","RegionCity","CountyDistrict","DetailedAddress","Postalcode"],["'+this.useraccount+'","'+this.addNewAddress.consignee+'","'+this.addNewAddress.phonenum+'","'+this.editselected.province+'","'+this.editselected.city+'","'+this.editselected.area+'","'+this.addNewAddress.detailAddress+'","0"]]';
            console.log(obj)
            this.dialogVisible=false;
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
                              this.addressList.push({
                                AddresseeName:this.addNewAddress.consignee,
                                Telephone:this.addNewAddress.phonenum,
                                Province:this.editselected.province,
                                RegionCity:this.editselected.city,
                                CountyDistrict:this.editselected.area,
                                DetailedAddress:this.addNewAddress.detailAddress,
                                Postalcode:'0',
                                // AddressId:data.AddressId[i],
                                // AddressType:data.AddressType[i]
                            })
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
        showDeleteAddressDialog(index,item){
            this.AddressId=item.AddressId;
            this.index=index;
            this.deleteAddress=true;
            console.log(this.AddressId)
            console.log(this.index)
        },
        PageInit(){
             this.useraccount=localStorage.getItem('UserAccount');
             this.axios.post("/Address/SelectAddressInfo", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "SelectAddressInfo",
                    LoginUser:'2',
                    UserAccount:this.useraccount,
                    })
                    .then(
                    response => {
                        let data=response.data;
                        console.log(data)
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
                                AddressType:data.AddressType[i]
                            })
                        }
                        // this.rest=10-this.addressList.length*1
                        
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        },
        openDeleteAddressDialog(){
            //删除地址
            
            // this.deleteAddress=true;
            // console.log(index)
             this.axios.post("/Address/DelAddressInfo", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "DelAddressInfo",
                    LoginUser:'2',
                    AddressId:this.AddressId,
                    })
                    .then(
                    response => {
                        let data=response.data;
                        console.log(data)
                        this.deleteAddress=false;
                        this.addressList.splice(this.index,1);

                        
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        },
        EditAddressDialog(index,AddressId){
            //编辑地址 确定按钮
                 let obj = '[["AddressId","AddresseeName","Telephone","Province","RegionCity","CountyDistrict","DetailedAddress","Postalcode"],["'+this.AddressId+'","'+this.editAddress.consignee+'","'+this.editAddress.phonenum+'","'+this.editselected.province+'","'+this.editselected.city+'","'+this.editselected.area+'","'+this.editAddress.detailAddress+'","0"]]';
                    this.axios.post("/Address/UpdateAddressInfo", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "UpdateAddressInfo",
                    LoginUser:'2',
                    DATA:encodeURI(obj),
                    })
                    .then(
                    response => {
                        this.editAddressDialog=false;
                        if(response.data.RETURNCODE=='200'){

                        }
                        // console.log(this.index)
                            this.addressList.splice(this.index,1,{
                                AddresseeName:this.editAddress.consignee,
                                Telephone:this.editAddress.phonenum,
                                Province:this.editselected.province,
                                RegionCity:this.editselected.city,
                                CountyDistrict:this.editselected.area,
                                DetailedAddress:this.editAddress.detailAddress,
                                Postalcode:'0',
                                AddressId:this.AddressId,
                                // AddressType:data.AddressType[i]
                            })
                        
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        },
        openEditAddressDialog(item,index){
            //显示编辑地址对话框
            this.editAddressDialog=true;
            this.index=index;
            this.AddressId=item.AddressId;
             console.log(this.index)
            console.log(this.AddressId)
            console.log(this.addressList[index])
            //赋默认值
             //编辑地址省市区
                this.editselected.province=this.addressList[index].Province;
                this.editselected.city=this.addressList[index].RegionCity;
                this.editselected.area=this.addressList[index].CountyDistrict;
            //编辑地址
                this.editAddress.detailAddress=this.addressList[index].DetailedAddress;
                this.editAddress.consignee=this.addressList[index].AddresseeName;
                this.editAddress.phonenum=this.addressList[index].Telephone;
            
        },
        setDefaultAddress(item,index){
            // console.log('1')
            // console.log('AddressType'+AddressType)
            //设置默认地址
            if(item.AddressType){
                console.log('isNodefault')
                this.addressList.forEach(e=>e.AddressType=1)
                item.AddressType=0;
                this.AddressId=item.AddressId;
                // console.log(this.addressList)
                let obj=`[["UserAccount","AddressId"],["${this.useraccount}","${this.AddressId}"]]`
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
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
            }
        }

    }
}
</script>
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

<style scoped lang='less'>
.red{
    color: rgb(255,64,32)
}
.content{
    width: 990px;
    min-height: 660px;
    font-size: 14px;
}
.title{
        width: 990px;
        height: 44px;
        background: url(../../../assets/common/shadow.png);
        line-height:44px;
        text-align: left;
        padding-left: 24px;
        font-size: 16px;
        border-top:2px solid rgb(241,91,8);
        border-bottom:1px solid rgb(221,221,221);
        padding-right: 40px;
}
.title a{
    float: right;
    color: black;
}
.title>span{
    font-size: 14px;
}
.contentbox{
    width: 990px;
    min-height: 616px;
    background: #fff;
    padding: 0 40px 40px;
    font-size: 14px;
}
.section{
    width: 910px;
    height: 174px;
    position: relative;
    padding-bottom:32px;
    padding-top: 40px;
    border-bottom: 1px dotted rgb(221,221,221)
}
.section ul{
    width: 704px;
    height: 142px;
}
.section li{
    width: 100%;
    float: left;
    text-align: left;
    list-style: none;
    height: 36px;
    line-height: 36px;
}
.section .half{
    width: 50%;
}
.stitle{
    display: inline-block;
    width: 87px;
    text-align: left;
    font-size: 14px;
    color: black;
}
.innertext{
    text-align: left;
    color: #999;
}
.last .stitle{
    float: left;
}
.last .innertext{
    float: left;
    width: 616px;
    line-height: 36px;
}
.btncontent{
    width: 160px;
    height: 180px;
    position: absolute;
    top: 62px;
    right: 0;
}
.btncontent input{
    width: 100px;
    height: 32px;
    line-height: 32px;
    border: 1px solid rgb(241,91,8);
    color: rgb(241,91,8);
    outline: none;
    background: #fff;
}
.btncontent a{
    font-size: 14px;
    color: rgb(34,108,145);
    display: inline-block;
    margin:20px  4px 0 0;
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


