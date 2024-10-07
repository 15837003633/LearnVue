<template>
  <div>
    <area-header :title="data.title" :subtitle="data.subtitle" />
    <div class="room-list">
      <template v-for="(room, index) in data.list" :key="room.id">
        <room-item :roomInfo="room"></room-item>
      </template>
    </div>
  </div>
</template>

<script setup>
  import AreaHeader from "./AreaHeader.vue";
  import RoomItem from "./RoomItem.vue";

  defineProps({
    data: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  });

</script>

<style scoped>
.room-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }
</style>