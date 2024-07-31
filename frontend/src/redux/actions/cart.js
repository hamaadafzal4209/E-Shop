import { addToCart, removeFromCart } from "../reducers/cart";

// add to cart
export const addTocart = (data) => async (dispatch, getState) => {
  dispatch(addToCart(data));
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  return data;
};

// remove from cart
export const removeFromCartItem = (data) => async (dispatch, getState) => {
  dispatch(removeFromCart(data._id));
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  return data;
};
