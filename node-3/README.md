## node-3 http数据解析-get/post

GET 数据解析:

  1. querystring
  2. url

知识点:

 - GET 数据在 url 中并且数据 < 32K
 - POST 数据不再 url 中 < 1G
 - 前端请求 form、ajax、jsonp 在后台都是一样的处理方式
 - node 事件机制: data => 一段数据, end => 全部数据