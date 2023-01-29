import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./components/SubPages/features/todoSlice";
import progresReducer from "./components/SubPages/features/progresSlice";
import doneReducer from "./components/SubPages/features/doneSlice";
import counterSlice from "./components/SubPages/features/todocounterSlice";
import workspaceSlice from "./components/SubPages/features/workspaceSlice";
import boardcounterSlice from "./components/SubPages/features/boardcounterSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    progres: progresReducer,
    done: doneReducer,
    count: counterSlice,
    workspace: workspaceSlice,
    bcount: boardcounterSlice
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
