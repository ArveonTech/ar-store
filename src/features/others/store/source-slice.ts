import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SourceState = string[];

const initialState: SourceState = ["app"];

const sourceSlice = createSlice({
  name: "source",
  initialState,
  reducers: {
    setSource: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeSource: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const { setSource, removeSource } = sourceSlice.actions;
export default sourceSlice.reducer;
