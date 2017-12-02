/* 链式操作 */
const server = require('express')()

server.use('/', (req, res, next) => {
  req.kkk = '三生三世'
  console.log('a')
  next()
})

server.use('/', (req, res) => {
  console.log(req.kkk)
})
server.listen(8080)