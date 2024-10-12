import { defineStore } from "pinia";
import {getHotSuggests} from '@/service'

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
  }),
  actions: {
    getHotSuggestsAction() {
        getHotSuggests().then(res => {
            this.hotSuggests = res
            console.log(this.hotSuggests)
        })
    }
  },
});

export default useHomeStore;