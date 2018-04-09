const fs = require('fs')
const path = require('path')
const elementConf = require('../config/element.conf')
const elementPath = path.resolve(__dirname, '../src/element.js')

const printVueUse = () => (elementConf.map(component => (
    `Vue.component(${component}.name, ${component})\n`)).join('')
)
const element = `/* 请勿手动修改，此文件为npm run element生成 */

import Vue from 'vue'
import {
  ${elementConf.join(',\n  ')}
} from 'element-ui'

${printVueUse()}`

fs.writeFile(elementPath, element, err => {
  if (err) throw err
})
