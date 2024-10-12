<template>
    <home-navbar></home-navbar>
    <home-search-box></home-search-box>

</template>

<script setup>

    import { storeToRefs } from 'pinia';
    import HomeNavbar from './cpns/home-navbar.vue';
    import HomeSearchBox from './cpns/home-search-box.vue';
    import useHomeStore from '@/stores/home';

    const homeStore = useHomeStore();

    homeStore.getHotSuggestsAction();
</script>

<style lang="less" scoped>

</style>