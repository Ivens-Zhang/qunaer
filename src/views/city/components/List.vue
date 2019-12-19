<template>
  <div class="list wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
           v-for="item of hotCities" :key="item.id">
            <div class="button" @click="handleCityClick(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, index) in cityList"
       :key="index"  :ref="index"
      >
        <div class="title border-topbottom">{{index}}</div>
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
          <div class="item border-bottom" @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    cityList: Object,
    hotCities: Array
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCurrentCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    let wrapper = document.querySelector('.wrapper')
    this.scroll = new BScroll(wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color : #ccc
    &:after
      border-color : #ccc
  .border-bottom
    &:before
      border-color : #ccc
  .list
    overflow: hidden
    position : absolute
    top : 1.58rem
    left : 0
    right : 0
    bottom : 0
    .title
      line-height : .44rem
      background : #eeeeee
      padding-left : .2rem
      color : #666666
      font-size : .26rem
    .button-list
      overflow hidden
      padding : .1rem .6rem .1rem .1rem
      .button-wrapper
        float : left
        width: 33.33%
        .button
          padding : .1rem 0
          margin : .1rem
          text-align : center
          border : .02rem solid #ccc
          border-radius : .06rem
    .item-list
      .item
        line-height : .76rem
        padding-left : .2rem
</style>
