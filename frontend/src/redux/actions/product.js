import axios from "axios";
import { server } from "../../server";
import {
  createProductFail,
  createProductRequest,
  createProductSuccess,
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
