<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link v-for="item of recommendList" :key="item.id" :to="'/detail/' + item.id">
      <!-- :to="{ name:'detail',params:{'id':item.id} }"> -->
        <li class="item border-bottom"
        >
          <img class="item-img" :src="item.imgUrl">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-title
    margin-top : .2rem
    line-height : .8rem
    background : #eeeeee
    text-indent : .2rem
  .item
    overflow hidden
    display : flex
    height : 1.9rem
    .item-img
      width : 1.7rem
      height : 1.7rem
      padding : .1rem
    .item-info
      padding : .1rem
      flex : 1
      min-width : 0
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
      .item-button
        background : #ff9300
        line-height : .44rem
        margin-top : .16rem
        padding : 0 .1rem
        border-radius : .06rem
        color : #fff
</style>
