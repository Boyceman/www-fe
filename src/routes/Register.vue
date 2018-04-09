<template>
  <div class="Register">
    {{info}}
  </div>
</template>

<script>
  // todo add register page
  import { register } from '../api/user'

  export default {
    name: 'Register',
    _router: {
      path: '/user/register',
      name: 'Register',
      component: resolve => require.ensure([], () => resolve(require('./Register')), 'Register')
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
      register({ email, password }).then(({ code, result }) => {
        if (code === 200) {
          this.info = 'Register Success'
          const { token } = result
          this.$utils.putDataIntoSs({ token })
          this.$router.replace('/')
        }
      })
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .Register {
    font-size: 36px;
    color: #fefefe;
    text-align: center;
    line-height: 100vh;
  }
</style>
