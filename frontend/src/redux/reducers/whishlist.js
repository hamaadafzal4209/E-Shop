import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  whishlist: [],
};

const whishlistSlice = createSlice({
  name: "whishlist",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.whishlist.find((i) => i._id === item._id);
      if (isItemExist) {
        state.whishlist = state.whishlist.map((i) =>
          i._id === isItemExist._id ? item : i,
        );
      } else {
        state.whishlist.push(item);
      }
    },
    removeFromCart: (state, action) => {
      state.whishlist = state.whishlist.filter((i) => i._id !== action.payload);
    },
  },
});

export const { addToWhishlist, removeFromWhishlist } = whishlistSlice.actions;
export default whishlistSlice.reducer;
