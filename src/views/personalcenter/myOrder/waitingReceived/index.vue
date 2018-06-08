<template>
    <div class="dai" >
        <indexListItem :isshowLogistics="isshowLogistics" :orderStatus="orderStatus"></indexListItem>
        <indexListItem :isshowLogistics="isshowLogistics" :orderStatus="orderStatus"></indexListItem>
    </div>
</template>
<script>
import indexListItem from '../../../../components/myOrder/indexListItem'
export default {
    name:'waitingReceived',
    components:{
        indexListItem
    },
    data(){
        return{
            isshowLogistics:false,
            orderStatus:'待收货'
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>

</style>
