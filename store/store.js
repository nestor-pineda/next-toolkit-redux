import { configureStore } from "@reduxjs/toolkit";
import { nameSlice } from "./slices/name/nameSlice";
import { selectedNamesSlice } from "./slices/selectedNames/selectedNamesSlice";

export const store = configureStore({
  reducer: {
    nameReducer: nameSlice.reducer,
    selectedNameReducer: selectedNamesSlice.reducer,
  },
});
