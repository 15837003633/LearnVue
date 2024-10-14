<template>
    <div class="home">
        <home-navbar></home-navbar>
        <home-search-box></home-search-box>
        <home-catagory-box></home-catagory-box>
        <home-room-box></home-room-box>
    </div>
</template>

<script setup>

    import HomeNavbar from './cpns/home-navbar.vue';
    import HomeSearchBox from './cpns/home-search-box.vue';
    import HomeCatagoryBox from './cpns/home-catagory-box.vue';
    import HomeRoomBox from './cpns/home-room-box.vue';
    import useHomeStore from '@/stores/home';
    import useScroll from '@/hooks/useScroll';
    import { watch } from 'vue';

    const homeStore = useHomeStore()
    homeStore.getHotSuggestsAction()
    homeStore.getCatagoriesAction()
    homeStore.getRoomListAction()

    const {isReachBottom} = useScroll()
    watch(isReachBottom, (val) => {
        if (val) {
            homeStore.getRoomListAction()
        } 
    })
</script>

<style lang="less" scoped>
    .home {
        padding-bottom: 50px;
    }
</style>