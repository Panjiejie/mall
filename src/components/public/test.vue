<template>
    <div>
        <button @click="textapi">test</button>
    </div>
</template>
<script>
export default {
    methods:{

    textapi(){
        let obj='[["Status","Sort","StockSum","Sum","Num"],["1","0","1","10","1"]]';
        let self=this;
      self.axios.post('/Mall/MallCommodityInfo', {
            SOURCE: "22",
            CREDENTIALS: "0",
            TERMINAL: "0",
            INDEX: "20170713170325",
            METHOD: "MallCommodityInfo",
            UserMobile: encodeURI('18689207260') 
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
