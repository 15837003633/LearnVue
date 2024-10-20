<template>
    <van-tabbar v-model="currentIndex" active-color="#ee0a24">
        <template v-for="(item, index) in tabbarData" :key="index">
            <van-tabbar-item :icon="item.icon" :to="item.path">{{ item.text }} </van-tabbar-item>
        </template>
    </van-tabbar>
</template>

<script setup>
    import { ref } from 'vue'
    import tabbarData from '@/assets/data/tabbar'
    const currentIndex = ref(0)
</script>

<style lang="less" scoped>

</style>