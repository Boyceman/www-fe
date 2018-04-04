import Mock from 'mockjs'

const baseUrl = 'http://g.cn'

export const listData = Mock.mock(`${baseUrl}/list`, {
  count: 50,
  errorCode: 0,
  errorMsg: 'null',
  'list|10': [
    {
      'id': '@increment',
      'name': '@cname （@ctitle(5)）',
      'title': '@ctitle(10,20)',
      'organization': '@csentence(4)',
      'image': '@image(\'122x112\', \'#d52535\')',
      'date': '@date("yyyy-MM-dd HH:mm-HH:mm")',
      'recommend': '@boolean'
    }
  ]
})
