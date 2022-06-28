import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedNames: [],
};

export const selectedNamesSlice = createSlice({
  name: "selected-names",
  initialState,
  reducers: {
    setSelectedNameInArray: (state, action) => {
      state.selectedNames.push(action.payload);
    },
  },
});

export const { setSelectedNameInArray } = selectedNamesSlice.actions;
