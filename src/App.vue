<template>
  <div id="app">
    <router-view/>
    <nav-bar/>
  </div>
</template>

<script>
  import '../static/iconfont.min'
  import NavBar from './components/NavBar'

  export default {
    name: 'app',
    components: { NavBar },
    data () {
      return {}
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
