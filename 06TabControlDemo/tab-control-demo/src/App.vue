<template>
    <div>
      <tab-control :tabs="tabs" @tab-click="handleTabClick"></tab-control>
      <div>{{ activeTab }}页面内容</div>
    </div>
</template>

<script>
  import TabControl from "./components/TabControl.vue";
  export default {
    data() {
      return {
        tabs: ["手机", "电脑", "平板"],
        activeTab: "手机"
      };
    },
    methods: {
      handleTabClick(index) {
        this.activeTab = this.tabs[index];
      }
    },
    components: {
      TabControl
    }
  }
</script>

<style>
  * {
    margin: 0;
  }
</style>