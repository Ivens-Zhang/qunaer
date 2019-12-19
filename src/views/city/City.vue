<template>
  <div>
    <city-header></city-header>
    <city-search :cityList="cityList"></city-search>
    <city-list :alpha="alpha" :cityList="cityList" :hotCities="hotCities"></city-list>
    <city-alphabet :cityList="cityList" @changeAlpha="handleChangeAlpha"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet'
import CitySearch from './components/Search.vue'
import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      cityList: {},
      hotCities: [],
      alpha: ''
    }
  },
  components: {
    CityHeader,
    CityList,
    CityAlphabet,
    CitySearch
  },
  methods: {
    getCities () {
      axios.get('/mock/city.json').then(this.getCitiesSucc)
    },
    getCitiesSucc (res) {
      if (res.data.ret && res.data.data) {
        this.cityList = res.data.data.cities
        this.hotCities = res.data.data.hotCities
      }
    },
    handleChangeAlpha (alpha) {
      this.alpha = alpha
    }
  },
  mounted () {
    this.getCities()
  }
}
</script>

<style lang="stylus" scoped>

</style>
