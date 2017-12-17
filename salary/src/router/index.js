import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/subject/Home/Home'
import Payroll from '../components/subject/Home/SalaryClause/children/Payroll'
import Manage from '../components/subject/Home/SalaryClause/children/Manage'
import CoupleBack from '../components/subject/Home/SalaryClause/children/CoupleBack'
import SalaryClause from '../components/subject/Home/SalaryClause/SalaryClause'
import BusinessManage from '../components/subject/Home/BusinessManage/BusinessManage'
import BusinessServe from '../components/subject/Home/BusinessServe/BusinessServe'
import PayServe from '../components/subject/Home/BusinessServe/children/payServe'
import Report from '../components/subject/Home/BusinessServe/children/Report'
import Account from '../components/subject/Home/BusinessManage/children/Account'
import Message from '../components/subject/Home/BusinessManage/children/Message'
import Record from '../components/subject/Home/BusinessManage/children/Record'
import Setcenter from '../components/subject/Home/BusinessManage/children/Setcenter'
import Login from '../components/subject/Home/Login/Login'
Vue.use(VueRouter)
let newRouter = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      redirect: '/home'
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    }, {
      path: '/salaryClause',
      name: 'SalaryClause',
      component: SalaryClause,
      meta: {
        title: '工资条'
      },
      children: [
        {
          path: 'payroll',
          name: 'payroll',
          component: Payroll,
          meta: {
            title: '发工资条'
          }
        }, {
          path: 'manage',
          name: 'manage',
          component: Manage,
          meta: {
            title: '工资条管理'
          }
        }, {
          path: 'coupleBack',
          name: 'coupleBack',
          component: CoupleBack,
          meta: {
            title: '员工反馈'
          }
        }
      ]
    }, {
      path: '/businessServe',
      name: 'BusinessServe',
      component: BusinessServe,
      meta: {
        title: '企业服务'
      },
      children: [
        {
          path: 'payServe',
          name: 'PayServe',
          component: PayServe,
          meta: {
            title: '薪税服务'
          }
        }, {
          path: 'report',
          name: 'Report',
          component: Report,
          meta: {
            title: '报表'
          }
        }
      ]
    }, {
      path: '/businessManage',
      name: 'BusinessManage',
      component: BusinessManage,
      meta: {
        title: '企业管理'
      },
      children: [
        {
          path: 'account',
          name: 'Account',
          component: Account,
          meta: {
            title: '企业账户'
          }
        }, {
          path: 'setcenter',
          name: 'Setcenter',
          component: Setcenter,
          meta: {
            title: '设置中心'
          }
        }, {
          path: 'message',
          name: 'Message',
          component: Message,
          meta: {
            title: '短信记录'
          }
        }, {
          path: 'record',
          name: 'Record',
          component: Record,
          meta: {
            title: '员工档案'
          }
        }
      ]
    }
  ]
})

// let routerArr = [
//   {
//     path: '/salaryClause',
//     name: 'SalaryClause',
//     component: SalaryClause,
//     meta: {
//       title: '工资条'
//     },
//     children: [
//       {
//         path: 'payroll',
//         name: 'payroll',
//         component: Payroll,
//         meta: {
//           title: '发工资条'
//         }
//       }, {
//         path: 'manage',
//         name: 'manage',
//         component: Manage,
//         meta: {
//           title: '工资条管理'
//         }
//       }, {
//         path: 'coupleBack',
//         name: 'coupleBack',
//         component: CoupleBack,
//         meta: {
//           title: '员工反馈'
//         }
//       }
//     ]
//   }, {
//     path: '/businessServe',
//     name: 'BusinessServe',
//     component: BusinessServe,
//     meta: {
//       title: '企业服务'
//     },
//     children: [
//       {
//         path: 'payServe',
//         name: 'PayServe',
//         component: PayServe,
//         meta: {
//           title: '薪税服务'
//         }
//       }, {
//         path: 'report',
//         name: 'Report',
//         component: Report,
//         meta: {
//           title: '报表'
//         }
//       }
//     ]
//   }, {
//     path: '/businessManage',
//     name: 'BusinessManage',
//     component: BusinessManage,
//     meta: {
//       title: '企业管理'
//     },
//     children: [
//       {
//         path: 'account',
//         name: 'Account',
//         component: Account,
//         meta: {
//           title: '企业账户'
//         }
//       }, {
//         path: 'setcenter',
//         name: 'Setcenter',
//         component: Setcenter,
//         meta: {
//           title: '设置中心'
//         }
//       }, {
//         path: 'message',
//         name: 'Message',
//         component: Message,
//         meta: {
//           title: '短信记录'
//         }
//       }, {
//         path: 'record',
//         name: 'Record',
//         component: Record,
//         meta: {
//           title: '员工档案'
//         }
//       }
//     ]
//   }
// ]
// let newRouter = new VueRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       redirect: '/home'
//     }, {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     }, {
//       path: '/home',
//       name: 'Home',
//       component: Home,
//       meta: {
//         title: '首页'
//       }
//     }
//   ]
// })
// setTimeout(() => {
//   newRouter.addRoutes(routerArr)
//   newRouter.options.routes = [...newRouter.options.routes, ...routerArr]
//   console.log(newRouter)
// }, 2000)
// newRouter.beforeEach((to, from, next) => {
//   if (sessionStorage.getItem('infor')) {
//     next()
//   } else {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
export default newRouter
