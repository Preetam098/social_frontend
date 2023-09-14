import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
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

export const getPostReducer = (state = initialState, action) => {
  switch (action.type) {

    /////// GET POST ////////

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

       // UPDATE GAME & GAME TYPE
    case UPDATE_POST:
      return { ...state, loading: true };
    case UPDATE_POST_SUCCESS:
      return { ...state, loading: false };
    case UPDATE_POST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export const updatePostReducer = (state = initialState, action) => {
  switch (action.type) {
       // UPDATE GAME & GAME TYPE
    case UPDATE_POST:
      return { ...state, loading: true };
    case UPDATE_POST_SUCCESS:
      return { ...state, loading: false };
    case UPDATE_POST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export const deletePostReducer = (state = initialState, action) => {
  switch (action.type) {
       // DELETE POST
    case DELETE_POST:
      return { ...state, loading: true };
    case DELETE_POST_SUCCESS:
      return { ...state, loading: false };
    case DELETE_POST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};