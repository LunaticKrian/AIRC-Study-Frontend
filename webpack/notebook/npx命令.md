# npx 命令

npm 从5.2版开始，增加了 npx 命令。Node 自带 npm 模块，所以可以直接使用 npx 命令。

npx 想要解决的主要问题，就是调用项目内部安装的模块。

npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。

由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。

https://www.ruanyifeng.com/blog/2019/02/npx.html

