const fs = require('fs');

// 同步读取文件
const inputTxt = fs.readFileSync("./txt/input.txt", "utf8");
console.log(inputTxt);

// 同步写入数据到文件
const outputText = `This is output data. Time is ${new Date().toLocaleTimeString()}`;
fs.writeFileSync("./txt/output.txt", outputText);