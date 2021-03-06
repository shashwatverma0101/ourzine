import AuthActionTypes from "../actionTypes/auth";

const INITIAL_STATE = {
  currentUser: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.FETCH_CURRENT_USER:
      return {
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
