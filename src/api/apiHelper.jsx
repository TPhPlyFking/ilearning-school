import axiosClient from "./axiosClient"

export async function fetchApiData(endpoint, params = {}) {
    try {
        const res = await axiosClient.get(endpoint, {params});
        const json = res.data;

         if (json.result === false) {
             console.error("API báo lỗi:", endpoint, json.message);
             return null;
         }

         return json.data;
    } catch (err) {
        console.error("Không gọi được API:", endpoint, err.message);
        return null;
    }
}