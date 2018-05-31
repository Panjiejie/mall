<template>
    <div>
        <headers></headers>
        <router-view></router-view>
        <footers></footers>
    </div>
</template>

<script>

import Headers from 'components/public/headers'
import Footers from 'components/public/footers'

export default {
  data() {
    return {};
  },
  components: {
    Headers,
    Footers
  }
};
</script>

<style scoped>
</style>
