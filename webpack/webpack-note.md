# Webpack Notebook

安装命令：

```shell
npm install webpack webpack-cli --save-dev
```

npm 设置淘宝镜像：

```shell
 npm config set registry https://registry.npmmirror.com
```

npm 默认地址：

```shell
npm config set registry https://registry.npmjs.org
```

检查当前仓库配置：

```shell
npm get registry
```

这里我们同时安装 了`webpack` 以及`webpack -cli`。`webpack` 是核心模块，`webpack-cli` 则是命令行工具。

安装结束之后，在命令行执行`npx webpack -v`以及`npx webpack-cli -v`，可显示各 自的版本号，即证明安装成功。

webpack 打包构建命令：

```shell
npx webpack --entry=./script/index.js --output-filename=./bundle.js --mode=development
```

- 命令行的第1个参数entry是资源打包的入口 。Webpack从这里开始进行模块依赖的查找，得到项目中包含index.js 和add-content.js两个模块，并通过它们来生成最终产物。
- 命令行的第2个参数output-filename 是输出资源名。你会发现打包完成后工程中出现了一个dist目录，其中包含的bundle.js就是Webpack的打包结果。
- 最后的参数mode指的是打包模式。Webpack 为开发者提供了development、production、none三种模式。当置于development和production模式下时 ，它会自动添加适合于当前模式的一系列配置，减少了人为的工作量。在开发环境下，一般设置为development模式就可以了

可以在`package.json`下的`scripts`标签域中自定义`npm`执行指令：

```shell
"scripts": {
  "build": "webpack --entry=./script/index.js  --output-filename=bundle.js --mode=development"
}
```

配置完成后，可以在控制台中通过执行如下命令来调用`webpack`进行打包构建

```shell
npm run build
```

}

`scripts`是`npm`提供的脚本命令功能，在这里我们可以直接使用由模块所添加的指令（比如用 `webpack` 取代之前的 `npx webpack`）

Webpack默认的源代码人又就是src/index.js

---

## Webpack 配置文件

webpack 的默认配置文件 webpack.config.js

一般webpack.config.js是默认放在根目录的，不在根目录的时候需要在package.json中制定位置，我的配置文件目录是config/webpack.config.js,在package.json文件中的配置为：

PS：根目录是相对于package.json而已，package.json位于哪一个目录，这个目录就是根目录。

```shell
"scripts": {
  "build": "webpack --config ./config/webpack.config.js",
}
```

webpack.config.js文件中需要定义上下文地址为：

```javascript
const path = require('path')

module.exports = {
    //context:path.resolve(__dirname,'../'),这句不需要, __dirname指定的就是根目录
    entry: {
      app: ['./src/index.js'],
      about: ['./src/about.js']
    },
    output: {
    
      path: path.resolve(__dirname,'../dist'),
      filename: '[name].js',
    }
};
```

webpack-dev-server 

```shell
npm install webpack-dev-server --save-dev
```

## Webpack 预处理器 Loader

---

## 样式预处理

### sass 与 scss：

```shell
npm install sass-loader node-sass
```

