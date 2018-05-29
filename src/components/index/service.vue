<template>
    <div>
        <div class="service">
            <div class="title">
            <span class="line"></span>
            <span class="maintitle">推荐专区</span>
        </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"service",
    components:{},
    data(){
        return{}
    }
}
</script>
<style scoped>
.service{
    width: 1200px;
    height: 240px;
    background: rgba(244,91,8,.1);
    margin: 45px auto 0;
}
.title{
    width: 1200px;
    height: 25px;
    line-height: 25px;
    margin: 0 auto;
    text-align: left;
    margin-bottom:18px; 
}
.line{
    display: inline-block;
    width: 3px;
    height: 18px;
    background: #FFDA46;
    margin-right: 12px;
}
.maintitle{
    display: inline-block;
    font-size: 25px;
    color: #2D2D2D;
    margin-right:20px; 
}
</style>


