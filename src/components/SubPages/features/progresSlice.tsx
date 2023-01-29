import { createSlice } from "@reduxjs/toolkit";

export interface taskaddState {
  payload: {
    data: string;
    counter: number;
  };
}

export interface taskremoveState {
  payload: number;
}

export const initialState = { progres: [] };

export const progresSlice = createSlice({
  name: "progres",
  initialState,
  reducers: {
    // Adding data to progres list
    addtoprogreslist: (state = initialState, action: taskaddState) => {
      var today = new Date();
      var date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();

      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      state.progres = [
        ...state.progres,
        {
          data: action.payload.data,
          date: date,
          time: time,
          counter: action.payload.counter
        }
      ];
      // console.log(action.payload, state.progres);
    },
    // removing data from todos list
    removeprogresdata: (state, action: taskremoveState) => {
      state.progres = state.progres.filter(
        (item) => item.counter !== action.payload
      );
      // console.log(state.todos);
    }
  }
});

// Action creators are generated for each case reducer function
export const { addtoprogreslist, removeprogresdata } = progresSlice.actions;

export default progresSlice.reducer;
