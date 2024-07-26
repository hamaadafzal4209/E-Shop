import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./reducers/user";
import sellerReducer from "./reducers/seller";
import productReducer from "./reducers/product";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  seller: sellerReducer,
  products: productReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;