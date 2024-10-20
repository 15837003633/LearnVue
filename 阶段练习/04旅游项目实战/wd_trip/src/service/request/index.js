import axios from "axios"
import {BASE_URL , TIME_OUT} from './config'
import useMainStore from "@/stores/main"
import { storeToRefs } from "pinia"

class WDRequest{
    constructor(baseURL){
        this.baseURL = baseURL
        this.axios_instance = axios.create({
            baseURL: this.baseURL,
            timeout: 5000
        })

        const mainStore = useMainStore()
        const {isLoading} = storeToRefs(mainStore)
        this.axios_instance.interceptors.request.use(config => {
            isLoading.value = true
            return config
        }, error => {
            return Promise.reject(error)
        })
        this.axios_instance.interceptors.response.use(response => {
            isLoading.value = false
            return response
        }, error => {
            isLoading.value = false
            return Promise.reject(error)
        })
    }

    request(config){
        return new Promise((resolve, reject) => {
            this.axios_instance(config)
               .then(res => {
                    resolve(res.data)
               })
            })
    }

    get(config){
        return this.request({
            ...config,
             method: "get"
        })
    }

    post(config){
        return this.request({
            ...config,
             method: "post"
        })
    }
}

const wdRequest = new WDRequest(BASE_URL)

export default wdRequest