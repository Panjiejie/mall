<template>
    <div>
       <banner></banner>
       <brandingbusiness></brandingbusiness>
       <service></service>
       <seckill></seckill>
       <newgoods></newgoods>
       <common-list :commonname="commonname1"></common-list>
       <common-list :commonname="commonname2"></common-list>
       <common-list :commonname="commonname3"></common-list>
       <common-list :commonname="commonname4"></common-list>
    </div> 
</template>
<script>
// import headers from '../common/headers'
// import footers from '../common/footers'
import brandingbusiness from 'components/index/brandingbusiness'
import service from 'components/index/service'
import seckill from 'components/index/seckill'
import newgoods from 'components/index/newgoods'
import commonList from 'components/index/commonList'
import banner from 'components/index/banner'
export default {
    name:"index",
    components:{
        brandingbusiness,
        service,
        seckill,
        newgoods,
        commonList,
        banner
    },
    // props:[commonname],
    data(){
        return{
            commonname1:"珠宝",
            commonname2:"酒类",
            commonname3:"服饰",
            commonname4:"母婴",
            commonList:[
                {}
            ]
        }
    }
}
</script>
<style scoped>

  
</style>

