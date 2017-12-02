/* 原生node实现登录注册功能-2 */
const fs = require('fs')
const http = require('http')
const urlLib = require('url')
const queryString = require('querystring')

let basedata = {
  zhangsan: '1111',
  lisi: '222',
  xiaoming: '333'
}

const server = http.createServer((req, res) => {
  let str = '' , msg = '', state = null;
  const { pathname, query } = urlLib.parse(req.url, true)

  req.on('data', d => str += d)
  req.on('end', () => {
  const { user, pass, type } = (Object.keys(query).length && query) || queryString.parse(str)
  if (pathname === '/user') {
    if (type === 'register') {
      if (user in basedata) {
        msg = '账号已注册'
        state = false
      } else {
        basedata[user] = pass
        msg = '注册成功'
        state = true
      }
    } else {
      if (user in basedata && basedata[user] === pass) {
        msg = '登录成功'
        state = true
      } else {
        msg = '用户名或密码错误'
        state = false
      }
    }
    res.write(`{
      msg: ${msg},
      ok: ${state}
    }`)
    res.end()
  } else {
    // 文件请求
    fs.readFile(`./www${pathname}`, (err,data) => {
      res.write(err ? '404' : data)
      res.end()
    })
  }
  })

})

server.listen(8080)
