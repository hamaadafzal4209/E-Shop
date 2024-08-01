import axios from "axios";
import { server } from "../../server";
import {
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  updateUserInfoRequest,
  updateUserInfoSuccess,
  updateUserInfoFailed,
  updateUserAddressFailed,
  updateUserAddressRequest,
  updateUserAddressSuccess,
  deleteUserAddressRequest,
  deleteUserAddressSuccess,
  deleteUserAddressFailed,
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

// update user address
export const updateUserAddress =
  (country, city, address1, address2, addressType) => async (dispatch) => {
    try {
      dispatch(updateUserAddressRequest());
      const { data } = await axios.put(
        `${server}/user/update-user-addresses`,
        { country, city, address1, address2, addressType },
        { withCredentials: true },
      );
      dispatch(updateUserAddressSuccess(data.user));
    } catch (error) {
      dispatch(updateUserAddressFailed(error.response.data.message));
    }
  };

// delete user address
export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    dispatch(deleteUserAddressRequest());
    const { data } = await axios.delete(
      `${server}/user/delete-user-address/${id}`,
      {
        withCredentials: true,
      },
    );
    dispatch(deleteUserAddressSuccess(data.user));
  } catch (error) {
    dispatch(deleteUserAddressFailed(error.response.data.message));
  }
};
