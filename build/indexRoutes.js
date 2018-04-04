const fs = require('fs')
const path = require('path')
const routesDirPath = path.resolve(__dirname, '../src/routes/')
const routesJsPath = path.resolve(__dirname, '../src/routes/router/routes.js')

fs.readdir(routesDirPath, (err, files) => {
  if (err) throw err
  let routes = []
  let imports = [`import combineRoutes from './combineRoutes'`]
  files.forEach(file => {
    if (file.split('.')[1] === 'vue') {
      routes.push(`${file.split('.')[0]}._router`)
      imports.push(`import ${file.split('.')[0]} from '../${file.split('.')[0]}'`)
    }
  })

  const routesJs = `/* 请勿手动修改，此文件为npm run route生成 */

${imports.join('\n')}

export const routes = [
  ${routes.join(',\n  ')}
]

export default combineRoutes(routes)
`
  fs.writeFile(routesJsPath, routesJs, err => {
    if (err) throw err
  })
})
