import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeslice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
