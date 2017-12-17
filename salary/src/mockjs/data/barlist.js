import Mock from 'mockjs'
let navlist = Mock.mock({
  list: [
    {
      title: '工资条',
      items: [
        {
          name: '发工资',
          path: 'deliver'
        }, {
          name: '工资条管理',
          path: 'manage'
        }, {
          name: '员工反馈',
          path: 'respond'
        }
      ],
      item: ['发工资', '工资条管理', '员工反馈'],
      icon: 'el-icon-location'
    }, {
      title: '企业服务',
      item: ['薪税服务', '报表'],
      items: [
        {
          name: '薪税服务',
          path: 'revenue'
        }, {
          name: '报表',
          path: 'statement'
        }
      ],
      icon: 'el-icon-menu'
    }, {
      title: '企业管理',
      item: ['企业账户', '员工档案', '设置中心', '短信记录'],
      items: [
        {
          name: '企业账户',
          path: 'account'
        }, {
          name: '员工档案',
          path: 'record'
        }, {
          name: '设置中心',
          path: 'setCenter'
        }, {
          name: '',
          path: 'note'
        }
      ],
      icon: 'el-icon-setting'
    }
  ]
})
export default navlist
