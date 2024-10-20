import wd_request from '../request'

export function getRoomDetail(houseId) {
    return wd_request.get({
        url:'/detail/infos',
        params:{
            houseId
        }
    })
}