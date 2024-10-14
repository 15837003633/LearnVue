<template>
  <router-view></router-view>
  <tabbar></tabbar>
  <!-- 判断当前路由是否隐藏Tabbar -->
  <!-- <tabbar v-if="!currentRoute.meta.isHideTabbar"></tabbar> -->
  <loading></loading>
</template>

<script setup>
 import { RouterView, useRoute } from 'vue-router';
 import Loading from './components/loading/loading.vue';
 import tabbar from './components/tabbar/tabbar.vue';

 //获取当前显示的路由页面对象，注意不是userRouter，而是useRoute()
 const currentRoute = useRoute();

</script> 

<style scoped>

</style>