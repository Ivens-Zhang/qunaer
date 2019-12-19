<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" placeholder="输入城市名或拼音" type="text" >
    </div>
    <div class="search-content" v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
         v-for="(item, index) in result" :key="index">
          {{item.name}}
        </li>
        <li v-show="!result.length" class="search-item border-bottom">
          没有找到对应城市
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      result: []
    }
  },
  props: {
    cityList: Object
  },
  watch: {
    keyword () {
      let arr = []
      for (let i in this.cityList) {
        this.cityList[i].forEach((value) => {
          if (value.spell.indexOf(this.keyword) > -1) {
            arr.push(value)
          }
        })
      }
      this.result = arr
    }
  }
}
</script>

<style lang="stylus" scoped>
  .search
    height : .72rem
    padding : 0 .1rem
    background : #00bcd4
    .search-input
      box-sizing : border-box
      width : 100%
      height : .62rem
      padding : 0 .1rem
      line-height : .62rem
      text-align : center
      border-radius : .06rem
      color : #666
  .search-content
    z-index : 1
    overflow hidden
    position : absolute
    top : 1.58rem
    left : 0
    right : 0
    bottom : 0
    background : #eee
    .search-item
      line-height : .62rem
      padding-left : .2rem
      background : #ffffff
      color : #666
</style>
