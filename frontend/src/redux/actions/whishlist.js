import { addToWhishlist, removeFromWhishlist } from "../reducers/whishlist";

// add to whishlist action
export const addToWhishlistAction = (data) => (dispatch, getState) => {
  dispatch(addToWhishlist(data));
  localStorage.setItem(
    "whishlistItems",
    JSON.stringify(getState().whishlist.whishlist),
  );
};

// remove from whishlist action
export const removeFromWhishlistAction = (id) => (dispatch, getState) => {
  dispatch(removeFromWhishlist(id));
  localStorage.setItem(
    "whishlistItems",
    JSON.stringify(getState().whishlist.whishlist),
  );
};
