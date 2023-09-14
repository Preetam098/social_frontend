import axios from "axios";
import { toast } from "react-hot-toast";
import { get_post_url } from "../utils/endpoints";
import { add_post_url } from "../utils/endpoints";
import { update_post_url } from "../utils/endpoints";
import { delete_post_url } from "../utils/endpoints";

import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  UPDATE_POST,
  UPDATE_POST_FAILURE,
  UPDATE_POST_SUCCESS,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
} from "./constant";

//// ADD POST ////

export const addPost = (payload, callBack) => async (dispatch) => {
  dispatch({ type: "ADD_POST" });
  try {
    const response = await axios.post(add_post_url, payload, {
      headers: { token: `${localStorage.getItem("AccessToken")}` },
    });
    callBack();
    dispatch({ type: ADD_POST_SUCCESS });
    console.log("dta", response);
  } catch (error) {
    dispatch({ type: ADD_POST_FAILURE });
  }
};

///GET POST //

export const getPost = () => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const response = await axios.get(get_post_url, {
      headers: {
        token: `${localStorage.getItem("AccessToken")}`,
      },
    });
    const posts = response.data;
    console.log("posts", posts);
    dispatch({ type: GET_POST_SUCCESS, payload: posts });
  } catch (error) {
    dispatch({ type: GET_POST_FAILURE });
  }
};

//UPDATE POST

export const updatePost = (payload, postId, callBack) => async (dispatch) => {
  dispatch({ type: UPDATE_POST });
  try {
    const response = await axios.put(`${update_post_url}/${postId} `, payload, {
      headers: {
        token: `${localStorage.getItem("AccessToken")}`,
      },
    });
    const { message } = response.data;
    const updatedPost = response.data;
    dispatch({ type: UPDATE_POST_SUCCESS, payload: updatedPost, message });
    toast.success(message);
    callBack();
  } catch (error) {
    dispatch({ type: UPDATE_POST_FAILURE, payload: error.message });
  }
};

export const deletePost = (postId, callBack) => async (dispatch) => {
  dispatch({ type: DELETE_POST });
  try {
    const response = await axios.delete(`${delete_post_url}/${postId} `, {
      headers: {
        token: `${localStorage.getItem("AccessToken")}`,
      },
    });
    const { message } = response.data;
    dispatch({ type: DELETE_POST_SUCCESS, message });
    toast.success(message);
    callBack();
  } catch (error) {
    dispatch({ type: DELETE_POST_FAILURE });
    if (error.response) {
      const { status } = error.response;
      if (status === 500) {
        toast.error(error.message);
      } else {
        const { message } = error.response.data;
        toast.error(message);
      }
    }
  }
};
