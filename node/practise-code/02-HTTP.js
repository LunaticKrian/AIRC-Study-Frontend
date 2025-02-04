const http = require('http')

// 创建一个基于HTTP协议的服务
const server = http.createServer((req, res) => {
    console.log('HTTP server started');
    console.log(req);
    res.end('Hello from the http server');
});

// 设置服务端Socket监听
server.listen(8080, "127.0.0.1", () => {
    console.log("Listening on port 8080");
});

