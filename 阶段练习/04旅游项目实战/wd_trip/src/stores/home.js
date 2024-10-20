import { defineStore } from "pinia";
import {getCatagories, getHotSuggests, getRoomList} from '@/service'

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    catagories: [],
    roomList: [],
    currentPage: 1,
  }),
  actions: {
    getHotSuggestsAction() {
        getHotSuggests().then(res => {
            this.hotSuggests = res.data
            console.log("热门推荐数据",this.hotSuggests)
        })
    },
    getCatagoriesAction() {
      getCatagories().then(res => {
        this.catagories = res.data
        console.log("分类数据",this.catagories)
      })
    },
    getRoomListAction() {
      getRoomList(this.currentPage).then(res => {
        this.roomList.push(...res.data)
        console.log(`房间第${this.currentPage}页`,"列表数据",res.data)
        this.currentPage ++
      })
    }
},
});

export default useHomeStore;