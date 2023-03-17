import { createSlice } from "@reduxjs/toolkit";

const initialFavoriteSlicer = {
  favoriteProduct: [],
};

const favoriteSlicer = createSlice({
  name: "favorite",
  initialState: initialFavoriteSlicer,
  reducers: {
    add: (state, action) => {
      state.favoriteProduct.push(action.payload);
    },
    remove: (state, action) => {
      state.favoriteProduct = state.favoriteProduct.filter((card) => {
        if (card.id !== action.payload.id) {
          return true;
        }
      });
    },
  },
});

export const { add, remove } = favoriteSlicer.actions;

export const favoriteReducer = favoriteSlicer.reducer;
