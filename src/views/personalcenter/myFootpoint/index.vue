<template>
    <div class="contents">
        <div class="title">
            我的足迹 
            <!-- <a @click="deleteAll()"> +全部清除</a> -->
        </div>
        <div class="contentbox">
            <Timeline class="clearfix">
                <TimelineItem v-for="(item) in footpointList" :key="item.key" color="rgb(196,90,32)">
                    <p class="time">{{item.date}} <span style="margin-left:10px;display:inline-block;">{{item.time}}</span> </p>
                    <div class="content">
                        <div class="clearfix item-content">
                            <div   @mouseenter="enter(val)" class="item" @click="toGoodsdetail(val)" :class="{itemEnter:val.isshow}" v-for="val in item.goodslist" :key="val.key">
                                <img :src="val.src" alt="">
                                <h5 style='line-height:30px;font-size:14px;text-align:left;'>{{val.title}}</h5> 
                                <h5 style='text-align:left;font-size:14px;color:#ff2040;'>￥{{val.price}}</h5>
                                <!-- <span class="close" :class="{show:val.isshow}" @click="closegoods(index , item.goodslist)"></span> -->
                            </div>
                        </div>
                    </div>
                </TimelineItem>
                
            </Timeline>
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
import {bus} from '../../../bus.js'
import imgurl from '../../../assets/common/blockchain.png'
export default {
    name:'personalSetting',
    data(){
        return{
            useraccount:"12345632",
            dialogVisible:false,
            num:"18689207260",
            deleteGoods:{
                index:'',
                list:''
            },
            footpointList:[
                // {date:"2018.06.05",goodslist:[
                //     {src:imgurl,title:"NIKE 拖鞋",price:'28',isshow:false},
                //     {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                //     {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                //     {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                //     {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                //     {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'292',isshow:false},
                //     {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                   
                // ]},
                // {date:"2018.06.03",goodslist:[
                //     {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                //     {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                //     {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                //     {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                //     {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                //     {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                //     {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                // ]}
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
    mounted(){
        this.init();
        localStorage.setItem('changeItem',5)
    },
    methods:{
        toGoodsdetail(val){
            // this.$router.push({path:`../../nav/goodsDetail/${val.title}`})
        },
        init(){
              this.useraccount=localStorage.getItem('UserAccount');
              this.axios.post("/Browse/FavoriteCommodity", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "0",
                    INDEX: "20170713170325",
                    METHOD: "FavoriteCommodity",
                    LoginUser:'2',
                    Status:'0',
                    UserAccount:this.useraccount,
                    CommodityNumber:'1008204'
                    })
                    .then(
                    response => {
                        // console.log(response)
                        let data=response.data.DATA[0];
                        let VisitTime=data.VisitTime;
                        let CommodityNumber=data.CommodityNumber;
                        let CommodityInfo=data.CommodityInfo;
                        
                        this.footpointList.length=0;
                        for(let i=0,len=CommodityInfo.length;i<len;i++){
                            VisitTime[i]=VisitTime[i].split('+');
                            let FilePath=CommodityInfo[i].FilePath;
                            FilePath=FilePath[0].split(',')[0]+FilePath[0].split(',')[1];
                            console.log(FilePath)
                            this.footpointList.push({
                                date:VisitTime[i][0],
                                time:VisitTime[i][1],
                                goodslist:[
                                    {
                                        src:FilePath,
                                        title:CommodityInfo[i].CommodityName[0],
                                        price:CommodityInfo[i].SupplyMoney[0],
                                        isshow:false
                                    }
                                ]
                            })
                        }
                    },
                    response => {
                        console.log("请求失败");
                        console.log(response);
                    }
                    );
        },
        enter(vals){//鼠标进入 显示关闭按钮事件
                this.footpointList.forEach(item=>{
                    item.goodslist.forEach(val=>{
                        val.isshow=false;
                    })
                })
                // for(let)
                vals.isshow = true;
            },
            closegoods(val , list){
                //val为删除商品的下标
                //list为 当前商品所在的数组
                //实际中还需要向后台发送删除请求
                this.dialogVisible=true;
                this.deleteGoods.index=val;
                this.deleteGoods.list=list;
            },
            deleteAll(){
                this.footpointList.forEach(item=>item.goodslist=[])
            },
            ensureDelete(){//确定删除某一个商品
                this.dialogVisible=false;
                this.deleteGoods.list.splice(this.deleteGoods.index,1);
                this.deleteGoods.list='';
                this.deleteGoods.index='';
            },
    }
}
</script>
<style>
#dialog_delete{
    text-align: center;
}
</style>

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
        padding-left: 5px;
        /* width: 800px; */
        height: auto;
        /* background: burlywood; */
    }
.red{
    color: rgb(255,64,32)
}
.ivu-timeline{
    margin-top: 38px;
}
.contents{
    width: 990px;
    min-height: 660px;
    font-size: 14px;
    background: #fff;
}
.title{
        width: 990px;
        height: 44px;
        background:url(../../../assets/common/shadow.png);
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
    height: auto;
    background: #fff;
    padding: 0 40px 40px;
    font-size: 14px;
}
.item img{
    width: 190px;
    height: 200px;
    /* background: red; */
}

.item-content{
    /* float: left; */
    /* width: 880px; */
    height: auto;
}
.item{
    float: left;
    width: 220px;
    height: 295px;
    padding: 15px 15px 0;
    list-style: none;
    position: relative;
    border: 1px solid transparent;
}
.itemEnter{
    border: 1px solid rgb(221,221,221) !important;
}
.close{
    position: absolute;
    top: 0;
    right: 0;
    width: 28px;
    height: 28px;
    background:url(../../../assets/common/delete_fp.png);
    color: #fff;
    /* border-bottom-left-radius:50%;  */
    display: none;
}
.show{
    display: block;
}
</style>


