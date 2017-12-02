const mysql = require('mysql')

// 1. 连接 => createConnection({host/user/password/database})

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // port: '3308',
  password: '',
  database: '20171121'
})


db.query('SELECT * FROM `user_table`', (err, data) => {
  if (err)
    console.log('出错了')
  else
    console.log(JSON.stringify(data,null,2))
})
// console.log(db)