



import axios from "axios";
import {  profile_url } from "../utils/endpoints";
import { toast } from "react-hot-toast";


import { PROFILE, PROFILE_SUCCESS, PROFILE_FAILURE } from "./constant";


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
  