import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  success: false,
  product: null,
  products: [],  // Add products to the initial state
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProductRequest: (state) => {
      state.isLoading = true;
    },
    createProductSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.product = action.payload;
    },
    createProductFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },

    // Get all products for shop
    getAllProductsShopRequest: (state) => {
      state.isLoading = true;
    },
    getAllProductsShopSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    getAllProductsShopFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    clearErrors: (state) => {
      state.error = null;
    },
    resetProductState: (state) => {
      state.success = false;
      state.error = null;
    },
  },
});

export const {
  createProductFail,
  createProductSuccess,
  createProductRequest,
  clearErrors,
  resetProductState,
  getAllProductsShopFailed,
  getAllProductsShopRequest,
  getAllProductsShopSuccess,
} = productSlice.actions;

export default productSlice.reducer;