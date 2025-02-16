# TypeScript

---

![course-outline.png](notebook-image/course-outline.png)


---

## 安装并使用 TypeScript

- 官网地址：https://www.typescriptlang.org/
- 官方文档：https://www.typescriptlang.org/docs/

![typescript-homepage.png](notebook-image/typescript-homepage.png)

### 环境配置

#### 安装 TypeScript

- 项目开发依赖安装：

```shell
npm install typescript --save-dev
```

- 全局安装：

```shell
npm install -g typescript
```

#### 编译TS文件

```shell
tsc TS文件
```

---

lite-server

用于轻量级开发的节点服务器，为web应用程序提供服务，在浏览器中打开它，在html或javascript更改时刷新，使用套接字注入CSS更改，并在找不到路由时具有回退页面。

https://www.npmjs.com/package/lite-server

```shell
npm install lite-server --save-dev
```

---

## TypeScript 数据类型

![core-data-type.png](notebook-image/core-data-type.png)

PS：TypeScript 的类型系统只能在开发（编码）阶段辅助进行类型检查，TypeScript 最终会被编译成 JavaScript，而JavaScript本身不具备类型检查功能。

### 类型推断



### 联合数据类型



### 类型别名



### unknown 类型


### never 类型

---

## TypeScript 编译

监视TS脚本的更新，然后实时编译为JS文件（监听单个文件）

```shell
tsc index.ts --watch
```

### 多模块编译

在工程目录中执行这个命令后会自动生成一个`tsconfig.json`文件

```shell
tsc --init
```

此时执行 `tsc --watch` 就可以监视整个工程目录下的TS更新变化从而进行自动编译。

`tsconfig.json` 配置项：

- exclude：在`tsconfig.json`配置文件中，可以针对需要编译排除的文件进行配置：

```json
"exclude": [
    "node_modules"  // 这是一个默认的配置
]
```

- include：在`tsconfig.json`配置文件中，可以指定需要编译的TS文件：

```json
"include": [
  "index.ts"      // 这里指定的是需要编译的TS，如果没有在这个指定项中，则不会被编译
]
```

