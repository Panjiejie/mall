<template>
    <div class="contents">
        <div class="title">
            我的足迹 
            <a @click="deleteAll()"> +全部清除</a>
        </div>
        <div class="contentbox">
            <Timeline>
                <TimelineItem v-for="item in footpointList" :key="item.key" color="rgb(196,90,32)">
                    <p class="time">{{item.date}}</p>
                    <div class="content">
                        <div class="clearfix item-content">
                            <div   @mouseenter="enter(val)" class="item" v-for="(val , index) in item.goodslist" :key="val.key">
                                <img :src="val.src" alt="">
                                <h5>{{val.title}}</h5> 
                                <h5>{{val.price}}</h5>
                                <span class="close" :class="{show:val.isshow}" @click="closegoods(index , item.goodslist)">×</span>
                            </div>
                        </div>
                    </div>
                </TimelineItem>
                
            </Timeline>
        </div>
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
            footpointList:[
                {date:"2018.06.05",goodslist:[
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                   
                ]},
                {date:"2018.06.03",goodslist:[
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                    {src:imgurl,title:"NIKE 耐克女子 两道杠 拖鞋",price:'298',isshow:false},
                ]}
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
    methods:{
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
                console.log(val);
                list.splice(val,1);
            },
            deleteAll(){
                this.footpointList.forEach(item=>item.goodslist=[])
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
}
.title{
        width: 990px;
        height: 44px;
        /* background: blueviolet; */
        background: rgb(240,240,240);
        line-height:44px;
        text-align: left;
        padding-left: 24px;
        font-size: 16px;
        border-top:2px solid rgb(241,91,8);
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
    width: 200px;
    height: 200px;
}

item-content{
    float: left;
    /* width: 880px; */
    height: auto;
}
.item{
    float: left;
    width: 220px;
    height: 295px;
    list-style: none;
    position: relative;
    border: 1px solid transparent;
}
.item:hover{
    border: 1px solid #999;
}
.close{
    position: absolute;
    top: 0;
    right: 0;
    width: 28px;
    height: 28px;
    background: rgb(241,91,8);
    color: #fff;
    border-bottom-left-radius:50%; 
    display: none;
}
.show{
    display: block;
}
</style>


