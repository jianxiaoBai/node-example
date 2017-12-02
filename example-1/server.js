/* 原生node实现登录注册功能-1 */
const fs = require('fs');
const http = require('http');
const urlLib = require('url');
const queryString = require('querystring');

// 模仿数据库
const basedata = {
  zhangsan: 1111,
  zhaosi: 2222,
  xiaoming: 1223
}

var server = http.createServer((req, res) => {
  let str = '';
  /*
   * get 请求不会触发 data 事件
   * post 请求可以触发 data 事件
   *
   */
  req.on('data', d => {
    str += d
  })

  req.on('end', x => {
    const { pathname, query } = urlLib.parse(req.url, true)
    if (pathname === '/user') {
      // 如果 GET 请求的query是空对象 那么就访问 POST 的str
      const { user, pass, type } = (Object.keys(query).length && query) || queryString.parse(str);
      if (type === 'register') {
        if (user in basedata) {
          res.end('该账户已存在')
        } else {
          if (user && pass) {
            basedata[user] = pass
            res.end('注册成功')
          } else {
            res.end('请填写用户名或密码')
          }
        }
      } else {
        if (user in basedata) {
          if (basedata[user] == pass) {
            res.end('登录成功')
          } else {
            res.end('密码错误')
          }
        } else {
          res.end('账号或密码错误')
        }
      }
    } else {
        // 文件读取
        fs.readFile(`./www${pathname}`, (err, data) => {
            if (err) {
                res.write('404')
            } else {
                res.write(data)
            }
            res.end()
        })
    }
  })
})

server.listen(8080);