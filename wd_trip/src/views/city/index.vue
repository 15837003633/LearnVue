<template>
  <div class="city full-screen">
    <div class="search-box">
      <van-search
      v-model="searchContent"
      shape="round"
      placeholder="请输入搜索关键词"
      show-action
      @cancel="onCancel"
    />
    </div>
    <div class="city_tab">
      <van-tabs v-model:active="selectedTab" color="#ff9854">
        <template v-for="(value,key,index) in allCity" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <template v-for="(group,key,index) in allCity">
      <city-group v-show="key === selectedTab" :cityGroup="group"></city-group>
    </template>
  </div>
</template>

<script setup>
import { ref ,computed} from 'vue'
import useCityStore from '@/stores/city';
import { storeToRefs } from 'pinia';
import CityGroup from './cpns/city-group.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

// 搜索模块
const searchContent = ref('')

// tab模块
const cityStore = useCityStore()
const {allCity} = storeToRefs(cityStore)
const selectedTab = ref(0)

// const cityGroup = computed(() => {
//   return allCity.value[selectedTab.value]
// })

const onCancel = () => {
  router.back()
}


cityStore.getAllCityAction()

</script>

<style lang="less" scoped>
  .city {
    .search-box {
      --van-search-left-icon-color:#ff9854;
      margin-top: 10px;
    }
  }
</style>