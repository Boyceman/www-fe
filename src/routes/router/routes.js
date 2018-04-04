/* 请勿手动修改，此文件为npm run route生成 */

import combineRoutes from './combineRoutes'
import Homepage from '../Homepage'
import Login from '../Login'
import PageNotFound from '../PageNotFound'

export const routes = [
  Homepage._router,
  Login._router,
  PageNotFound._router
]

export default combineRoutes(routes)
