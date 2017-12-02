/* express 实现登录注册功能 */
const server = require('express')()
const static = require('express-static')

/*
  server.post('/', () => {
    console.log('POST请求')
  })
  server.get('/', () => {
    console.log('GET请求')
  })
*/
const basedata = {
  zhangsan: '1111',
  xiaohong: '2222',
  xiaoming: '3333'
}
server.use('/login', (req, res) => {
  const { user, pass } = req.query
  if (user in basedata) {
    if (basedata[user] === pass) {
      res.send('登录成功')
    } else {
      res.send('密码错误')
    }
  } else {
    res.send('没有此账号')
  }
})
server.use(static('./www'))
server.listen(8080)