import { createSlice } from "@reduxjs/toolkit";

export interface taskState {
  payload: {
    data: string;
    counter: number;
  };
}

export const initialState = { done: [] };

export const doneSlice = createSlice({
  name: "done",
  initialState,
  reducers: {
    // Adding data to done list
    addtodonelist: (state = initialState, action: taskState) => {
      var today = new Date();
      var date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();

      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      state.done = [
        ...state.done,
        {
          data: action.payload.data,
          date: date,
          time: time,
          counter: action.payload.counter
        }
      ];
      // console.log(action.payload, state.progres);
    }
  }
});

// Action creators are generated for each case reducer function
export const { addtodonelist } = doneSlice.actions;

export default doneSlice.reducer;
