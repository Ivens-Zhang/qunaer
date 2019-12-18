<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in pages" :key="index">
        <div class="icon" v-for="(innerItem, innerIndex) in item" :key="innerIndex">
          <div class="icon-img">
            <img class="icon-img-content" :src="innerItem.imgUrl">
          </div>
          <p class="icon-desc">{{innerItem.desc}} </p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {}
    }
  },
  computed: {
    pages () {
      let pages = []
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    margin-top : .1rem
    .icon
      position relative
      float : left
      width : 25%
      padding-bottom : 25%
      .icon-img
        position : absolute
        top: 0;
        left: 0;
        right: 0;
        bottom : .44rem
        box-sizing : border-box
        padding : .1rem
        .icon-img-content
          display : block
          margin : 0 auto
          height : 100%
      .icon-desc
        position : absolute
        left: 0;
        right: 0;
        bottom : 0;
        height : .44rem
        line-height : .44rem
        text-align : center
        color : #333
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis

</style>
