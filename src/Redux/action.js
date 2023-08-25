import axios from "axios";
import { login_url, profile_url } from "./utils/endpoints";
import { signup_url } from "./utils/endpoints";
import { toast } from "react-hot-toast";

/// LOGIN
export const LOG_IN = "LOG_IN ";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS ";
export const LOG_IN_FAIL = " LOG_IN_FAIL";

////SIGNUP
export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

///PROFILE
export const PROFILE = "PROFILE";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAILURE = "PROFILE_FAILURE";

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

///Profile

export const getProfile = () => async (dispatch) => {
  dispatch({ type: "PROFILE" });
  try {
    const response = await axios.get(profile_url, {
      headers: {
        token: `${localStorage.getItem("AccessToken")}`,
      },
    });
    const { password, ...profileDataWithoutPassword } = response.data;
    console.log(response.data);
    const profile = response.data;
    dispatch({ type: PROFILE_SUCCESS, payload: profileDataWithoutPassword });
  } catch (error) {
    dispatch({ type: PROFILE_FAILURE });
  }
};
