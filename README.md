# node-example

## 模块信息

  - bodyParser => 只能解析 POST 数据
  - multer => 可以解析 POST/GET 以外的其他文件类型
  - cookie-parser => 解析 cookie 信息
  - ookie-encrypter => cookie 加密
  - cookie-session => 解析 session 信息
  - consolidate => 模板整合库
  - render 与 send 的区别
    + render => 可以将内容编译了一遍在发送给用户的
    + send => 是直接将内容发送给用户

## 常用系统模块

- 稳定性指数:
    + Stability: 3   => 可靠
    + Stability: 2   => 稳定
    + Stability: 1   => 试验
    + Stability: 0   => 已废弃

  - 常用系统模块：
    + Assert 断言
    + Crypto  加密
    + DNS 域名解析
    + Events  事件
    + Net 网络操作
    + OS  操作系统信息
    + Path  处理文件路径
    + Stream  流操作
    + Timers  定时器
    + ZLIB  压缩

## 无序知识点

  - 通过 `data.toString()` 转换 Buffer 数据
  - GET 数据在 url 中并且数据 < 32K
  - GET 传参时不会触发 `data` 事件
  - POST 数据不再 url 中 < 1G
  - POST 传参数据量较大时会多次触发 `data` 事件依次传递数据

## 路由

> 把不同的目录对应不同的模块, 类似于文件夹思想

 1. 创建 router 实例 => express.router()
 2. 往实例往挂载对应路由
 3. 配置完挂载好的路由在实例到对应 server 的根路由下


## 数据库(mysql)

  - 命令行基本了解
    * 命令行输入 `mysql -uroot -p` 可进入 mysql 数据库
    * 查看数据库列表 => show databases;
    * 使用 xxx 数据库 => use xxx;
    * 看看都有哪些表 => show tables;

  - 数据库管理工具 `Navicat Premium`

  - 基本字段定义知识点
    + UTF-8 => 万国码
    + general-ci => 通用排序规则
    + int => 整数
    + varchat => 小量字符串
    + 主键 => 唯一标识符、性能最高 (自动递增)

## 客户端与数据库

> 任何一个数据库都分为俩部分 客户端/服务端

 1. 安装客户端的 MySQL 模块(client)
 2. 连接服务器 => db = mysql.createConnection(host, port, user...)
 3. 查询 MySQL => db.query(SQL语句, 回调函数)

## 数据库操作

> SQL => Structured Query Language(结构查询语句)

 - 增 => INSERT
 - 删 => DELETE
 - 改 => UPDATE
 - 查 => SELECT

  - SQL 标准写法
    + 关键字大写
    + 库/表/字段需要加上``

### INSERT

- 第一种形式：
    * INSERT INTO 表(字段列表) VALUES(值列表);
    * 注：指定字段，后面的值和前面的字段一一对应
- 第二种形式：
    * INSERT INTO 表(字段列表)
    * VALUES(值列表),(值列表),(值列表);
      * 注：一次性插入多条数据，中间使用逗号隔开

### DELETE

>删除数据，注：使用delete一定要记得使用 WHERE条件限制

  * DELETE FROM 表 WHERE name='郭德纲'；
  * DELETE FROM 表 WHERE id=2；
  * DELETE FROM 表 WHERE id in(11,23,3);

### UPDATE

>更新数组，注：也一定要记得使用 WHERE条件限制

 UPDATE 表 SET money=4000, age=33 WHERE id=1;

### SELECT

#### 基本查询

  + 查询所有表数据 => SELECT * FROM 表名;
  + 显示想要查询的数据 =>  SELECT id, name FROM 表;

#### 条件查询

|指令|含义|
|---|---|
|SELECT * FROM 表 WHERE id<10 AND province='湖北';|查询 id 小于10 并且省份是 湖北的|
|SELECT * FROM 表 WHERE id BETWEEN 3 AND 10;|查询 id 3 到10之间的 数据|
|SELECT * FROM 表 WHERE id IN(3,4,8);|查询 id 为 3 4 8 的数据|
|SELECT * FROM 表 WHERE id NOT IN(3,4,8);|查询 id 不是 3 4 8 的数据|
|SELECT * FROM 表 WHERE name LIKE '_超';|匹配 name 为 什么超|
|SELECT * FROM 表 WHERE name LIKE '%超';|匹配以超结尾的所有记录|

**where后可约束的条件**

|符号|含义|
|---|---|
|> |大于|
|< |小于|
|>= |大于等于|
|<= |小于等于|
|!= |不等于|
|= |等于|
|or |或者|
|and |并且|
|between and |在某个比区间|
|in |在该范围内|
|not in |不在该范围内|
|_驴 |匹配什么驴|
|%x|匹配结尾是驴的|



**SQL整体关键字使用**

|类型|说明|
|---|---|
|from|表|
|select|选择的列|
|where|查询的条件|
|limit|起始记录位置，取记录的条数|
|group by|分组属性 having 分组过滤的条件|
|order by|起始记录位置，取记录的条数|