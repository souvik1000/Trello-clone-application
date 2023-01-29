import { createSlice } from "@reduxjs/toolkit";

export interface addworkspaceState {
  payload: {
    id: number;
    boardname: string;
    boardsrc: string;
  };
}

export const initialState = { workspace: [] };

export const workspaceSlice = createSlice({
  name: "workspacedata",
  initialState,
  reducers: {
    // Adding data to workspace list
    addworkspace: (state, action: addworkspaceState) => {
      state.workspace = [
        ...state.workspace,
        {
          bid: action.payload.id,
          boardname: action.payload.boardname,
          boardsrc: action.payload.boardsrc
        }
      ];
    }
  }
});

// Action creators are generated for each case reducer function
export const { addworkspace } = workspaceSlice.actions;

export default workspaceSlice.reducer;
