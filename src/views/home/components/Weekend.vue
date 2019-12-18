<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList " :key="item.id">
        <div class="item-img-wapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-title
    line-height : .8rem
    background : #eeeeee
    text-indent : .2rem
  .item-img-wapper
    overflow hidden
    height : 0
    padding-bottom : 38%
    width : 100%
    .item-img
      width : 100%
  .item-info
    padding : .1rem
    .item-title
      line-height : .54rem
      font-size : .32rem
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
    .item-desc
      line-height : .4rem
      color : #cccccc
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
</style>
