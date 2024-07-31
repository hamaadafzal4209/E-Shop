import axios from "axios";
import { server } from "../../server";
import {
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  updateUserInfoRequest,
  updateUserInfoSuccess,
  updateUserInfoFailed,
} from "../reducers/user.js";
import {
  loadSellerFail,
  loadSellerRequest,
  loadSellerSuccess,
} from "../reducers/seller.js";

// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    dispatch(loadUserFail(error.response.data.message));
  }
};

// load seller
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch(loadSellerRequest());
    const { data } = await axios.get(`${server}/shop/getSeller`, {
      withCredentials: true,
    });
    dispatch(loadSellerSuccess(data.seller));
  } catch (error) {
    dispatch(loadSellerFail(error.response.data.message));
  }
};

// update user information
export const updateUserInfomation =
  (email, name, password, phoneNumber) => async (dispatch) => {
    try {
      dispatch(updateUserInfoRequest());
      const { data } = await axios.put(
        `${server}/user/update-user-info`,
        {
          email,
          name,
          password,
          phoneNumber,
        },
        {
          withCredentials: true,
        },
      );
      dispatch(updateUserInfoSuccess(data.user));
    } catch (error) {
      dispatch(updateUserInfoFailed(error.response.data.message));
    }
  };
