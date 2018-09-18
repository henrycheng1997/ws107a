// 參考 : https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
const http = require('http')
const url = require('url')

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  switch (req.url) {
    case '/hello': 
      res.setHeader('Content-Type','text/html;charset=UTF-8');
      res.end('<h1>你好</h1>');
      break;
    case '/name':
      res.setHeader('Content-Type','text/html;charset=UTF-8');
      res.end('<p>name:鄭宇哲</p>');
      break;
    case '/id':
      res.setHeader('Content-Type','text/html;charset=UTF-8');
      res.end('<p>id:110510503</p>');
      break;
    case'/':
      res.statusCode = 404;
      res.end();
      break;
      }
  }
)

server.listen(3000)

console.log('Server running at http://localhost:3000')