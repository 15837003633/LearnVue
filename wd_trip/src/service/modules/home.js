import request from "../request";
export async function getHotSuggests() {
    const result = await request.get('/home/hotSuggests')
    return result.data
}