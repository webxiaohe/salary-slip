const mysql = require('mysql')
const connect = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: '1507a',
  insecureAuth: true
})
connect.connect(err => {
  console.log('数据库连接成功')
  if (err) {
    console.log('数据库连接失败')
    throw err
  }
})
module.exports = connect
