const fs = require('fs')
const path = require('path')
const elementConf = require('../config/element.conf')
const elementPath = path.resolve(__dirname, '../src/element.js')

writeFn('npm run element') // todo add if condition

let timer

module.exports = function (req, res, next) {
  clearTimeout(timer)
  timer = setTimeout(function () {
    writeFn('npm start')
  }, 2000)
  next()
}

function writeFn (cli) {
  const printVueUse = () => (elementConf.map(component => (
      `Vue.component(${component}.name, ${component})\n`)).join('')
  )
  const element = `/* 请勿手动修改，此文件为${cli}生成 */

import Vue from 'vue'
import {
  ${elementConf.join(',\n  ')}
} from 'element-ui'

${printVueUse()}`

  fs.writeFile(elementPath, element, err => {
    if (err) throw err
  })
}

// TODO add hot reload
