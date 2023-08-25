import axios from "axios";
import { login_url, profile_url } from "../utils/endpoints";
import { signup_url } from "../utils/endpoints";
import { toast } from "react-hot-toast";

import { LOG_IN, LOG_IN_FAIL, LOG_IN_SUCCESS } from "./constant";
import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./constant";


///Login

export const authLogin = (payload, callBack) => async (dispatch) => {
  dispatch({ type: " LOG_IN" });
  try {
    const response = await axios.post(login_url, payload);
    const { token, message } = response.data;
    if (response && response.status === 200) {
      toast.success(response.data.message);
      console.log("response", response);

      dispatch({ type: LOG_IN_SUCCESS, payload: response.data.message });

      localStorage.setItem("social_app", response.data.message);
      localStorage.setItem("AccessToken", token);

      return callBack();
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

/// Register

export const CreateAccount = (payload, callback) => async (dispatch) => {
  dispatch({ type: " SIGNUP" });
  try {
    const response = await axios.post(signup_url, payload);
    dispatch({ type: SIGNUP_SUCCESS });
    callback();
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.message;
      console.log("Backend error:", errorMessage);
      toast.error(errorMessage);
      dispatch({ type: SIGNUP_FAILURE, payload: errorMessage });
    } else {
      console.log("Error:", error.message);
    }
  }
};

