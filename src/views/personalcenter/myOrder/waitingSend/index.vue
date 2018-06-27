<template>
    <div class="dai" >
        <indexListItem :isshowLogistics="isshowLogistics" :orderStatus="orderStatus"></indexListItem>
        <indexListItem :isshowLogistics="isshowLogistics" :orderStatus="orderStatus"></indexListItem>
    </div>
</template>
<script>
import indexListItem from '../../../../components/myOrder/indexListItem'
export default {
    name:'waitingSend',
    components:{
        indexListItem
    },
    data(){
        return{
            isshowLogistics:true,
            orderStatus:'待发货',
            UserAccount:'',
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.UserAccount=localStorage.getItem('UserAccount');
              this.axios.post("/Order/MallOrderInfoTable", {
                    SOURCE: "22",
                    CREDENTIALS: "0",
                    TERMINAL: "0",
                    INDEX: "20170713170325",
                    METHOD: "MallOrderInfoTable",
                    LoginUser:'2',
                    Status:'2',
                    UserAccount:this.UserAccount,
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
</script>
<style scoped>

</style>
