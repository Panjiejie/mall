<template>
    <div class="dai" >
        <indexListItem v-for="item in orderStatus" :key="item.key" :isshowLogistics="isshowLogistics" :orderStatus="item.status"></indexListItem>
    </div>
</template>
<script>
import indexListItem from '../../../../components/myOrder/indexListItem'
export default {
    name:'afterSale',
    components:{
        indexListItem
    },
    data(){
        return{
            isshowLogistics:true,
            orderStatus:[
                {status:'已取消'},
                {status:'售后中'},
                {status:'售后中'},
                {status:'退货完成'},
            ]
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>

</style>
