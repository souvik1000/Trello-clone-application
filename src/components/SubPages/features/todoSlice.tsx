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

export const initialState = { todos: [] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Adding data to todos list
    addtotodolist: (state = initialState, action: taskaddState) => {
      var today = new Date();
      var date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();

      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      state.todos = [
        ...state.todos,
        {
          data: action.payload.data,
          date: date,
          time: time,
          counter: action.payload.counter
        }
      ];
      // console.log(action.payload, state.todos);
    },
    // removing data from todos list
    removetododata: (state, action: taskremoveState) => {
      state.todos = state.todos.filter(
        (item) => item.counter !== action.payload
      );
      // console.log(state.todos);
    }
  }
});

// Action creators are generated for each case reducer function
export const { addtotodolist, removetododata } = todoSlice.actions;

export default todoSlice.reducer;
