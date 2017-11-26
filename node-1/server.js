/*
 * 功能:按照浏览器对应的要求响应对应数据
 */

// 引用 node 自身 http API
const http = require('http');
// 创建服务器
var server = http.createServer((request, response) => {
  /*
   * request = 请求 => 输入
   * response = 响应 => 输出
   */
  switch (request.url) {
    // 当用户访问 1.html 时响应客户端为 aaa
    // 例如: http://localhost:8080/1.html
    case '/1.html':
      response.write("aaa");
      break;
    case '/2.html':
      response.write("bbb");
      break;
    default:
      response.write('404');
      break;
  }
  // 响应完毕后需执行 end 事件, 否则页面一直处于请求状态
  response.end();
});

//监听 8080 端口所发生的事情
server.listen(8080);

// http://localhost:8080/
