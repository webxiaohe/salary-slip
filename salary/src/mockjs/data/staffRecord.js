import Mock from 'mockjs'
let stafflist = Mock.mock({
  'list|20': [
    {
      name: '@cname',
      id: /\d{11}/,
      'status|0-2': 1,
      shop: '@cword(3, 5)'
    }
  ]
})
export default stafflist
