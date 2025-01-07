# JavaScript 模块化语法



## CommonJS 模块化语法


## ES6 模块化语法

在ES6Module中使用export命令来导出模块。export有两种形式：

- 命名导出：

### 模块化导出：

```javascript
// 写法1：
export const name = 'calculator' ;
export const add = function(a, b) {return a + b};
// 写法2：
const name = 'calculator' ;
const add = function (a , b ) { return a + b ; }; 
export { name, add };
```

在使用命名导出时，可以通过as关键字对变量重命名

```javascript
const name = 'calculator' ;
const add = function (a , b ) { return  a + b ; };

// 在导入时即为name 和getSum
export {name, add as getSum };
```

- 默认导出：

与命名导出不同，模块的默认导出只能有一个。

```javascript
export default {
    name: 'calculator', 
    add: function (a, b) {
        return a + b;
    }
}
```

我们可以将export default理解 对外输出了一个名为default的变量，因此不需要 像命名导出一样进行变量声明，直接导出值即可。

```javascript
// 导出字符串
export default 'This si calculator.js'; 
// 导出class
export default class {} 
//  导出匿名函数
export default function () {}
```

### 模块化导入：

加载带有命名导出的模块时，import后面要跟 一对大括号来将导人的变量名包裹起 来，并且这些变量名需要与导出的变量名完全一致。
导入变量的效果相当于在当前作用 域下声明了这些变量(name 和add)，并且不可对其进行更改，也就是所有导人的变量 都是只读的

