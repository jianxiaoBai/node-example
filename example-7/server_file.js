const server = require('express')()
const bodyParser = require('body-parser')
const multer = require('multer')
const pathLib = require('path')
const fs = require('fs')

/**
 * multer => 处理这种 enctype="multipart/form-data"
 * bodyParser => 处理的是 enctype="application/x-www-form-urlencoded"
 */
// 指定上传文件的地址
const objMulter = multer({
  dest: './www/upload'
})

server.use(objMulter.any())

server.post('/', (req, res) => {
  const { originalname, path } = req.files[0]
  // 需要对上传文件增加后缀名(通过path模块处理), 否则无法正常显示
  const newName = `${path}${pathLib.parse(originalname).ext}`

  fs.rename(path, newName, (err) => {
    if (err)
      res.send('失败')
    else
      res.send('成功')
  })
  // console.log(req.files[0])
  // console.log(pathLib.parse(originalname))
})
server.listen(8080)

