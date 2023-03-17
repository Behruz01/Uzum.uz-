import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slicers/counterSlice";
import { favoriteReducer } from "./slicers/favoriteSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    favorite: favoriteReducer,
  },
});
