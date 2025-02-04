# Node JS

---

## Node JS 核心模块

NodeJs 官方API文档：https://nodejs.org/docs/latest-v22.x/api/index.html

---

### FS（File System）文件系统 模块

```javascript
// 使用commonjs包管理规则
const fs = require('fs');
```

- `readFileSync()`：从文件中读取数据（同步、阻塞）

```javascript
// 使用commonjs包管理规则
const fs = require('fs');

// 同步读取文件
const inputTxt = fs.readFileSync("./txt/input.txt", "utf8");
console.log(inputTxt);
```

- `writeFileSync()`：向文件写入数据（同步、阻塞）

```javascript
// 使用commonjs包管理规则
const fs = require('fs');

// 同步写入数据到文件
const outputText = `This is output data. Time is ${new Date().toLocaleTimeString()}`;
fs.writeFileSync("./txt/output.txt", outputText);
```

- `readFile('文件所在路径', 'utf8', callback回调函数)`：从文件中读取数据（异步、非阻塞）

```javascript
import { readFile } from 'node:fs';

// 回调函数接收两个参数：err执行时出现异常时传递；data执行成功时传递
readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

- `writeFile()`：向文件写入数据（异步、非阻塞）

```javascript
const fs = require('fs');
const data = 'Hello, World!';

fs.writeFile('example.txt', data, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File written successfully');
    }
});
```

#### 阻塞、非阻塞（同步、异步）：

![blocking-vs-nonblocking.png](notebook-Image/blocking-vs-nonblocking.png)

#### 回调地狱

使用 Promises 或者 Async/Await 来解决回调地域问题。

---

### HTTP 模块

```javascript
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
```

---

### URL 模块

Routing 路由

通过加载本地JSON文件，并进行JSON解析为一个对象，以HTTP的方式进行请求响应返回前端，实现API接口。

通过Node服务端可以使用HTML模板构建HTML文件，以HTTP的方式直接响应请求，返回HTML页面。



---

## ⚠️ 服务端响应类型汇总记录

