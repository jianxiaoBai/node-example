const http = require('http');
const querystring = require('querystring');

http.createServer(function (req, res){
  // 用于字符串拼接
  var str = '';

  // 当 POST 数据量比较大的时候 data 是可以触发多次的
  var i = 0;
  req.on('data', function (data){
    console.log(`第${i++}次收到数据`);
    str += data;
  });

  // end 只最后时触发一次
  req.on('end', function (){
    // 数据拼接完毕
    var POST = querystring.parse(str);
    console.log(POST);
  });
}).listen(8080);
