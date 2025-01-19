# JavaScript

---

严格模式

```javascript
'use strict';
```

函数定义

- 使用函数声明的方式定义一个函数：

```javascript
function func(arg) {
    // FUNCATION BODY
} 
```

- 使用函数表达式的方式定义一个函数

```javascript
const func = function (arg) {
    // FUNCTION BODY
}
```

- 使用箭头函数的方式定义一个函数

```javascript
const func = (arg) => {
    // FUNCTION BODY
}
```

JavaScript Array 数组：

- 使用 `[ ]` 进行声明：

```javascript
const arr = ['A', 'B', 'c'];
```

- 使用 `new Array(args)` 创建：

```javascript
const arr = new Array('A', 'B', 'C');
```

内置函数：

- push：在数组末尾新增一个元素，返回数组长度
- unshift：在数组头新增加一个元素，返回数组长度
- pop：取出数组最后一个元素，返回取出元素
- shift：取出数组第一个元素，返回取出元素
- indexOf：定位元素在数组中的位置
- includes：判断是否包含指定元素，返回是否结果（严格）

JavaScript Object 对象：

---

JavaScript 如何控制网页中的DOM元素的样式与行为？

JavaScript 选择器 定位到具体的DOM元素，给DOM添加相应的监听事件，通过修改DOM元素的ClassList（样式列表），实现各种功能。

---

## JavaScript 引擎


### 作用域 和 作用域链

函数的调用顺序不会影响变量声明的作用域，函数声明时，函数能访问的变量作用域已经确定。

![](./notebook-image/scope-chain-vs-call-stack.png)

### 作用域提升

Hoisting 是 JavaScript 中的一个特性,它指的是变量和函数声明在代码执行之前会被"提升"(Hoist)到它们所在作用域的顶部。这意味着你可以在声明变量或函数之前就使用它们。

变量声明提升:

- 使用 var 声明的变量会被提升到它所在作用域的顶部,但赋值部分不会被提升。
- 使用 let 和 const 声明的变量也会被提升,但是与 var 不同的是,它们不会被初始化为 undefined,而是保持"未初始化"的状态,如果在声明之前访问它们,会抛出 ReferenceError。

函数声明提升:
- 使用函数声明语法 (function foo() {...}) 声明的函数会被完全提升,包括函数名和函数体。
- 使用函数表达式 (const foo = function() {...}) 声明的函数,只有变量声明会被提升,而函数赋值部分不会被提升。

### TDZ（Temporal Dead Zone）暂时性死区

ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
ES6 规定暂时性死区和let、const语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。

暂时性死区的定义：

在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
暂时性死区的本质：

只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

### this 关键字

![](./notebook-image/this-key-word.png)

面向对象语言中 this 表示当前对象的一个引用。 但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。

- 在浏览器全局作用域下，单独使用 this，this关键字指向全局对象（window对象）。
- 作为一个普通函数调用执行（没有明确对象进行调用），在严格模式下，this 是未定义的(undefined)。 
- 箭头函数中的 this 指向的是上一级作用域中的 this。
- 当一个函数被作为方法调用时（对象.方法()调用），在方法中，this 执行该方法调用的对象。
- 在事件中，this 表示接收事件的元素。 
- 类似 call() 和 apply() 方法可以将 this 引用到任何对象。

#### 常规函数 和 箭头函数 this 关键字陷阱



arguments 关键字用于接受普通函数传递进来的参数列表，仅存在于普通函数，对于箭头函数来说是不存在 arguments 关键字的。


---

### 数组解构：


### 对象结构：



## JavaScript 字符串 正则表达式


---

## JavaScript 函数


### call() 函数



### bind() 函数



### 立即调用函数表达式

立即调用函数表达式（IIFE）：

```javascript
(function () {
    // function body
})();
```

对于箭头函数同样适用：

```javascript
(() => {
    // function body
})();
```

### Closure 函数闭包



---

# Web API

## HTML DOM API


## Web Storage API


## Fetch API


## URL API
