<template>
    <div id="content">
        <h3>售后申请</h3>
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
                  <img :src="item.imgUrl" alt="">
                  <div class="goodsinfo-right">
                    <span class="infotitle" >{{item.title}}</span><br>
                    <span>颜色：{{item.color}} 尺寸：{{item.size}}</span>
                  </div>
              </div>
              <div class="price">￥ {{item.price}}</div>
              <div class="amount">{{item.amount}}</div>
              <div class="subtotal">￥ {{item.subtotal}}</div>
              <div class="realpay">￥ {{item.net}}</div>
          </div>
        </div>
        <!-- 申请信息 -->
        <div class="applyInfo">
            <h3>申请信息</h3>
            <div class="applyInfo-content">
                <div class="reason">
                    售后原因：
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="description clearfix">
                    <span>问题描述:</span>
                    <textarea placeholder="请输入问题描述，不得少于10个字" v-model='description'></textarea>
                    <span class="rb">还可输入{{textnum}}字</span>
                </div>
                <div class="upload clearfix">
                    <span>上传凭证：</span>
                        <div class="demo-upload-list" v-for="item in uploadList" :key="item.key">
                            <template v-if="item.status === 'finished'">
                                <img :src="item.url">
                                <div class="demo-upload-list-cover">
                                    <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                                </div>
                            </template>
                            <template v-else>
                                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                            </template>
                        </div>
                        <Upload
                            ref="upload"
                            :show-upload-list="false"
                            :default-file-list="defaultList"
                            :on-success="handleSuccess"
                            :format="['jpg','jpeg','png']"
                            :max-size="5120"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload"
                            multiple
                            type="drag"
                            action="//jsonplaceholder.typicode.com/posts/"
                            style="display: inline-block;width:58px;float:left;">
                            <div style="width: 58px;height:58px;line-height: 58px;">
                                <Icon type="camera" size="20"></Icon>
                            </div>
                        </Upload>
                        <Modal title="View Image" v-model="visible">
                            <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
                        </Modal>
                </div>
                <div class="uploadWarn">
                    <p>为了帮助您更好的解决问题，请上传图片</p>
                    <span>最多可上传五张图片，每张图片大小不超过5m，支持bmp,gif,jpg,jepg格式文件</span>
                </div>
            </div>
        </div>
        <!-- 联系方式 -->
        <h3>联系方式</h3>
        <div class="_connection">
            <div class="c_line">
                <span>联系人：</span><input type="text" placeholder="请填写联系人">
            </div>
            <div class="c_line">
                <span>联系电话：</span><input type="text" placeholder="请填写联系电话">
            </div>
        </div>
        <!-- 提交 -->
        <div class="submit">
            <button @click="submit">提交</button>
        </div>
        <!-- 温馨提醒 -->
        <div class="warm-tips">
            <h3>温馨提醒</h3>
            <ul>
                <li>商品寄回地址将在审核通过后以短信形式告知，或在申请记录中查询。</li>
                <li>提交服务单后，售后专员可能与您电话沟通，请保持手机畅通。</li>
                <li>退货处理成功后退款金额将原路返回到您的支持账户中。</li>
            </ul>
        </div>
    </div>
</template>
<script>
import imgUrl from '../../../../assets/common/logo.png'
export default {
    name:'applyForAfterSales',
    data(){
        return{
            textnum:'500',//还可输入字数
            description:'',//描述字数
             tableList:[
                {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
                {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
                {imgUrl:imgUrl,title:'女式超柔软拉毛运动汗衫',color:'黑色',size:'M',price:'249',amount:'1',subtotal:'249',net:'249'},
            ],
              options: [
                  {value: '选项1',label: '质量问题'}, 
                  {value: '选项2',label: '配件问题'}, 
                  {value: '选项3',label: '少件/漏发'}, 
                  {value: '选项4',label: '与商品描述不符'}, 
                  {value: '选项5',label: '包装/商品残破'}, 
                  {value: '选项6',label: '发票问题'}, 
                  {value: '选项7',label: '其它'}
                  ],
              value: '',//售后原因
              defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
                ],
                imgName: '',
                visible: false,
                uploadList: []
        }
    },
     methods: {
            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                }
                return check;
            },
            submit(){
                this.$router.push('applyForAfterSaleSuccess');
            }
        },
     mounted () {
            this.uploadList = this.$refs.upload.fileList;
        }
}
</script>
<style lang="less" scoped>
#content{
    padding: 40px;
    background: #fff;
    h3{
        height: 30px;
        vertical-align: top;
        text-align: left;
    }
     #table-header{
        width: 930px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background: url(../../../../assets/common/shadow.png);
        border: 1px solid rgb(221,221,221);
    }
    #table-header span{
        /* display:inline-block; */
        float: left;
    }
    .goodsinfo{
        width: 300px;
        line-height: 14px;
    }
    .price{width: 250px;}
    .amount{width: 140px;}
    .subtotal{width: 140px;}
    .realpay{width: 98px;}
    .table-line{
        width: 930px;
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
    .applyInfo{
        margin: 40px 0 ;
        .applyInfo-content{
            border: 1px solid rgb(221,221,221);
            padding-left: 30px;
            .reason{
                height: 72px;
                line-height: 72px;
                text-align: left;
                font-size: 14px;
            }
            .description{
                height: 216px;
                position: relative;
                font-size: 14px;
                span{
                    float:left;
                }
                textarea{
                    float: left;
                    width: 460px;
                    height:200px;
                    border: 1px solid #dcdfe6;
                    resize: none;
                    margin-left:16px;
                    padding: 14px;
                    // outline:1px solid rgb(241,92,8);
                    outline: none;
                    border-radius: 4px;
                    color: #dcdfe6;
                    resize: none;
                }
                textarea:focus{
                    border-color: rgb(241,92,8)
                }
                .rb{
                    position: absolute;
                    bottom: 20px;
                    right: 350px;
                }
            }
            .upload{
                span{
                    float: left;
                    font-size: 14px;
                    margin-right: 8px;
                    }
                   .demo-upload-list{
                        // display: inline-block;
                        float: left;
                        width: 60px;
                        height: 60px;
                        text-align: center;
                        line-height: 60px;
                        border: 1px solid transparent;
                        border-radius: 4px;
                        overflow: hidden;
                        background: #fff;
                        position: relative;
                        box-shadow: 0 1px 1px rgba(0,0,0,.2);
                        margin-right: 4px;
                        }
                    .demo-upload-list img{
                        width: 100%;
                        height: 100%;
                         }
                    .demo-upload-list-cover{
                        display: none;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: rgba(0,0,0,.6);
                        }
                    .demo-upload-list:hover .demo-upload-list-cover{
                        display: block;
                        }
                    .demo-upload-list-cover i{
                        color: #fff;
                        font-size: 20px;
                        cursor: pointer;
                        margin: 0 2px;
                        }
                }
            }
            .uploadWarn{
                padding:16px 0 24px 78px;
                font-size: 14px;
                line-height: 18px;
                text-align: left;
                p{
                    color: #333;
                }
                span{
                    color: #999;
                }
            }
    }
    ._connection{
        height: 128px;
        padding-left: 30px;
        border: 1px solid rgb(221,221,221);
        .c_line{
            height: 64px;
            line-height: 64px;
            font-size: 14px;
            text-align: left;
            input{
                width: 220px;
                height: 40px;
                padding-left: 14px;
                border: 1px solid rgb(221,221,221);
            }
            span{
                display: inline-block;
                width: 84px;
                padding-right: 14px;
                text-align: right;
            }
        }
    }
    .submit{
        height: 144px;
        line-height: 144px;
        button{
            width: 160px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            background: rgb(241,92,8);
            border: 1px solid rgb(241,92,8);
            outline: none;
            font-size: 14px;
        }
    }
    .warm-tips{
        height: 140px;
        border: 1px solid rgb(221,221,221);
        padding-left: 30px;
        background: url(../../../../assets/common/shadow.png);
        h3{
            height: 50px;
            line-height: 50px;
        }
        li{
            text-align: left;
            font-size: 14px;
            color: #999;
            line-height: 20px;
        }
    }
}
</style>

