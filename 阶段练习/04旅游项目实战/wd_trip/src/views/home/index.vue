<template>
    <div class="home">
        <home-navbar></home-navbar>
        <home-search-box></home-search-box>
        <home-catagory-box></home-catagory-box>
        <home-room-box></home-room-box>
        <transition name="fade">
            <search-bar v-if="isShowSearchBox"></search-bar>
        </transition>

    </div>
</template>

<script>
export default {
    name: 'home',
}
</script>

<script setup>

    import HomeNavbar from './cpns/home-navbar.vue';
    import HomeSearchBox from './cpns/home-search-box.vue';
    import HomeCatagoryBox from './cpns/home-catagory-box.vue';
    import SearchBar from '@/components/search-bar/search-bar.vue';
    import HomeRoomBox from './cpns/home-room-box.vue';
    import useHomeStore from '@/stores/home';
    import useScroll from '@/hooks/useScroll';
    import { computed, watch } from 'vue';

    const homeStore = useHomeStore()
    homeStore.getHotSuggestsAction()
    homeStore.getCatagoriesAction()
    homeStore.getRoomListAction()

    const {isReachBottom,scrollTop} = useScroll()
    watch(isReachBottom, (val) => {
        if (val) {
            homeStore.getRoomListAction()
        } 
    })

    const isShowSearchBox = computed(() => {
        return scrollTop.value > 500
    })

</script>

<style lang="less" scoped>
    .home {
        padding-bottom: 50px;
    }

    // search-bar transition动画
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease;
    }

   .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-to, .fade-leave-from {
        opacity: 1;
    }
</style>