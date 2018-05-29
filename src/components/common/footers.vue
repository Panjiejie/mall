<template>
  <div>
      <div class="footers">
        <div class="footers-nav">
          <ul>
            <li>
              <p>客户服务</p>
              <div class="pic-content">
                <img src="../../assets/common/kefu.png" alt="在线客服">
                <span>在线客服</span>
              </div>
              <div class="pic-content" style="margin-left:28px;">
                <img src="../../assets/common/reback.png" alt="在线客服">
                <span>在线客服</span>
              </div>
            </li>
            <li>
              <p>关注我们</p>
              <div class="pic-content">
                <img src="../../assets/common/wechat.png" alt="公众号">
                <span>公众号</span>
              </div>
              <div class="pic-content" style="margin-left:28px;">
                <img src="../../assets/common/weibo.png" alt="微博">
                <span>微博</span>
              </div>
            </li>
            <li class="download">
              <p>下载APP</p>
              <div class="imgcontent">
                <img src="../../assets/common/qrcode.png" alt="qrcode"  class="qrcode">
              </div>
              <div>
                <span style="margin-top:26px;">扫描二维码</span>
                <span style="margin-top:12px;">下载APP</span>
              </div>
            </li>
            <li class="phone">
              <p>服务热线</p>
              <p class="phonenum">0755-83820003</p>
              <p class="date">周一至周日 8:30-18:00</p>
            </li>
          </ul>
        </div>
        <div class="footer-bottom">
          <div class="btop">
              <div class="tleft">
                  <div class="tf-img">
                    <img src="../../assets/common/blockchain.png" alt="区块链">
                  </div>
                  <div class="tf-text">
                    <span>区块链验证</span>
                    <br>
                    <span>Blockchain verification</span>
                  </div>
              </div>
              <div class="tright">
                  <div class="tf-img">
                    <img src="../../assets/common/express.png" alt="快递">
                  </div>
                  <div class="tf-text">
                    <span>货到付款</span>
                    <br>
                    <span>Cash on delivery</span>
                  </div>
              </div>
          </div>
          <div class="bbottom">
            <ul>
              <li style="border-left:none;padding-left:none;"><a href="">关于我们</a></li>
              <li><a href="">帮助中心</a></li>
              <li><a href="">售后服务</a></li>
              <li><a href="">配送与验收</a></li>
              <li><a href="">商务合作</a></li>
              <li><a href="">企业采购</a></li>
              <li><a href="">开放平台</a></li>
              <li style="border-right:none;padding-right:none;"><a href="">友情链接</a></li>
            </ul>
            <div><br> CopyRight @ 正品汇2018</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'footers',
  data(){
    return {
    }
  },
  components:{
  },
  methods:{
  }
}
</script>

<style scoped>
  .footers{
    width: 100%;
    height: 240px;
    background: #FFFFFF;
    margin-top: 40px;
  }
  .footers ul{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
  .footers .footers-nav li{
    float: left;
    width: 300px;
    height: 160px;
    border-right: 1px solid #DDDDDD;
    list-style: none;
    margin-top: 40px;
  }
  .footers li:after ,.footers ul:after{
    content:"";
    display: block;
    clear: both;
  }
  .footers li p{
    text-align: center;
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 30px;
  }
  .pic-content{
    width: 80px;
    height: 100px;
    border: 1px solid #E9E9E9;
    text-align: center;
    float: left;
    font-size: 14px;
    color: #362F37;
    margin-left:56px; 
  }
  .pic-content img{
    display: block;
    margin:24px 0 10px 24px; 
  }
  .download div{
    float: left;
  }
  .download .imgcontent{
    width: 100px;
    height: 100px;
    text-align: center;
    border: 1px solid #F1F2F3;
    padding-top: 10px;
    margin: 0 30px 0 38px;
  }
  .download span{
    display: block;
  }
  .phone .phonenum{
    margin-top: 54px;
    font-weight: bold;
    line-height: 14px;
    margin-bottom:14px ;
  }
  .phone .date{
    font-size: 12px;
    font-weight: 300;
    line-height: 12px;
  }
  .footer-bottom{
    width: 100%;
    height: 200px;
    background: #272424;
  }
  .btop{
    width: 1200px;
    height: 100px;
    border-bottom: 1px solid #363333;
    margin: 0 auto;
  }
  .tleft,.tright{
    float: left;
    width: 350px;
    height: 100px;
    margin-left: 250px;
    position: relative;
    /* transform: translateY(30px) */
  }
  .tright{
    margin-left: 0;
  }
  .tf-img , .tf-text{
    color: #CCCCCC;
    float: left;
    margin-top: 30px;
  }
  .tf-img:after{
    display: block;
    content: "";
    clear: both;
  }
  .tf-img{
    float: left;
    width: 40px;
    margin-right: 20px;
  }
  .bbottom{
    width: 1200px;
    height:100px ;
    margin: 0 auto;
  }
  .bbottom ul{
    width: 640px;
    height: 20px;
    margin: 0 auto ;
    padding-top:30px; 
    padding-bottom: 10px;
  }
  .bbottom li{
    float: left;
    font-size: 16px;
    height: 16px;
    padding:0 10px ;
    line-height: 16px;
    border-right: 1px solid #828181;
    color: #828181;
    list-style: none;
  }
  .bbottom li:after{
    display: block;
    content: "";
    clear: both;
  }
  .bbottom div{
    color: #828181;
  }
</style>