<template>
  <div id="app">
    <div class="body">
      <router-view :copy="copy"/>
    </div>
    <nav-bar>
      {{ copyContent }}
    </nav-bar>
  </div>
</template>

<script>
  import '../static/iconfont.min'
  import Vue from 'vue'
  import NavBar from './components/NavBar'

  export default {
    name: 'app',
    components: { NavBar },
    data () {
      return {
        copyContent: ''
      }
    },
    methods: {
      copy () {
        Vue.nextTick(() => {
          const copy = this.$el.children[0].cloneNode(true)
          copy.className = 'copy-body'
          this.copyContent = copy
          console.log(this.copyContent, 8888)
        }, this)
      }
    }
  }
</script>

<style scoped>
  @import "style/reset.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #333;
    height: 100%;
  }
</style>
