import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 1
};

export const boardcounterSlice = createSlice({
  name: "boardcounter",
  initialState,
  reducers: {
    // Incrementing the count from the laststate by one
    increment: (state) => {
      state.counter += 1;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment } = boardcounterSlice.actions;

export default boardcounterSlice.reducer;
