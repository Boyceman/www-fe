<template>
  <div class="waterfall" ref="waterfall" @scroll="handleScroll">
    <progressive-image v-for="(image, idx) in images" :key="idx" :image="image"/>
  </div>
</template>

<script>
  import { getHomepageList } from '../api/homepage'
  // import throttle from '../utils/throttle'
  import Vue from 'vue'
  import { mapMutations } from 'vuex'

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
    updated () {
      Vue.nextTick(() => {
        if (this.$refs.waterfall.childNodes.length) {
          const copy = this.$refs.waterfall.cloneNode(true)
          copy.className = 'copy-body'
          this.currentFakeDom({ fakeDom: copy.innerHTML })
        }
      }, this)
      this.handleScroll()
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
      handleScroll: function () {
        const { scrollTop, scrollHeight, clientHeight } = this.$el
        this.blurScroll()
        if (this.emptyResult) {
          // todo add empty notification
        } else {
          if (scrollTop > scrollHeight - clientHeight - this.BUFFER) {
            this.pageNum += 1
            this.fetchData()
          }
        }
      },
      blurScroll () {
        const fakeDom = this.$vnode.context.$children[0].$refs.fakeDom
        fakeDom.style['transform'] = `translate3d(0,${-this.$el.scrollTop - window.innerHeight +
        window.innerWidth * 0.12}px,0)`
      },
      ...mapMutations(['currentFakeDom'])
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
