import { PROFILE, PROFILE_SUCCESS, PROFILE_FAILURE } from "../actions/constant";


const initialState = {
    loading: false,
    profile: {},
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

  export default getProfileReducer;