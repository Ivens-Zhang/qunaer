<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet'
import CitySearch from './components/Search.vue'
// import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CityList,
    CityAlphabet,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
