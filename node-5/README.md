## node-5 总结: 简易 httpServer 搭建(注册/登录)

接口：
/user?act=reg&user=aaa&pass=123456
  {"ok": false, "msg": "原因"}

/user?act=login&user=aaa&pass=123456
  {"ok": true, "msg": "原因"}


 - 对文件访问：
   - `http://localhost:8080/1.html`
   - `http://localhost:8080/ajax.js`
   - `http://localhost:8080/1.jpg`

 - 对接口访问：
   - `http://localhost:8080/user?act=xx...`
   - `http://localhost:8080/news?act=xxx...`
