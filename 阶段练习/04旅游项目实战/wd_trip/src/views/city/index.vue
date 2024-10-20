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

    <!-- 试试加一个动画效果 -->
    <template v-for="(group,key,index) in allCity">
      <transition name="wdscale" mode="out-in" appear>
        <city-group v-show="key === selectedTab" :cityGroup="group"></city-group>
      </transition>
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




  .wdscale-enter-active{
    animation: wdscale-anima 0.5s;
  }

  .wdscale-leave-active {
    animation: wdscale-anima 0.5s reverse;
  }

  @keyframes wdscale-anima {
    0% {
      // transform: scale(0);
      opacity: 0.1;
    }
    50% {
      // transform: scale(1.1);
      opacity: 0.5;
    }
    100% {
      // transform: scale(1);
      opacity: 1;
    }
  }


</style>