import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "../actions/constant";


const initialState = {
    loading: false,
    setting: {},
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

  export default signReducer