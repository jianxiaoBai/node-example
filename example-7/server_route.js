const express = require('express')
const server = express()

server.listen(8080)

// 定义 routeUser 目录
const routeUser = express.Router()
routeUser.get('/1.html', (req, res) => {
  res.send('111')
})

routeUser.get('/2.html', (req, res) => {
  res.send('222')
})

server.use('/user', routeUser)

// 定义 routeArticle

const routeArticle = express.Router()

routeArticle.get('/list', (req, res) => {
  res.send('这是 list')
})

routeArticle.get('/port', (req, res) => {
  res.send('这是 port')
})

server.use('/article', routeArticle)