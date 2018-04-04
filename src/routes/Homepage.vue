<template>
  <div class="hello">
    <progressive-image v-for="(image, idx) in images" :key="idx" :image="image"></progressive-image>
  </div>
</template>

<script>
  import { getHomepageList } from '../api/homepage'

  export default {
    name: 'Homepage',
    _router: {
      path: '/',
      name: 'Homepage',
      component: resolve => require.ensure([], () => resolve(require('./Homepage')), 'Homepage')
    },
    components: {
      'ProgressiveImage': () => import('../components/ProgressiveImage')
    },
    data () {
      return {
        pageNum: 1,
        pageSize: 10,
        images: []
      }
    },
    beforeMount () {
      const { pageNum, pageSize } = this
      getHomepageList.bind(this)({ pageNum, pageSize }).then(({ code, result }) => {
        if (code === 200) {
          result.forEach(item => {
            this.images.unshift({ src: item.media, preview: item.preview })
          })
        }
      })
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .hello {
    overflow: hidden;
    .inner {
      float: left;
      width: 100%;
      &:empty {
        height: 80vw;
        background: url("../assets/pic.svg") no-repeat center;
      }
      img {
        display: block;
        width: 100%;
      }
    }
  }


</style>
