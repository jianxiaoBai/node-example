# node-example

## node-1 http 系统模块使用

server.js 按照浏览器对应的请求响应对应数据 (待完善)

知识点:

 * request = 请求 => 输入
 * response = 响应 => 输出
 * 响应完毕后需执行 end 事件

## node-2 fs文件模块


 - fs.js 读文件
 - fs2.js 写文件
 - server.js 按照浏览器对应的请求响应对应数据 (完善)

知识点:

 - 通过拼接读取访问 www 目录下的文件
 - 通过 `data.toString()` 转换 Buffer 数据

## node-3 http数据解析-get/post

GET 数据解析:

  1. querystring
  2. url

知识点:

 - GET 数据在 url 中并且数据 < 32K
 - POST 数据不再 url 中 < 1G
 - 前端请求 form、ajax、jsonp 在后台都是一样的处理方式
 - node 事件机制: data => 一段数据, end => 全部数据

## node-4 融合 get/post、文件请求

main_server.js 可接受get post 请求,和文件请求


## node-5 总结: 简易 httpServer 搭建(注册/登录)

接口：
/user?act=reg&user=aaa&pass=123456
  {"ok": false, "msg": "原因"}

/user?act=login&user=aaa&pass=123456
  {"ok": true, "msg": "原因"}


对文件访问：
http://localhost:8080/1.html
http://localhost:8080/ajax.js
http://localhost:8080/1.jpg

对接口访问：
http://localhost:8080/user?act=xx...
http://localhost:8080/news?act=xxx...

## node-6 系统模块介绍

稳定性指数:
  Stability: 3   => 可靠
  Stability: 2   => 稳定
  Stability: 1   => 试验
  Stability: 0   => 已废弃


常用系统模块：

  - Assert 断言
  - Crypto  加密
  - DNS 域名解析
  - Events  事件
  - Net 网络操作
  - OS  操作系统信息
  - Path  处理文件路径
  - Stream  流操作
  - Timers  定时器
  - ZLIB  压缩

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











