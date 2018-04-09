import base from './base'

export function login (params) {
  return base({
    type: 'post',
    url: '/user/login',
    params
  })
}

export function register (params) {
  // todo add 验证码
  return base({
    type: 'post',
    url: '/user/register',
    params
  })
}
