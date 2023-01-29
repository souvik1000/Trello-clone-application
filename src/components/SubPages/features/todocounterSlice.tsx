import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 1
};

export const todocounterSlice = createSlice({
  name: "todocounter",
  initialState,
  reducers: {
    // Incrementing the count from the laststate by one
    increment: (state) => {
      state.counter += 1;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment } = todocounterSlice.actions;

export default todocounterSlice.reducer;
