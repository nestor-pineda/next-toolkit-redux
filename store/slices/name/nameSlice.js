import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputText: "",
  inputArray: [],
};

export const nameSlice = createSlice({
  name: "change name",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.inputText = action.payload;
    },
    setArray: (state, action) => {
      state.inputArray.push(action.payload);
    },
    deleteFromArray: (state, action) => {
      state.inputArray.splice(action.payload, 1);
    },
  },
});

export const { setName, setArray, deleteFromArray } = nameSlice.actions;
