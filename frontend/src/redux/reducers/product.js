import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  success: false,
  product: null,
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
} = productSlice.actions;

export default productSlice.reducer;
