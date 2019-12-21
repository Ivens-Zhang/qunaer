<template>
  <div>
    <router-link to="/" class="header-abs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      this.opacityStyle.opacity = (top - 35) / 100
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .header-abs
    position : absolute
    left : .2rem
    top : .2rem
    width : .8rem
    height : .8rem
    line-height : .8rem
    text-align : center
    border-radius : .4rem
    background : rgba(0, 0, 0, .8)
    .header-abs-back
      color : #ffffff
      font-size : .4rem
  .header-fixed
    z-index : 2
    position fixed
    top : 0
    left : 0
    right : 0
    overflow hidden
    height : .86rem
    line-height : .86rem
    text-align : center
    color : #ffffff
    background : #00bcd4
    font-size : .32rem
    .header-back
        position : absolute
        top : 0
        left : 0
        width : .64rem
        text-align : center
        font-size : .4rem
        color : #ffffff
</style>
