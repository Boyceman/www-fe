<template>
  <div>
    <svg v-if="active" class="icon" aria-hidden="true">
      <use :xlink:href="icon"></use>
    </svg>
    <i v-else class="iconfont" :class="icon"></i>
  </div>
</template>

<script>
  export default {
    name: 'Icon',
    props: ['name', 'active'],
    computed: {
      icon () {
        return this.active ? `#icon-${this.name}` : `icon-${this.name}`
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/iconfont/iconfont.css";

  .iconfont {
    font-size: 72px;
    color: #ffffff;
  }
</style>
