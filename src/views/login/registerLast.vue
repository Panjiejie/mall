<template>
    <div id='register-last'>
        <img src="../../assets/index/circle_success.png" alt="">
        <p>恭喜注册成功</p>
        <div>请妥善保管您的账户信息</div>
        <button>0{{time}}秒后进入首页</button>
    </div>
</template>
<script>
export default {
    name:'registerLast',
    data(){
        return{
            time:3
        }
    },
    mounted(){
        this.a();
    },
    methods:{
        a(){
            setInterval(()=>{
                this.time--;
                if(this.time==0){
                    this.$router.push('/')
                }
            },1000)
        }
    }
}
</script>
<style lang="less" scoped>
#register-last{
    width: 600px;
    margin: 60px auto 0;
    text-align: center;
    p{
        font-size: 28px;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        margin: 10px 0;
    }
    div{
        font-size: 14px;
        color: #999;
        height: 20px;
        line-height: 20px;
    }
    button{
            width: 200px;
            height: 44px;
            line-height: 44px;
            border: 1px solid rgb(241,91,8);
            background: rgb(241,91,8);
            color: #fff;
            font-size: 14px;
            outline: none;
            margin-top: 14px;
        }
}
</style>
