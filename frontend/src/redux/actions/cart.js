import { addToCart, removeFromCart } from "../reducers/cart";

// add to cart action
export const addTocartAction = (data) => (dispatch, getState) => {
  dispatch(addToCart(data));
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
};

// remove from cart action
export const removeFromCartAction = (id) => (dispatch, getState) => {
  dispatch(removeFromCart(id));
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
};