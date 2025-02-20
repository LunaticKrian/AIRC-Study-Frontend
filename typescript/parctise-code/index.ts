// 定义一个输出Hello的方法
function showInfo() :void {
    console.log("Hello TypeScript!");
}

// 调用方法
showInfo();


// 声明一个Class类
class Person {
    // 声明一个name属性为string
    name: string;

    // 使用 private 声明这个属性是一个私有属性
    private balance: number = 0;

    // 提供 getter 方法获取这个属性


    // 声明一个constructor构造函数，在执行事例化时调用执行
    constructor(name: string) {
        this.name = name;
    }

    // TypeScript Class 中定义方法不需要使用function 关键字
    showInfo() :void {
        // this 指向的当前class创建出来的实例对象
        console.log(this.name);
    }
}

// 创建一个对象
const person = new Person("Krian");
person.showInfo();
