/*
 * 功能:按照浏览器对应的要求响应对应数据 (升级版)
 */
const http = require('http');
const fs = require('fs');

var server = http.createServer((req, res) => {
  /*
   * req.url =>'/index.html'
   * 读取 => './www/index.html'
   *  './www' + req.url
   */
  var file_name='./www' + req.url;

  // 通过拼接读取访问 www 目录下的文件
  fs.readFile(file_name, (err, data) => {
    if (err){
      res.write('404');
    }else{
      // console.log(data.toString())
      // 如果读取成功则响应客户端该文件内容
      res.write(data);
    }
    res.end();
  });
});

server.listen(8080);
