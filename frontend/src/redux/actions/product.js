import axios from "axios";
import { server } from "../../server";
import {
  createProductFail,
  createProductRequest,
  createProductSuccess,
} from "../reducers/product";

// create product
export const createProduct = (
  name,
  description,
  category,
  tags,
  originalPrice,
  discountPrice,
  stock,
  shopId,
  images
) => async (dispatch) => {
  try {
    dispatch(createProductRequest());

    const { data } = await axios.post(
      `${server}/product/create-product`,
      {
        name,
        description,
        category,
        tags,
        originalPrice,
        discountPrice,
        stock,
        shopId,
        images,
      },
      {
        withCredentials: true,
      }
    );

    dispatch(createProductSuccess(data.product));
  } catch (error) {
    dispatch(createProductFail(error.response.data.message));
  }
};