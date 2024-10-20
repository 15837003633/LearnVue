import request from "../request";
export async function getHotSuggests() {
    const result = await request.get({
        url: "/home/hotSuggests"
    })
    return result
}

export async function getCatagories() {
    const result = await request.get({
        url: "/home/categories"
    })
    return result
}


export async function getRoomList(page=1) {
    const result = await request.get({
        url: "/home/houselist",
        params: {
            page
        }
    })
    return result
}