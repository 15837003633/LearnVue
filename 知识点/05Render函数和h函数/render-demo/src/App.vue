<template>
  <wd_render/>
</template>

<script setup>
  import { h,render } from 'vue'
  // 使用h函数创建虚拟节点VNode，h函数本质其实就是createVNode的函数
  const app = h('div', 'APP')
  const hello = h('h1', 'Hello World')

  // 编译器会将模板转换成render函数，render函数返回一个VNode
  // 这里我们手动调用render函数渲染虚拟节点
  // 使用render函数渲染虚拟节点，
  const wd_render = () => {
    return h('div', [app, hello])
  }
</script>

<style lang="less" scoped>

</style>