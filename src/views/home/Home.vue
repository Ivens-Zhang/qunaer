<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getIndex () {
      axios.get('/mock/index.json').then(this.getIndexSucc)
    },
    getIndexSucc (res) {
      const resData = res.data.data
      if (resData && res.data.ret) {
        console.log(resData)
        this.swiperList = resData.swiperList
        this.iconList = resData.iconList
        this.recommendList = resData.recommendList
        this.weekendList = resData.recommendList
      }
    }
  },
  mounted () {
    this.getIndex()
  }
}
</script>

<style lang="stylus" scoped>

</style>
