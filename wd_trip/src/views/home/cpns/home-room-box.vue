<template>
  <div class="room-box">
    <h1>热门精选</h1>
    <div class="room-list">
      <template v-for="item in roomList">
          <home-room-item-v3 v-if="item.discoveryContentType == 3" :item-data="item.data" />
          <home-room-item-v9 v-else-if="item.discoveryContentType == 9" :item-data="item.data" />
      </template>
    </div>
  </div>
</template>

<script setup>
    import useHomeStore from "@/stores/home";
    import HomeRoomItemV3 from '@/components/room-item-v3/room-item-v3.vue';
    import HomeRoomItemV9 from '@/components/room-item-v9/room-item-v9.vue';
    import { storeToRefs } from "pinia";
    const homeStore = useHomeStore();
    const { roomList } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>

 .room-box {
  margin: 0 5px;
 }
 .room-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
 }

</style>