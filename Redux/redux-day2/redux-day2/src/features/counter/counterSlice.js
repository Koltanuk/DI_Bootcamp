import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter", // "counter/increment"
  initialState,
  reducers: {
    // counter/increment
    increment: (state, action) => {
      state.count += 1;
    },
    // counter/decrement
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByNum: (state, action) => {
      console.log(action);
      state.count += action.payload;
    },
    incrementBy2Nums: (state, action) => {
      console.log(action);
      state.count += action.payload.num1 + action.payload.num2;
    },
    incrementWithPrepare: {
      reducer(state, action) {
        state.count += action.payload;
      },
      prepare(paramr1, paramr2) {
        return { payload: paramr1 + paramr2 };
      },
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByNum,
  incrementBy2Nums,
  incrementWithPrepare,
} = counterSlice.actions;
export default counterSlice.reducer;
