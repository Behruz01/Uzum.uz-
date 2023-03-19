import { createSlice } from "@reduxjs/toolkit";

const initialFavoriteSlicer = {
  favoriteVideos:[]
};
export const favoriteSlicer = createSlice({
  name: "favorite",
  initialState: initialFavoriteSlicer,
  reducers: {
    add: (state, action) => {
      state.favoriteVideos.push(action.payload)
    },
    remove: (state, action) => {
      state.favoriteVideos=state.favoriteVideos.filter((video)=>{
        if(video.id!==action.payload.id){
          return true
        }
      })
    },
  },
});

export const { add, remove } = favoriteSlicer.actions;

export const favoriteReducer = favoriteSlicer.reducer;
