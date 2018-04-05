import base from './base'

export function getHomepageList (params) {
  return base({
    context: this,
    url: '/media',
    params
  })
}
