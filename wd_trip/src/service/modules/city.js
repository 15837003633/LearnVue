import wdRequest from "../request";

export function getAllCities() {
  return new Promise(async (resolve,reject)=>{
    const result = await wdRequest.get("/city/all")
    resolve(result.data)
  });
}