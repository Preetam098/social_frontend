import { combineReducers } from "redux";
import authReducer from "../reducers/authreducers";
import signReducer from '../reducers/signReducers'
import getProfileReducer from '../reducers/profileReducers'
import {getPostReducer} from "../reducers/postReducers"; 
import {addPostReducer} from '../reducers/postReducers'
import {updatePostReducer} from "../reducers/postReducers"; 
import { deletePostReducer } from "../reducers/postReducers";

const rootReducer = combineReducers({
    authReducer,
    signReducer,
    getProfileReducer,
    addPostReducer,
    getPostReducer,
    updatePostReducer,
    deletePostReducer
  });
  
export default rootReducer;
  