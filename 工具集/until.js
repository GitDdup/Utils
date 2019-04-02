let until = {}
/**
     * 获取localStorage
     *  @param {name} 需要获取的值
     */
until.getLocalStorage = (name) => {
  return window.localStorage[name]
}
/**
     * 获取Cookie
     *  @param {name} 需要获取的值
     */
until.getCookie = (cname) => {
  let name = cname + '='
  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(name) !== -1) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}
/**
     * 获取localStorage否则获取Cookie
     * @param {name} 需要获取的值
     */
until.getAllCache = (name) => {
  if (until.getLocalStorage(name)) return until.getLocalStorage(name)
  if (until.getCookie(name)) return until.getCookie(name)
  return ''
}
/**
     * 简单的判断数据类型
     * @param {data} 传入的数据类型
     */
until.getTypeof = (data) => {
  if (typeof data === 'string') return 'String'
  if (typeof data === 'object' && !Array.isArray(data)) return 'Object'
  if (typeof data === 'number') return 'Number'
  if (typeof data === 'function') return 'Function'
  if (Array.isArray(data)) return 'Array'
  return false
}
export default until
