
<!-- 通过路由query传参，使用路由信息的两种方式 -->

<template>
  <div class="search full-screen">
    <h1>开始时间:{{ $route.query.startDate }}</h1>
    <h1>结束时间:{{ $route.query.endDate }}</h1>
    <h1>当前城市:{{ city }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const {city} = route.query;

</script>

<style lang="less" scoped>

</style>