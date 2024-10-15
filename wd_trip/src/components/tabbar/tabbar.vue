<template>
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
        <template v-for="(item, index) in tabbarData" :key="index">
            <van-tabbar-item :to="item.path">
                <!-- 默认插槽，default  -->
                <span>{{ item.text }}</span>
                <!-- 具名插槽icon，并且是期望接收 props 的作用域插槽 -->
                <template v-slot:icon="props">
                    <!-- 这里的 require 语法是 webpack 的内置语法，用于引入图片资源 -->
                    <img :src="require(`@/assets/img/${props.active? item.active_icon : item.normal_icon}`)" alt=""/>
                </template>
            </van-tabbar-item>
        </template>
    </van-tabbar>
</template>

<script setup>
    import { useRoute } from 'vue-router'
    import { ref,watch } from 'vue'
    import tabbarData from '@/assets/data/tabbar'
     //获取当前显示的路由页面对象，注意不是userRouter，而是useRoute()
    const currentRoute = useRoute();

    // 监听路由变化，更新当前选中项
    watch(currentRoute, () => {
    currentIndex.value =tabbarData.findIndex((item) => {
            if (item.path === currentRoute.path) {
                return true;
            }
        })
    });

    const currentIndex = ref(0)
</script>

<style lang="less" scoped>

</style>