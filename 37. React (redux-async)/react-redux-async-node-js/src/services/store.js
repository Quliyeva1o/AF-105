import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoryAPI } from "./categoryQuerySlice";

const store = configureStore({
  reducer: {
    [categoryAPI.reducerPath]: categoryAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryAPI.middleware),
});
setupListeners(store.dispatch)
export default store;
