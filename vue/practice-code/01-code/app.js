// 构建一个Vue App事例对象，挂载到 app 这个dom元素上
Vue.createApp({
    // Vue 数据域
    data() {
        return {
            name: "Krian",
        }
    }
}).mount("#app")

// Vue 支持构建多个实例对象
Vue.createApp({
    data() {
        return {
            location: "china",
        }
    }
}).mount("#app-location")