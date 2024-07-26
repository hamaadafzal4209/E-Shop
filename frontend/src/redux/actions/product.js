import axios from "axios";
import { server } from "../../server";
import {
  createProductFail,
  createProductRequest,
  createProductSuccess,
  getAllProductsShopFailed,
  getAllProductsShopRequest,
  getAllProductsShopSuccess,
} from "../reducers/product";

export const createProduct = (formData) => async (dispatch) => {
  try {
    dispatch(createProductRequest());

    const { data } = await axios.post(
      `${server}/product/create-product`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      },
    );

    dispatch(createProductSuccess(data.product));
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    dispatch(createProductFail(errorMessage));
  }
};

export const getAllShopProducts = (id) => async (dispatch) => {
  try {
    dispatch(getAllProductsShopRequest());

    const { data } = axios.get(`${server}/product/get-all-shop-products/${id}`);

    dispatch(getAllProductsShopSuccess(data.product));
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    dispatch(getAllProductsShopFailed(errorMessage));
  }
};
