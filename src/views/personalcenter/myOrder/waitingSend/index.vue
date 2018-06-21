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
            orderStatus:'待发货'
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>

</style>
