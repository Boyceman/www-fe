export function getDataFromLs (item) {
  return window.localStorage.getItem(item)
}

export function putDataIntoLs (obj) {
  Object.keys(obj).forEach(item => {
    window.localStorage.setItem(item, obj[item])
  })
}
