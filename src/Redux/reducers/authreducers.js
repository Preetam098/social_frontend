
import { LOG_IN, LOG_IN_FAIL, LOG_IN_SUCCESS } from "../actions/constant";


const initialState = {
  loading: false,
  setting: {},
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

export default  authReducer; 





