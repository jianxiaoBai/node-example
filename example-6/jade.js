const jade = require('jade')
const fs = require('fs')
const str = jade.renderFile('./demo.jade', {
              pretty: true,
              name: '阿萨德',
              json: {width: '200px', height: '200px', background: 'red'},
              arr: ['aaa', 'left-wrap'],
              content: "<div>噢噢噢噢<span>撒旦撒旦</span></div>"
            })

fs.writeFile('./index.html', str, (err) => {
  if (err)
    console.log('写入失败')
  else
    console.log('写入成功')
})
console.log(str)
