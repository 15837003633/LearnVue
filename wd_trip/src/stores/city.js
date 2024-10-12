import { defineStore } from 'pinia'
import {getAllCities} from '@/service'

export const useCityStore = defineStore('city',{
    state:()=>({
        allCity:{},
        currentCity:{cityName:'杭州'},
    }),
    actions:{
        async getAllCityAction(){
            this.allCity = await getAllCities()
            console.log(this.allCity)
        }
    }
})

export default useCityStore