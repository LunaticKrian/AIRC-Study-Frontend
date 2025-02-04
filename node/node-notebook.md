# Node JS

## Node JS 核心模块

NodeJs 官方API文档：https://nodejs.org/docs/latest-v22.x/api/index.html



### FS

```javascript
// 使用commonjs包管理规则
const fs = require('fs');
```

- `readFileSync()`：从文件中读取数据

```javascript
// 使用commonjs包管理规则
const fs = require('fs');

// 同步读取文件
const inputTxt = fs.readFileSync("./txt/input.txt", "utf8");
console.log(inputTxt);
```

- `writeFileSync()`：向文件写入数据

```javascript
// 使用commonjs包管理规则
const fs = require('fs');

// 同步写入数据到文件
const outputText = `This is output data. Time is ${new Date().toLocaleTimeString()}`;
fs.writeFileSync("./txt/output.txt", outputText);
```



