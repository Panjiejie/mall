<template>
    <div>
        <button @click="textapi">test</button>
    </div>
</template>
<script>
export default {
    methods:{

    textapi(){
      this.axios({  
                    method: "post",  
                    url: "/Mall/MallCommodityInfo",  
                    data: {  
                        METHOD: 'MallCommodityInfo',  
                        DATA: 10  
                    },  
                }).then(response => {  
                        console.log("请求成功");  
                        console.log(response);  
                    },  
                    response => {  
                        console.log("请求失败");  
                        console.log(response);  
                    })
    }
    }
}
</script>
