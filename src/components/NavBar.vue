<template>
  <div class="NavBar">
    <div class="nav-item" v-for="(item, idx) in items" :key="idx" @click="handleClick(idx)">
      <icon :active="idx === 0 || idx === activeIdx" :name="item.name"/>
    </div>
    <div class="fake-dom" ref="fakeDom" v-html="fakeDom"></div>
  </div>
</template>

<script>
  import Icon from './Icon'
  import { mapState } from 'vuex'

  export default {
    name: 'NavBar',
    components: { Icon },
    data () {
      return {
        activeIdx: 1,
        items: [
          {
            name: 'xiangji'
          },
          {
            name: 'diannao'
          },
          {
            name: 'sousuo'
          },
          {
            name: 'xinxi'
          },
          {
            name: 'geren'
          }
        ]
      }
    },
    computed: {
      ...mapState({
        'fakeDom': state => state.current.fakeDom
      })
    },
    methods: {
      handleClick (idx) {
        this.activeIdx = idx
      }
    }
  }
</script>

<style scoped lang="scss">
  .NavBar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 12vw;
    overflow: hidden;
    display: flex;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, .7);
    .nav-item {
      flex: 1;
      height: 12vw;
      padding-top: 1.1vw;
      &:first-child {
        background: #fefefe;
      }
    }
    > div:last-child {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      z-index: -1;
    }
  }
</style>
