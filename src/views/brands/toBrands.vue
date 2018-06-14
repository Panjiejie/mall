<template>
    <div class="to-brands-content">
        <div class="to-brands-body">
            <p class="brand-header">
                <router-link to="/">首页 ></router-link>
                <router-link to="toBrands">品牌</router-link>
            </p>
            <!-- 分类产地参数选择列表 -->
              <div class="params-list">
                    <div class="list-item clearfix">
                        <div class="list-item-title">分类：</div>
                        <div class="list-item-content">
                            <span class='brands'  @click='chooseSorts(item,params.classify)' :class='{isshoworange:item.isChecked}' v-for='item in params.classify' :key="item.key">{{item.name}}</span>
                        </div>
                    </div>
                    <div class="list-item clearfix">
                            <div class="list-item-title">品牌：</div>
                            <div class="list-item-content origin-content">
                                <span class='brands'  @click='chooseSorts(item,params.origin)' :class='{isshoworange:item.isChecked}' v-for='item in params.origin' :key="item.key">{{item.name}}</span>
                                <a>更多</a>
                            </div>
                    </div>
                    <div class="list-item clearfix">
                            <div class="list-item-title">品牌：</div>
                            <div class="list-item-content">
                                <span class='brands'  @click='chooseSorts(item,params.letter)' :class='{isshoworange:item.isChecked}' v-for='item in params.letter' :key="item.key">{{item.name}}</span>
                            </div>
                    </div>
            </div>
            <ul class="brand-detail-list clearfix">
                <li class="brand-list-item clearfix" @click="toBrandDetail" v-for="item in brandItemList" :key="item.key">
                    <div class="item-left-content">
                        <div class="location-content">
                            <img class='location' src="../../assets/common/kefu.png" alt="">{{item.production}}
                        </div>
                        <div>
                            <img class='brand-logo' :src="item.brandLogo" alt="">  
                        </div>
                        <h6>{{item.brandName}}</h6>
                        <p>{{item.brandMatto}}</p>
                    </div>
                    <img :src="item.brandImg" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import img from '../../assets/common/kefu.png'
import imgUrl from '../../assets/goodsGuide/bg.png'
export default {
    name:'toBrands',
    data(){
        return{
            brandItemList:[
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
                {brandLogo:img,brandName:'李宁',brandMotto:'坚守中国原创初心',brandImg:imgUrl,production:'中国'},
            ],
            params:{
                classify:[
                    {name:'全部',value:'0',isChecked:true},
                    {name:'温暖家具',value:'0',isChecked:false},
                    {name:'健康美体',value:'0',isChecked:false},
                    {name:'美味餐厨',value:'0',isChecked:false},
                    {name:'旅游出行',value:'0',isChecked:false},
                ],
                origin:[
                    {name:'全部',value:'0',isChecked:true},
                    {name:'韩国',value:'0',isChecked:false},
                    {name:'日本',value:'0',isChecked:false},
                ],
                letter:[
                    {name:'全部',value:'0',isChecked:true},
                    {name:'#',value:'0',isChecked:false},
                    {name:'A',value:'A',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                    {name:'B',value:'B',isChecked:false},
                ]
            }
                
            
        }
    },
    methods:{
        chooseSorts(item,list){
            list.forEach((val)=>(val.isChecked=false));
            item.isChecked=true;
        },
        toBrandDetail(){
            this.$router.push('toBrandDetail')
        }
    },
}
</script>
<style scoped>
.to-brands-content{
    min-height: 500px;
    background: #f2f2f2;
}
.to-brands-body{
    width: 1200px;
    min-height: 600px;
    margin: 0 auto;
}
.brand-header{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    text-align: left;
}
.brand-header a{
    color: #333;
}
.brand-header a:hover{
    color: #333;
}
.params-list{
    width: 100%;
    min-height: 190px;
    padding: 20px 30px;
    margin-bottom: 40px;
    background: #fff;
    border: 1px solid rgb(221,221,221);
}
 .list-item{
        position: relative;
        width: 1140px;
        font-size: 14px;
        border-bottom: 1px dashed rgb(221,221,221);
    }
    .params-list .list-item:last-child{
        border-bottom: 0;
    }
    .params-list .list-item:last-child span:not(:first-child){
        margin-left: 0px;
        padding: 8px 12px;
    }
    .list-item-title{
        color: rgb(51,51,51);
        float: left;
        height: 50px;
        line-height: 50px;
    }

    .list-item-content{
        float: left;
        width: 1098px;
    }
    .brands{
        float: left;
        height: 32px;
        line-height: 15px;
        margin:8px 0 8px 40px;
        padding: 8px 16px;
        border: 1px solid transparent;
        border-radius: 18px;
    }
    .isshoworange{
        /* border-color: rgb(244,91,8); */
        color: rgb(244,91,8);
    }
    .origin-content a{
        width: 80px;
        height: 50px;
        line-height:50px;
        position: absolute;
        top: 0;
        right: 0;
        text-align: right;
    }
    .brand-detail-list{
        width: 1200px;
        min-height: 600px;
        padding-bottom: 20px;
    }
    .brand-list-item{
        float: left;
        width: 578px;
        height: 210px;
        font-size: 14px;
        list-style: none;
        margin: 0 0 20px;
        background: #fff;
        border: 1px solid rgb(221,221,221);
    }
    .brand-detail-list li:nth-child(odd){
        margin-right: 22px;
    }
    .brand-detail-list li:nth-child(even){
        margin-left: 22px;
    }
    .item-left-content{
        width: 210px;
        height: 210px;
        float: left;
        text-align: center;
    }
    .brand-list-item>img{
        width: 366px;
        height: 210px;
        float: left;
    }
     .brand-list-item .location{
        width: 11px;
        height: 16px;
        position: relative;
        top: 2px;
        margin: 0 10px;
    }
    .brand-list-item .brand-logo{
        width: 90px;
        height: 90px;
    }
    .brand-list-item h6{
        font-size: 14px;
    }
    .brand-list-item p{
        font-size: 14px;
        color: #999;
    }
    .location-content{
        height: 36px;
        line-height: 36px;
        text-align: left;
    }
</style>

