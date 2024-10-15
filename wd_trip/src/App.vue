<template>
  <div id="app">

    <router-view v-slot="{ Component }">
      <keep-alive include="home">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <tabbar></tabbar>
    <!-- 判断当前路由是否隐藏Tabbar -->
    <!-- <tabbar v-show="!currentRoute.meta.isHideTabbar"></tabbar> -->
  </div>
  <loading></loading>
</template>

<script setup>
 import { RouterView } from 'vue-router';
 import Loading from './components/loading/loading.vue';
 import tabbar from './components/tabbar/tabbar.vue';


</script> 

<style scoped>

</style>