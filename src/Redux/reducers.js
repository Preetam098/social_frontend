import { combineReducers } from "redux";
import { LOG_IN, LOG_IN_FAIL, LOG_IN_SUCCESS } from "./action";
import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./action";
import { PROFILE, PROFILE_SUCCESS, PROFILE_FAILURE } from "./action";

const initialState = {
  loading: false,
  setting: {},
  profile: {},
};
///  SIGN REDUCER

const signReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, loading: false };
    case SIGNUP_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

////LOGIN REDUCER

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, loading: true };
    case LOG_IN_SUCCESS:
      return { ...state, loading: false };
    case LOG_IN_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

///GET PROFILE

const getProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE:
      return { ...state, loading: true };
    case PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: true,
      };
    case PROFILE_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  authReducer,
  signReducer,
  getProfileReducer,
});

export default rootReducer;
