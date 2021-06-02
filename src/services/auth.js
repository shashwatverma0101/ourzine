import { apiPost, authApiDelete, authApiFormDataPost, authApiGet, authApiPost } from "../utils/axios";
import { BASE_API_URL } from "./domain";

export default {
    signup :(payload) =>  apiPost(`${BASE_API_URL}/auth/signup`, payload),
    signin : (payload) => apiPost(`${BASE_API_URL}/auth/signin`, payload),
    forgotPassword: (payload) =>apiPost(`${BASE_API_URL}/auth/forget-password`, payload),
    resetPassword : (payload) =>  apiPost(`${BASE_API_URL}/auth/reset-password`, payload),
    getProfile: () => authApiGet(`${BASE_API_URL}/auth/get-user`),
    uploadProfile : (payload) => authApiFormDataPost(`${BASE_API_URL}/auth/upload-profile`, payload ),
    deleteUser: () => authApiDelete(`${BASE_API_URL}/auth/delete-user`),
    changePasswordd :  (payload) => authApiPost(`${BASE_API_URL}/auth/change-password`, payload),
    updateProfile: (payload) => authApiPost(`${BASE_API_URL}/auth/update-profile`, payload)
}