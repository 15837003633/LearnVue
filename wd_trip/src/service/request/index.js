import axios from "axios"
import {BASE_URL , TIME_OUT} from './config'

class WDRequest{
    constructor(baseURL){
        this.baseURL = baseURL
        this.axios_instance = axios.create({
            baseURL: this.baseURL,
            timeout: 5000
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

    get(url, params){
        return this.request({
            url,
            method: "get",
            params
        })
    }

    post(url, data){
        return this.request({
            url,
            method: "post",
            data
        })
    }
}

const wdRequest = new WDRequest(BASE_URL)

export default wdRequest