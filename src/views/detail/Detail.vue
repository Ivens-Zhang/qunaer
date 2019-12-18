<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
// import axios from 'axios'
export default {
  name: 'Home',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
