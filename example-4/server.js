/* post 数据的解析 --- body-parser 的用法 */
/*
 * req.query => GET 数据
 * req.body  => POST 数据 (需要 bodyParser)
 */
const server = require('express')()
const bodyParser = require('body-parser')

server.listen(8080)

// 2 * 1024 => 2K * 1024 => 2M兆 * 1024 => 2G
/**
 * 这里的 use 执行之后 ,
 * 下一个 use 依然可以执行是因为 bodyParser 内部调用的 next 函数 ,
 * server1.js 中有例子
 */
server.use(bodyParser.urlencoded({
  extended:  false, // 扩展模式, 一般没什么用
  limit:  2 * 1024 * 1024// post 数据限制-2M(默认100k)
}))

server.use('/', (req, res) => {
  console.log(req.body)
  res.end()
})

// server.use('/', () => {})  对跟路径的变化都有反应
// server.use(() => {})       对所有路径的变化都有反应


