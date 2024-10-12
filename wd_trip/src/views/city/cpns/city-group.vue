<template>
  <div class="city-group">
    <div class="city_group_hot">
      <div class="title">热门</div>
      <div class="content">
        <template v-for="(city,key) in cityGroup.hotCities">
          <div class="item" @click="onCityClick(city)">
            <span>{{ city.cityName }}</span>
          </div>
        </template>
      </div>
    </div>
    <div class="city_group_list">
        <van-index-bar highlight-color="#ff9854" :sticky="false" :index-list="indexList">
            <template v-for="(group,key) in cityGroup.cities">
                <van-index-anchor :index="group.group" />
                    <template v-for="(city,kez) in group.cities">
                        <van-cell :title="city.cityName" @click="onCityClick(city)" />
                    </template>
            </template>
        </van-index-bar>
    </div>

  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import useCityStore from '@/stores/city';
  import { useRouter } from 'vue-router';

  const cityStore = useCityStore();
  const router = useRouter();

  const props = defineProps({
    cityGroup: {
      type: Object,
      required: true,
      default: () => ({}),
    }
  })

  const indexList = computed(() => {
    const indexList = props.cityGroup.cities.map(group => group.group)
    indexList.unshift('#')
    return indexList
  })

  const onCityClick = (city) => {
    cityStore.currentCity = city
    router.back()
  }

</script>

<style lang="less" scoped>
  .city_group_hot{
    margin: 0 20px;
    .title{
      font-size: 18px;
      font-weight: 500;
    }
    .content{
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      text-align: center;

      .item{
        width: 50px;
        height: 20px;
        line-height: 20px;
        margin: 15px 20px;
        font-size: 13px;
        color: #333;
        background-color: #fff4ec;
        border-radius: 10px;
      }

    }

  }
</style>