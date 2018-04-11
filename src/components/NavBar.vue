<template>
  <div class="NavBar">
    <div class="nav-item" v-for="(item, idx) in items" :key="idx" @click="handleClick(idx)">
      <icon :active="idx === 0 || idx === activeIdx" :name="item.name"/>
    </div>
    <slot/>
  </div>
</template>

<script>
  import Icon from './Icon'

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
    z-index: 1;
    display: flex;
    overflow: hidden;
    background: transparent;
    .nav-item {
      flex: 1;
      height: 12vw;
      padding-top: 1.1vw;
      &:first-child {
        background: #fefefe;
      }
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .7);
      z-index: -1;
    }
  }
</style>
