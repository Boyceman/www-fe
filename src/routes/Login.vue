<template>
  <div class="Login">
  </div>
</template>

<script>
  import { login } from '../api/login'

  export default {
    name: 'Login',
    _router: {
      path: '/user/login',
      name: 'Login',
      component: resolve => require.ensure([], () => resolve(require('./Login')), 'Login')
    },
    data () {
      return {
        email: 'test@qq.com',
        password: '123456'
      }
    },
    beforeMount () {
      const { email, password } = this
      login({ email, password }).then(({ result: { token } }) => {
        this.$utils.putDataIntoLs({ token })
      })
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .Login {
  }
</style>
