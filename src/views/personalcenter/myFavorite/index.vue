<template>
    <div class="contents">
        <div class="title">
            收藏的商品 
            <a  @click="deleteAll"> +全部清除</a>
        </div>
        <div class="contentbox">
             <div class="content clearfix">
                        <div class="clearfix item-content">
                            <div   @mouseenter="enter(val)" class="item" v-for="(val , index) in footpointList" :key="val.key">
                                <img :src="val.src" alt="" >
                                <div class="tmoney">
                                    <h5 style="height:30px;line-height:30px;">{{val.title}}</h5>
                                    <h5><span class="price-logo red">￥</span><span class="red" style="font-size:16px;">{{val.price}}</span></h5>
                                </div>
                                <span class="close" @click="removeGoods(index)" :class="{show:val.isshow}"></span>
                            </div>
                        </div>
             </div>      
        </div>
        <!-- 删除商品dialog -->
        <el-dialog
            title=""
            :visible.sync="dialogVisible"
            width="560px"
            :center='true'>
            <div id='dialog_delete' style='text-align:center;'>您确定要删除该商品记录吗？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="ensureDelete()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import imgurl from '../../../assets/common/blockchain.png'
export default {
    name:'personalSetting',
    data(){
        return{
            useraccount:"12345632",
            num:"18689207260",
            deleteIndex:'',
            dialogVisible:false,
            footpointList:[
                    // {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    // {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    // {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    // {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    // {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    // {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    // {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false}
                   
            ]
        }
    },
    filters:{
        numfilter(val){
            var reg = /^(\d{3})\d*(\d{4})$/;
            val=val.replace(reg, "$1****$2");
            return val;
            
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
             this.useraccount=localStorage.getItem('UserAccount');
             this.axios.post("/Browse/FavoriteCommodity", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "1",
                    INDEX: "20170713170325",
                    METHOD: "FavoriteCommodity",
                    LoginUser:'2',
                    UserAccount:this.useraccount,
                    Status:'1',
                    CommodityNumber:'1234567'
                    })
                    .then(
                    response => {
                        let data=response.data;
                        console.log(data)
                        // for(let i=0,len=data.AddressId.length;i<len;i++){
                        //     this.addressList.push({
                        //         AddresseeName:data.AddresseeName[i],
                        //         Telephone:data.Telephone[i],
                        //         Province:data.Province[i],
                        //         RegionCity:data.RegionCity[i],
                        //         CountyDistrict:data.CountyDistrict[i],
                        //         DetailedAddress:data.DetailedAddress[i],
                        //         Postalcode:data.Postalcode[i],
                        //         AddressId:data.AddressId[i],
                        //         AddressType:data.AddressType[i]
                        //     })
                        // }
                        // console.log(this.addressList)
                        
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        },
        enter(item){
             this.footpointList.forEach(item=>item.isshow=false)
                // for(let i=0;i<this.footpointList.length;i++){
                //     this.footpointList[i].isshow=false;
                // }
                item.isshow = true;
            },
        removeGoods(val){
           this.dialogVisible=true;
           this.deleteIndex=val;
        },
        ensureDelete(){
            this.dialogVisible=false;
            this.footpointList.splice(this.deleteIndex,1)
            this.deleteIndex='';
        },
        deleteAll(){
            this.footpointList=[];
        }
    }
}
</script>
<style scoped>
p{
    text-align: left;
}

 .time{
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .content{
        height: auto;
    }
.red{
    color: rgb(255,64,32)
}
.contents{
    width: 990px;
    min-height: 660px;
    font-size: 14px;
}
.title{
        width: 990px;
        height: 44px;
        /* background: blueviolet; */
        background: url(../../../assets/common/shadow.png);
        line-height:44px;
        text-align: left;
        padding-left: 24px;
        font-size: 16px;
        border-top:2px solid rgb(241,91,8);
        border-bottom: 1px solid rgb(221,221,221);
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
    height: auto;
    background: #fff;
    padding: 0 0 40px 40px;
    font-size: 14px;
}
.item img{
    width: 200px;
    height: 174px;
}

.item-content{
    float: left;
    /* width: 880px; */
    height: auto;
}
.item{
    float: left;
    width: 200px;
    height: 270px;
    margin: 38px 37.5px 0 0;
    /* padding: 15px 15px 0; */
    list-style: none;
    position: relative;
    border: 1px solid rgb(221,221,221);
}
.close{
    position: absolute;
    top: 0;
    right: 0;
    width: 28px;
    height: 28px;
    background:url(../../../assets/common/delete_fp.png);
    /* color: #fff; */
    /* border-bottom-left-radius:50%;  */
    display: none;
}
.show{
    display: block;
}
.item h5{
    text-align: left;
    font-size: 14px; 
    padding-left: 10px;
    line-height: 26px;
}
.tmoney{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    padding-top: 24px;
}
</style>


