<template>
    <div>
        <button @click="textapi">test</button>
        <img :src="src" alt="">
    </div>
</template>
<script>
export default {
  data(){
    return{
      src:''
    }
  },
    methods:{

    textapi(){
        let a='美妆';

         let obj = '[["Status","Sort","StockSum","IndustryNameTwo","Sum","Num"],["1","0","0","'+a+'","1","9"]]';
      this.axios
        .get("/Code/GraphicalCode", {
          SOURCE: "22",
          CREDENTIALS: "0",
          TERMINAL: "0",
          INDEX: "20170713170325",
          METHOD: "MallCommodityInfo",
          // DATA:encodeURI(obj)
        })
        .then(
          response => {
            // let ClassifyName=response.data.DATA[0].ClassifyName;
            // for(leti=0;i<ClassifyName.length;i++){

            // }
            this.src=response.data.data.img
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
