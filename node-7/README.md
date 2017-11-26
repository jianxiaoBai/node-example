## node-7 Express 框架

  1.安装
  2.配置
  3.接收请求
  4.响应

  - express 在原生的功能的基础上，增强原有的功能
    + write 不能直接返回一个 json , 而 send 可以
    + use 可以接收 get和post 请求

  - static 用法
    + const static=require('express-static');
    + server.use(static('./www'));
