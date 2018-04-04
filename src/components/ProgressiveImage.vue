<template>
  <div class="progressive">
    <img class="preview" v-progressive="image.src" :data-srcset="image.srcset" :src="image.preview"/>
  </div>
</template>

<script>
  export default {
    name: 'ProgressiveImage',
    props: ['image'],
    data () {
      return {}
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style src="../../node_modules/progressive-image/dist/index.css">
</style>
