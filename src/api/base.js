import Vue from 'vue'

const baseUrl = 'http://localhost:5000/api/v1'

export default ({ type = 'get', url = '/', params = {}, context, options = {} }) => {
  const body = type === 'get' || type === 'delete' ? { params } : params
  return Vue.http[type](baseUrl + url, body, options)
    .then(handleResult.bind(context), handleNetErr)
}

export function handleResult (resp) {
  const { body } = resp
  if (body) {
    const { code, message, result } = body
    switch (code) {
      case 0:
        this.emptyResult = true
        break
      case 200:
        console.log(result, 'success')
        break
      case 403:
        sessionStorage.removeItem('token')
        this.$router.replace('/user/login')
        break
      default:
        console.error(message)
    }
  }
  return body
}

export function handleNetErr (err) {
  console.log(err)
  return err
}
