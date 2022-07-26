import { configureStore } from "@reduxjs/toolkit";
import textReducer from "../features/reverseText";

export const store = configureStore({
  reducer: {
    text: textReducer,
  },
});
