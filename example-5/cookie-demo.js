/*
 * cookie/session 的使用
 */

const server = require('express')()
// 读取 cookie 信息
const cookieParser = require('cookie-parser')
// 可对 cookie 进行加密 (待实践)
// const cookieEncrypter = require('cookie-encrypter')

const signs = 'jdsfheklrtnkm'
// 和使用 bodyParser 一样, 传入 signs 是因为当取 cookie 签名值时,不需要与值无关的信息
server.use(cookieParser(`${signs}`))

server.use('/', (req, res) => {
  /**
   * 添加cookie => res.cookie('键', '值')
   * 删除cookie => res.clearCookie('键')
   * 读取未签名cookie => req.cookies
   * 读取签名cookie => req.signedCookies
   */
  // 设置签名的信息, 签名是为了防止篡改, 如果被篡改后台可以及时发现
  req.secret = `${signs}`

  console.log(req.cookies)
  console.log(req.signedCookies)

  res.cookie('name', '赵铁柱')
  res.cookie('user', '王大锤', {
    //path: '/aaa',                     // 只在 aaa 路径下有效, 不设置表示在全局都可以访问
    maxAge: 2 * 24 * 60 * 60 * 1000,  // 2 天之后过期
    signed: true                      // 此 cookie 设置签名
  })
  res.send('你好啊')
})
server.listen(8080)