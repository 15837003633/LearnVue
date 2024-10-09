# Day1

## 一. 邂逅Vue.js开发

### 1.1. Vue介绍

* Vue的介绍
* Vue在前端的地位
  * react
  * angular

* 直接学习Vue3



### 1.2. Vue下载和使用

* CDN引入
* 下载引入
* 初体验一下Vue开发



### 1.3. Vue的三个案例

#### 1.3.1. 动态数据展示



#### 1.3.2. 动态展示列表

* v-for



#### 1.3.3. 计数器案例

* counter
* increment
* decrement



### 1.4. 命令式和声明式编程的区别

* 原生实现计时器



### 1.5. MVC和MVVM的模型区别





### 1.6. options api的data详解

* data必须是一个函数, 函数会返回一个对象
* data返回的对象, 会被Vue进行劫持(放到响应式系统中), 所以data的数据发生改变时, 界面会重新渲染





### 1.7. options api的methods详解

* 对象 -> 很多函数
* 里面函数不能是箭头函数:
  * this





## 二. 基础 - 模板语法

### 2.1. 添加代码片段





### 2.2. mustache语法(插值语法)

* 表达式



### 2.3. 不算常用的指令

* v-once
* v-text
* v-html
* v-pre
* v-cloak



### 2.4. 新的指令 v-memo





### 2.5. v-bind绑定属性

#### 2.5.1. v-bind绑定基本属性

* src
* href





#### 2.5.2. v-bind绑定class

* 基本绑定
* 对象语法:
  * { className: Boolean }
* 数组语法:





#### 2.5.3. v-bind绑定style

* 对象语法:
  * { cssname: cssvalue }
* 数组语法:
  * [obj1, obj2]



### 2.6. 动态绑定属性名

```html
:[name]=""
```



### 2.7. v-bind绑定对象

* 将对象中所有key/value, 作为属性绑定到元素(组件)上





### 

# Day2

## 一. 模板语法

### 1.1. 事件绑定 v-on用法

#### 1.1.1. v-on各种写法

* v-on:click="counter++"
* v-on:click
* @click
* 别的事件
* v-on="{click: xxxx}"

* 修饰符stop



#### 1.1.2. 各种参数方式

* 默认传递 event
* 自定义参数:
  * name, age, $event





#### 1.1.3. 修饰符stop





### 1.2. 条件渲染

#### 1.2.1. v-if/else/else-if





#### 1.2.2. template元素

* v-if
* v-for





#### 1.2.3. v-show

* if用法区别:
  * v-show不能和template结合
  * v-else不能结合

* if的本质区别:
  * v-if为false元素会销毁/不存在
  * v-show为false元素的display none
* 选择:
  * 切换非常频繁使用v-show
  * 不频繁 v-if



## 二. 列表渲染

### 1.1. v-for的基本使用

* item in 数组
* (item, index) in 数组
* (item, index) of 数组



### 1.2. v-for其他的类型

* 对象
  * (value, key, index) in obj
* 数字
  * item in 10
* 可迭代对象(字符串)





### 1.3. v-for绑定key属性

#### 1.3.1. VNode/虚拟DOM

* template元素 -> VNode
* 虚拟DOM作用之一:
  * 跨平台



#### 1.3.2. key的作用

* 有key的操作:
  * 根据key找到之前的VNode进行复用;
  * 没有VNode可以复用, 再创建新的VNode
* 没有key的操作:
  * diff算法, 后续VNode复用性就不强



#### 1.3.3. key绑定id





## 三. Options API

### 3.1. 计算属性 computed

#### 3.1.1. 复杂数据的处理方式

* mustache插值语法自己写逻辑
* methods完成逻辑





#### 3.1.2. 计算属性用法

* computed: { fullname() {} }





#### 3.1.3. computed和methods区别

* computed底层会缓存, 性能更高





#### 3.1.4. computed的完整写法

* set
* get





### 3.2. 侦听器 watch

#### 3.2.1. 基本侦听watch

* watch: { message(newValue, oldValue) {} }
* 注意: 对象类型
  * Proxy对象 -> Vue.toRaw(newValue)



#### 3.2.2. 侦听的选项

* deep
* immediate



#### 3.2.3. 其他的写法

* "info.name"
* 别的写法
* created -> this.$watch()





# Day3

## 一. 阶段案例

### 1.1. 购物车(不看我的代码, 自己手写出来)







### 1.2. 列表的选择(点击一项, 变成选中状态)

* currentIndex记录点击





## 二. v-model双向绑定

### 2.1. v-model基本使用

* input手动双向绑定
* v-model
* 原理





### 2.2. v-model其他类型

* textarea
* checkbox
  * 单选
  * 多选
* radio
* select
  * 单选
  * 多选



### 2.3. v-model值绑定





### 2.4. v-model修饰符

* lazy
* number
* trim





## 三. 组件化的基础

### 3.1. 组件化的思想





### 3.2. 注册全局组件

```js
app.component("my-cpn", {
    
})
```



### 3.3. 注册局部组件

```js
const App = {
  components: {
      "my-cpn": {}
  }
}
```



## 四. Vue脚手架

### 4.1. Vue的开发模式

* html
* .vue文件



### 4.2. Vue CLI安装和使用





### 4.3. Vue项目目录结构





### 4.4. browserslistrc文件作用(了解)





### 4.5. 从main.js入口开始, 如何一步步创建自己的组件

* App.vue
* ProductItem.vue





# Day4

## 一. 之前知识补充

### 1.1. jsconfig文件的作用





### 1.2. vue不同版本的作用

* runtime: 运行时
* runtime + compile: 运行+编译





### 1.3. css的scoped作用域





### 1.4. npm init vue@latest创建项目

* vite打包





## 二. 组件间的通信

### 2.1. 组件的嵌套关系

* 父组件/子组件





### 2.2. 父传子 - props(重要)





### 2.3. 非prop的attribute





### 2.4. 子传父 - $emit(重要)





### 2.5. 阶段案例练习 - TabControl的封装





## 三. 组件的插槽Slot

### 3.1. 认识Slot的作用





### 3.2. Slot的基本使用和默认值(重要)





### 3.3. Slot的具名插槽(重要)

```vue
<template>
<slot name="why"></slot>
</template>
```

```vue
<nav-bar>
    <template v-slot:why></template>
</nav-bar>
```



### 3.5. 动态插槽名





### 3.6. Vue编译作用域





### 3.7. 作用域插槽使用

* 核心: 将子组件中的数据传递给父组件的插槽来使用






# Day5

## 一. 非父子组件的通信

### 1.1. Provide/Inject

* 基本使用
* 函数写法
* 数据的响应式
  * computed





### 1.2. 事件总线hy-event-store

* 在event-bus.js中创建eventBus对象
* 监听事件:
  * eventBus.on()
* 发出事件:
  * eventBus.emit()





## 二. 额外知识补充

### 2.1. 生命周期函数

* created
* mounted
* unmounted





### 2.2. refs引入元素/组件

* 在元素/组件中添加 ref 属性
* this.$refs.属性





### 2.3. 动态组件的使用

```vue
component is
```





### 2.4. keep-alive

* 让组件缓存起来, 存活下来
* include/exclude/max
* 存活生命周期函数:
  * activated
  * deactivated



### 2.5. 异步组件的使用

#### 2.5.1. webpack分包处理

* import()





#### 2.5.2. 异步组件

```js
defineAsyncComponent(() => import(""))
```





### 2.6. v-model组件上

```html
<Counter v-model="appCounter"/>

<Counter v-bind:modelValue="appCounter" @update:modelValue="appCounter = $event"/>
    
<Counter v-model:counter="appCounter"/>
```





### 2.7. 混入Mixin

* 在组件通过mixins: []
* 全局混入: app.mixin({})







## 三. Composition API

### 3.1. 认识组合API

* options API -> Composition API







### 3.2. 组合API实现计数器案例





# Day6

## 一. Composition API（一）

### 1.1. 使用reactive定义响应式数据

* 复杂类型



### 1.2. 使用ref定义响应式数据

* 基本类型
* 复杂类型
* 在template自动解包：浅层解包
  * info = { ref: xxxx }



### 1.3. 开发中选择reactive/ref





### 1.4. readonly的使用

#### 1.4.1. 单项数据流

* Vue/React



#### 14.2. readonly



### 1.5. reactive函数补充

* isProxy
* isReactive
* isReadonly
* shallowReactive
* shallowReadonly
* ...





### 1.6. ref函数补充

* toRefs
* toRef
* unref
* toRaw
* ...



### 1.7. setup中不能使用this



## 二. Composition API（二）

### 2.1. computed计算属性(重点)





### 2.2. ref获取元素/组件(半个重点)





### 2.3. 生命周期注册函数(重要)

* beforeCreate/Created -> setup





### 2.4. provide/inject







### 2.5. watch/watchEffect(半个重要)

* watch/watchEffect区别:
  * 1.watch必须制定数据源, watchEffect自动收集依赖
  * 2.watch监听到改变, 可以拿到改变前后value
  * 3.watchEffect默认直接执行一次, watch在不设置immediate第一次是不执行





### 2.6. 自定义Hook的练习(思想)

#### 2.6.1. useCounter





#### 2.6.2. useTitle





#### 2.6.3. useScrollPosition





### 2.7. script setup语法糖(重要)

* defineProps
* defineEmits
* defineExpose




# Day7

## 一. 案例阶段练习

### 1.1. 基本知识点练习





### 1.2. 组件化抽取的思想(重要)

* room-area
  * area-header
  * room-item



### 1.3. 对于复杂数据使用computed





### 1.4. 模拟网络请求







## 二. Vue-Router

### 2.1. 前端路由发展历程

* 后端路由
* 前后端分离
* 单页面富应用
  * SPA: single page web application
  * 前端路由



### 2.2. 改变URL, 页面不刷新的两种模式

* hash模式
* history模式





### 2.3. Vue-Router的使用过程

* 安装:
  * npm install vue-router
* 使用:
  * 创建router对象
    * createRouter
    * routes: 映射关系
    * history: createWebHashHistory()
  * app.use(router)
  * 使用路径:
    * router-view: 占位
    * router-link
      * 编程式导航



### 2.4. Vue-Router知识点补充

#### 2.4.1. 默认路径

* path -> redirect





#### 2.4.2. history模式

* createWebHistory()





#### 2.4.3. router-link其他属性

* to
* replace
* active-class
* exact-active-class





#### 2.4.4. 路由懒加载-分包处理





#### 2.4.5. 其他属性

* name
* meta
  * route.meta





### 2.5. 动态路由使用

* path: `/user/:id`





### 2.6. NotFound页面匹配

* path: `/:pathMatch(.*)*`





### 2.7. 路由的嵌套使用

* 1.在一层路由中添加 children属性:
  * { path: "recommend", component: () => import("../views/homerecomend.vue") }
* 2.在Home组件中添加 `<router-view>`

* 3.路径跳转 `<router-link>`





### 2.8. 编程式导航

#### 2.8.1. 跳转的方式

* push(路径)
* push({ path/query })
* replace()





#### 2.8.2. 路径的切换

* back()
* forward()
* go(number)


# Day8

## 一. VueRouter

### 1.1. 动态管理路由

#### 1.1.1. 什么情况下需要动态管理路由

* 前端都会开发哪些项目;
* 后台管理系统





#### 1.1.2. 动态添加路由

* router.addRoute({})
* router.addRoute("name", {})





#### 1.1.3. 管理路由别的方法

* 移除
* router.getRoutes()



### 1.2. 路由导航守卫

#### 1.2.1. beforeEach

* 跳转order时, 判断用户是否登录
* 没有登录:
  * 调到登录页面;
  * 进行登录的操作;
  * 保存了token
* 登录成功:
  * 调到order页面;



#### 1.2.2. 路由导航的流程解析







## 二. Vuex状态管理

### 2.1. 理解状态管理





### 2.2. Vuex基本使用

* 安装vuex
* 创建store
* app.use(store)
* tempate -> $store.state.counter





### 2.3. 核心概念一State

#### 2.3.1. 基本使用

#### 2.3.2. 映射使用

* options api
* composition api



### 2.4. 核心概念二getter

#### 2.4.1. 基本使用

* 直接使用
* 引入别的getters
* 返回函数, 接收参数





#### 2.4.2. 映射使用

- options api
- composition api



### 2.5. 核心概念三Mutations

#### 2.5.1. 重要原则

* 修改state, 必须使用mutation



#### 2.5.2. 基本使用

* 直接使用
* 传入参数



#### 2.5.3. 映射使用





#### 2.5.4. 重要原则

* 不要在mutation执行异步操作, 必须同步操作





### 2.6. 核心概念四Actions







### 2.7. 核心概念五Modules



# Day9

## 一. Vuex核心知识

### 1.1. Actions的使用

#### 1.1.1. actions的基本使用

* 定义action
* dispatch派发action





#### 1.1.2. actions的辅助函数





#### 1.1.3. actions的异步操作

* home.vue -> home.js -> actions发送请求





#### 1.1.4. action结果返回Promise(了解)





### 1.2. Module的使用

#### 1.2.1. module的基本使用

* 抽取到对象:
  * state
  * mutations
  * getters
  * actions
* modules: { home: 对象 }
* state.home.xxx
* getters.xxx
* commit
* dispatch





#### 1.2.2. module的命名空间

* namespaced: true
* getters["home/xxx"]
* commit("home/xxx")





## 二. Pinia的使用

### 2.1. Pinia介绍和Vuex的区别(面试)





### 2.2. Pinia的安装和基本使用

* createPinia
* app.use
* 定义store





### 2.3. Pinia核心state

* 使用和修改 store.xxx
* 了解:
  * store.$reset
  * store.$patch
  * store.$state = {}





### 2.4. Pinia核心getters

* 基本使用
* 引入其他的getters
* getters返回函数
* getters引入其他store数据





### 2.5. Pinia核心Actions

* 基本使用
* 传入参数
* 发送异步请求
* 返回Promise回调





## 三. axios库

### 3.1. 为什么选择axios







### 3.2. axios发送请求

* get/post/request
* config传入





### 3.3. axios额外补充

* axios.defaults.baseURL
* axios.defaults.timeout/headers
* axios.all -> Promise.all





### 3.4. axios创建实例

* 为什么需要创建实例
* axios.create()





### 3.5. axios的拦截器

* axios.interceptors.request/response.use





### 3.6. axios的简洁封装









































































































































