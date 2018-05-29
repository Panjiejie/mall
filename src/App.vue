<template>
  <div id="app">
    <headers></headers>
    <router-view></router-view>
    <footers></footers>
    <!-- <index></index> -->
  </div>
</template>

<script>
import headers from './components/common/headers'
import footers from './components/common/footers'
import index from  './components/index/index'
export default {
  name: 'App',
  components:{
    headers,
    footers,
    index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
