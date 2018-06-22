<template>
    <div id="aftersale-detail">
        <!-- 我的订单 售后详情 -->
         <div class="content">
            <div class="title-content">
                <div class="imgcontent">
                    <img :src="imgUrl" alt=""> 
                    <p>已完成</p>  
                </div>
                <div class="infoscontent">
                    <div class="info">
                        <span class="title">订单编号：</span>622326482494
                    </div>
                    <div class="info">
                        <span class="title">订单编号：</span>622326482494
                    </div>
                </div>
                <!-- <button @click="toAfterSale" :class="{none:none}">申请售后</button> -->
            </div>
        </div>
        <div class="_afterSaleBody">
            <div class="steps">
                <el-steps :active="2" align-center>
                    <el-step title="提交申请" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="申请审核" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="售后收货" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="进行退款" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="处理完成" description="这是一段很长很长很长的描述性文字"></el-step>
                </el-steps>
            </div>
            <!-- 退款进度 -->
            <div class="refund">
                <span class="refund-time">2014-02-03 12:09:03</span>&nbsp;&nbsp;您的服务单财务已退款，请您注意查收
                <button>进度跟踪</button>
            </div>
            <!-- 服务单信息 -->
            <div class="serivce-info">
                <h3>服务单信息</h3>
                <div class="service-table">
                    <div class="serivce-line clearfix">
                        <span class="title">服务单号</span>
                        <span class="right">12559832034</span>
                    </div>
                    <div class="serivce-line clearfix">
                        <span class="title">申请时间</span>
                        <span class="right">12559832034</span>
                    </div>
                    <div class="serivce-line clearfix">
                        <span class="title">服务类型</span>
                        <span class="right">12559832034</span>
                    </div>
                    <div class="serivce-line clearfix">
                        <span class="title">退货原型</span>
                        <span class="right">12559832034</span>
                    </div>
                    <div class="serivce-line clearfix">
                        <span class="title">提交数量</span>
                        <span class="right">12559832034</span>
                    </div>
                    <div class="serivce-line clearfix">
                        <span class="title">联系人</span>
                        <span class="right">12559832034</span>
                    </div>
                    <div class="serivce-line clearfix">
                        <span class="title">联系电话</span>
                        <span class="right">12559832034</span>
                    </div>
                    <div class="serivce-line clearfix">
                        <span class="title">退款方式</span>
                        <span class="right">12559832034</span>
                    </div>
                    <div class="serivce-line clearfix">
                        <span class="title">退款金额</span>
                        <span class="right">12559832034</span>
                    </div>
                </div>
            </div>
            <!-- 问题描述 -->
            <div class="question-description">
                <h3 class="question_title">问题描述</h3>
                <div class='question'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti vitae dicta maiores temporibus ipsum voluptatum deserunt facilis, pariatur tenetur perspiciatis exercitationem modi expedita beatae eius ducimus culpa, nemo, nobis recusandae!</div>
            </div>
            <!-- 审核留言 -->
            <div class="review_leavewords">
                <h3>审核留言</h3>
                <div class="leaveword">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam illo laudantium facere deleniti dolorem provident non totam error impedit, maiores blanditiis consequuntur reprehenderit iste voluptate corrupti vitae sed, laboriosam quae.</div>
                <!-- 收货信息 -->
                <div class="receive_infos">
                    <ul>
                        <li><span>收货地址：</span>广东省深圳市、、、、</li>
                        <li><span>联系姓名：</span>张三</li>
                        <li><span>邮政编码：</span>123456</li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import imgUrl from '../../../../assets/index/circle_success.png'
export default {
    name:'afterSaleDetail',
    data(){
        return{
            imgUrl:imgUrl
        }
    },
}
</script>
<style lang="less" scoped>
#aftersale-detail{
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
    .info{
        height: 30px;
        line-height: 30px;
    }
    ._afterSaleBody{
        background: #fff;
        padding: 30px;
        font-size: 14px;
        .refund{
            height: 50px;
            line-height: 50px;
            margin-top: 40px;
            position: relative;
            border: 1px solid rgb(221,221,221);
            text-align: left;
            padding-left: 38px;
            .refund-time{
                color: #999;
            }
            button{
                width: 76px;
                height: 26px;
                line-height: 26px;
                border: 1px solid rgb(244,91,8);
                color: rgb(244,91,8);
                position: absolute;
                top: 12px;
                right: 20px;
            }
        }
        .serivce-info{
            padding-top: 40px;
            font-size: 14px;
            h3{
                color: #333;
                vertical-align: top;
                text-align: left;
                height: 34px;
            }
            .serivce-line{
                border-right: 1px solid rgb(221,221,221);
                // border-bottom: 1px solid rgb(221,221,221);
                span{
                    float: left;
                    height: 40px;
                    line-height: 40px;
                    border-top: 1px solid rgb(221,221,221);
                    border-left: 1px solid rgb(221,221,221);
                }
                .title{
                    width: 180px;
                    background: url(../../../../assets/common/shadow.png)
                }
                .right{
                    width: 747px;
                    text-align: left;
                    padding-left: 28px;
                }
                
            }
            .serivce-line:last-child{
                border-bottom:1px solid rgb(221,221,221)
            }
            
        }
        .question-description{
            padding-top: 36px;
                .question_title{
                    height: 36px;
                    vertical-align: top;
                    text-align: left;
                }
                .question{
                    height: 98px;
                    padding: 14px;
                    line-height: 18px;
                    border: 1px solid rgb(221,221,221);
                    text-align: left;
                }
        }
        .review_leavewords{
            height: 284px;
            padding-top: 40px;
            text-align: left;
            position: relative;
            margin-bottom: 30px;
            h3{
                height: 32px;
                vertical-align: top;
            }
            .leaveword{
                height: 210px;
                padding: 14px;
                line-height: 18px;
                border: 1px solid rgb(221,221,221);
                // text-align: left;
            }
            .receive_infos{
                height: 114px;
                padding: 18px 18px 0 30px;
                text-align: left;
                line-height: 24px;
                position: absolute;
                bottom: 20px;
                left: 0;
            }
        }
    }
}
</style>
