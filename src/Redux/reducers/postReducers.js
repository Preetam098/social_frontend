import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
} from "../actions/constant";
import {
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
} from "../actions/constant";

const initialState = {
  loading: false,
  posts: [],
  addposts: {},
};

///add Posts

export const addPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, loading: true };
    case ADD_POST_SUCCESS:
      return { ...state, loading: false };
    case ADD_POST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

//Get posts

export const getPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, loading: true };
    case GET_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: true,
      };
    case GET_POST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
