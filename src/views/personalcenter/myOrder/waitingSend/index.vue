<template>
    <div class="content">
        <div class="title-content">
            <innerTitle></innerTitle>
        </div>
        <div class="bottom">
            <innerBottom></innerBottom>
        </div>
    </div>
</template>
<script>
import innerTitle from '../../../../components/myOrder/innerTitle.vue'
import innerBottom from '../../../../components/myOrder/innerBottom.vue'
export default {
    name:'waitingSend',
    components:{
        innerTitle,
        innerBottom
    },
    data(){
        return{

        }
    },

}
</script>
<style scoped>
.title-content{
    width: 990px;
    height: 100px;
    margin-bottom: 24px;
}

</style>


