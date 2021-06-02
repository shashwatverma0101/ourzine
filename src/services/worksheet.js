import { authApiGet, authApiPost, authApiDelete } from "../utils/axios";
import { BASE_API_URL } from "./domain";

export default {
    getRecentWorksheet : () => authApiGet(`${BASE_API_URL}/worksheet/get-recent`),
    saveWorksheet : (payload) => authApiPost(`${BASE_API_URL}/worksheet/save`, payload),
    deleteWorksheet : (wId) =>  authApiDelete(`${BASE_API_URL}/worksheet/delete/${wId}`)
}