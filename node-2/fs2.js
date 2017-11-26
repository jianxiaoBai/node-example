const fs=require('fs');

//writeFile(文件名, 内容, 回调)
fs.writeFile("bbb.txt", "asdsad阿萨德撒多撒旦撒旦", (err) => {
  console.log(err);
});
