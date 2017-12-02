const server = require('express')()
const static = require('express-static')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
// bodyParser 只能解析数据类的文件,无法解析其他文件类型 , multer 中间件就可以
const bodyParser = require('body-parser')
const multer = require('multer')
// 模板整合库
const con = require('consolidate')
// const jade = require('jade')
// const ejs = require('ejs')

server.listen(8080)

// 1. 解析 cookie => res.cookies
server.use(cookieParser('ksadhgknclrwqmr'))
// 2. 使用 session => req.session
server.use(cookieSession({
  name: 'test_id',
  keys: ['sads', 'gfdgcbv', 'sdcgfdret'],
  maxAge: 20 * 60 * 1000
}))
// 3. 数据解析
  // post 数据
  server.use(bodyParser.urlencoded({
    extended: false
  }))
  // 文件数据
  server.use(multer({
    dest: './www/upload'
  }).any())

// 4. 配置模板引擎
/**
 * 配置模板引擎须知道一下几点
 * 输出什么 => 在哪里 => 什么模板
 */
// 以 html 形式输出
server.set('view engine', 'html')

// 模板在当前目录的 views 文件夹下
server.set('views', './views')

// 当需要编译 html 时使用 jade 模板
server.engine('html', con.jade)

// user accessing
/**
 * render 和 send 的区别
 * render => 是将内容编译了一遍在发送给用户的
 * send => 是直接将内容发送给用户
 */
server.use('/index', (req, res) => {
  if (req.session.sessionId) {
    // 登录过
    res.render('1.jade', {
      name: '白晓见'
    })
  } else {
    // 未登录
    req.session.sessionId = '撒大声地'
    res.render('login.jade')
  }
})
/*server.use('/', (req, res) => {
  res.send('撒旦撒撒多撒多')
})*/
// 5. static 数据
server.use(static('./www'))










