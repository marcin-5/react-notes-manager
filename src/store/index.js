import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "store/auth/auth-slice";
import { noteReducer } from "store/notes/notes-slice";

export const store = configureStore({
  reducer: {
    noteSlice: noteReducer,
    authSlice: authReducer
  },
});
