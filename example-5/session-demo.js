const server = require('express')()
const cookieParser = require('cookie-parser')
// 操作 session 信息
const cookieSession = require('cookie-session')

server.listen(8080)

/**
 * 注意 cookieParser 和 cookieSession 的顺序
 */
server.use(cookieParser())
server.use(cookieSession({
  name: 'ssn',                  // 默认 name 是 session
  keys: ['dsafdfew', 'sdgfdg'], // 为了安全 cookieSession 强制要求设置 keys 参数
  maxAge: 10 * 60 * 1000        // 有效期 十分钟
}))
/**
 * 删除session => delete req.session
 * 获取session => req.session['count']
 */
server.use('/', (req, res) => {
  if (req.session['count']) {
    req.session['count']++
  } else {
    req.session['count'] = 1
  }
  console.log(req.session.count)
  res.send('ok')
})