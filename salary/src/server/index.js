const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connect = require('./Mysqls/connect')
const cookie = require('cookie-parser')
const IsLogin = require('./IsLogin')
app.use(cookie())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// app.all('*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Custom-Header')
//   res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETF,OPTIONS')
//   // res.header('X-Powered-By', '3.2.1')
//   res.header('Access-Type', 'application/json;charset=utf-8')
//   next()
// })
app.post('/api/addStaff', (req, res) => {
  const {
    name,
    age,
    sex,
    tel,
    depart,
    post,
    startDate,
    payMoney,
    workTime
  } = req.body
  let sql = 'insert into staffmanage (name, age, sex, tel, depart, post, startDate, payMoney, workTime) values (?,?,?,?,?,?,?,?,?)'
  connect.query(sql, [
    name,
    age,
    sex,
    tel,
    depart,
    post,
    startDate,
    payMoney,
    workTime
  ], (error, result) => {
    if (error) {
      console.log('失败')
    } else {
      IsLogin(req, res, result)
    }
  })
})
app.post('/api/getStafflist', (req, res) => {
  // const {
  //   pageStar,
  //   pageSize
  // } = req.body
  // let sql = 'select * from staffmanage order by id desc limit ?,?'
  // connect.query(sql, [
  //   pageStar * pageSize,
  //   pageSize
  // ], (error, result) => {
  //   if (error) {
  //     console.log(error)
  //   } else {
  //     IsLogin(req, res, result)
  //   }
  // })
  let sql = ''
  if (req.body.pageAll === true) {
    sql = 'select * from staffmanage'
  } else {
    const {
      pageStar,
      pageSize
    } = req.body
    sql = `select * from staffmanage order by id desc limit ${pageStar * pageSize},${pageSize}`
  }
  connect.query(sql, (error, result) => {
    if (error) {
      console.log(error)
    } else {
      IsLogin(req, res, result)
    }
  })
})
app.post('/api/getStaffAll', (req, res) => {
  // let sql = ''
  // sql = 'select * from staffmanage'
  // if (req.query.val) {
  //   let status = req.body.val
  //   sql = `select * from staffmanage where status='${status}'`
  // }
  let val = req.body.val
  let sql = 'select * from staffmanage where status=?'
  connect.query(sql, [val], (error, result) => {
    if (error) {
      console.log('查询失败')
    } else {
      IsLogin(req, res, result)
    }
  })
})
app.post('/api/removeStaff', (req, res) => {
  const id = req.body.id
  const status = req.body.status
  let sql = 'update staffmanage set status=? where id=?'
  connect.query(sql, [status, id], (error, result) => {
    if (error) {
      console.log('删除失败')
    } else {
      IsLogin(req, res, {
        msg: '删除成功',
        data: result
      })
    }
  })
})
app.get('/api/goHome', (req, res) => {
  IsLogin(req, res, true)
})
app.post('/api/login', (req, res) => {
  const {
    username,
    pass
  } = req.body
  let sql = 'select * from login where username=? and pass=?'
  connect.query(sql, [
    username,
    pass
  ], (error, result) => {
    if (error) {
      res.status(403).send({
        msg: '查找失败'
      })
    } else {
      if (result.length >= 1) {
        res.cookie('token', 'hgewiowieowie', { expires: new Date(Date.now() + 900000), httpOnly: true })
        res.send(result[0])
      } else {
        res.status(401).send({
          msg: '用户名密码错误'
        })
      }
    }
  })
})
// app.listen(3000, (err) => {
//   if (err) {
//     console.log('报错')
//   }
//   console.log('http://localhost:3000')
// })
app.listen(3000)
