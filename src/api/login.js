import base from './base'

export function login (params) {
  return base({
    type: 'post',
    url: '/user/login',
    params
  })
}
