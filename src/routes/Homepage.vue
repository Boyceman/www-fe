<template>
  <div class="waterfall" @scroll="handleScroll">
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
        images: [],
        BUFFER: 500
      }
    },
    beforeMount () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        const { pageNum, pageSize } = this
        getHomepageList.bind(this)({ pageNum, pageSize }).then(({ code, result }) => {
          if (code === 200) {
            result.forEach(item => {
              this.images.push({ src: item.media, preview: item.preview })
            })
          }
        })
      },
      handleScroll (e) {
        const { scrollTop, scrollHeight, clientHeight } = e.target
        if (this.emptyResult) {
          // todo add empty notification
        } else {
          if (scrollTop > scrollHeight - clientHeight - this.BUFFER) {
            this.pageNum += 1
            this.fetchData()
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .waterfall {
    height: 100%;
    overflow: auto;
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
