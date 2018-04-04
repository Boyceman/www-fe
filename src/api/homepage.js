import base from './base'

export function getHomepageList (options) {
  return base({
    context: this,
    url: '/media',
    options
  })
}
