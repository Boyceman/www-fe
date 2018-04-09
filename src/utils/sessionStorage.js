export function getDataFromSs (item) {
  return window.sessionStorage.getItem(item)
}

export function putDataIntoSs (obj) {
  Object.keys(obj).forEach(item => {
    window.sessionStorage.setItem(item, obj[item])
  })
}
