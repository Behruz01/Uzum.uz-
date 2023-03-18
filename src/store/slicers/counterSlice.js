import { createSlice } from "@reduxjs/toolkit";

const initialCounterSlicer = {
  count: 1,
  test: false,
};
export const counterSlicer = createSlice({
  name: "counter",
  initialState: initialCounterSlicer,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlicer.actions;

export const counterReducer = counterSlicer.reducer;
