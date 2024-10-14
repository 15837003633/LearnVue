import { defineStore } from 'pinia'
import {getAllCities} from '@/service'

export const useCityStore = defineStore('city',{
    state:()=>({
        allCity:{},
        currentCity:{cityName:'杭州'},
    }),
    actions:{
        async getAllCityAction(){
            const result = await getAllCities()
            this.allCity = result.data
            console.log(this.allCity)
        }
    }
})

export default useCityStore