<template>
  <div>
    <div class="banner" v-show="!isShowGallary"
    @click="handleClick"
    >
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe62f;</span>{{gallaryImgs.length}}</div>
      </div>
    </div>
    <transition>
      <div class="container" v-show="isShowGallary" @click="handleClick">
        <div class="wrapper">
          <swiper :options="swiperOption" v-if="gallaryImgs.length">
            <!-- slides -->
            <swiper-slide v-for="(item, index) in gallaryImgs" :key="index">
              <img class="gallary-img" :src="item">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  props: {
    gallaryImgs: Array,
    sightName: String,
    bannerImg: String
  },
  data () {
    return {
      isShowGallary: false,
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  methods: {
    handleClick () {
      this.isShowGallary = !this.isShowGallary
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity : 0
  .v-enter-active, .v-leave-active
    transition : opacity .5s
  .banner
    position relative
    overflow hidden
    height : 0
    padding-bottom : 55%
    .banner-img
      width : 100%
    .banner-info
      display : flex
      position : absolute
      left : 0
      right : 0
      bottom : 0
      line-height : .6rem
      color : #ffffff
      background-image : linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size : .32rem
        padding : 0 .2rem
      .banner-number
        margin-top : .14rem
        padding : 0 .4rem
        height : .32rem
        line-height : .32rem
        border-radius : .2rem
        font-size : .24rem
        background : rgba(0, 0, 0, .8)
        .banner-icon
         font-size : .24rem
         margin-right : .08rem
  .container >>> .swiper-container
    overflow : inherit
  .container
    display : flex
    flex-direction : column
    justify-content : center
    position : fixed
    z-index : 99
    left : 0
    right : 0
    top : 0
    bottom : 0
    background : #000
    .wrapper
      width : 100%
      height : 0
      padding-bottom : 120%
      .gallary-img
        width : 100%
      .swiper-pagination
        color : #fff
        bottom : -1rem
</style>
