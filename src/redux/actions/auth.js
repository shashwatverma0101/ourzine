import AuthActionTypes from "../actionTypes/auth";

export const fetchCurrentUser = user => ({
    type : AuthActionTypes.FETCH_CURRENT_USER,
    payload :user
})
