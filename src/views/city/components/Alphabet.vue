<template>
  <ul class="list">
    <li class="item" v-for="(item, index) in cityList"
     :key="index" :ref="index + 'alpha'"
     @click="hanleAlphabetClick(index)"
     @touchstart.prevent="handleTouchStart"
     @touchmove="handleTouchMove"
     @touchend="handleTouchEnd"
    >
      {{index}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      startY: '',
      touchStatus: ''
    }
  },
  props: {
    cityList: Object
  },
  updated () {
    this.startY = this.$refs['Aalpha'][0].offsetTop
    console.log(this.startY)
  },
  methods: {
    hanleAlphabetClick (index) {
      this.$emit('changeAlpha', index)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      let arr = []
      if (this.touchStatus) {
        for (let i in this.cityList) {
          arr.push(i)
        }
        let touchY = e.touches[0].clientY
        const index = Math.floor((touchY - 170) / 18.5)
        if (index >= 0 && index <= 21) {
          this.$emit('changeAlpha', arr[index])
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list
    display : flex
    flex-direction : column
    justify-content : center
    position : absolute
    top : 1.58rem
    right : 0
    bottom : 0
    width : .4rem
    .item
      line-height : .38rem
      text-align : center
      color : #00bcd4
</style>
