<template>
  <div>
    <detail-banner
     :gallaryImgs="gallaryImgs"
     :sightName="sightName"
     :bannerImg="bannerImg"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list :categoryList="categoryList"></detail-list>
    <div style="height: 20rem"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      categoryList: [],
      gallaryImgs: []
    }
  },
  methods: {
    getDetail () {
      axios.get('/mock/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailSucc)
    },
    getDetailSucc (res) {
      let resData = res.data.data
      if (resData && res.data.ret) {
        this.sightName = resData.sightName
        this.bannerImg = resData.bannerImg
        this.categoryList = resData.categoryList
        this.gallaryImgs = resData.gallaryImgs
      }
    }
  },
  mounted () {
    this.getDetail()
  }
}
</script>

<style lang="stylus" scoped>

</style>
