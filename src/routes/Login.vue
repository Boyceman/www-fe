<template>
  <div class="Login">
    {{info}}
  </div>
</template>

<script>
  // todo add login page
  import { login } from '../api/user'

  export default {
    name: 'Login',
    _router: {
      path: '/user/login',
      name: 'Login',
      component: resolve => require.ensure([], () => resolve(require('./Login')), 'Login')
    },
    data () {
      return {
        info: '',
        email: 'test@qq.com',
        password: '123456'
      }
    },
    beforeMount () {
      const { email, password } = this
      login({ email, password }).then(({ code, result }) => {
        if (code === 200) {
          this.info = 'Login Success'
          const { token } = result
          this.$utils.putDataIntoSs({ token })
          this.$router.replace('/')
        } else {
          this.$router.replace('/user/register')
        }
      })
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .Login {
    font-size: 36px;
    color: #fefefe;
    text-align: center;
    line-height: 100vh;
  }
</style>
