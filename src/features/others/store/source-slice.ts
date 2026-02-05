import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SourceState = "app" | "products";

const initialState = "app" as SourceState;

const sourceSlice = createSlice({
  name: "source",
  initialState,
  reducers: {
    setSource: (_, action: PayloadAction<SourceState>) => {
      return action.payload;
    },
  },
});

export const { setSource } = sourceSlice.actions;
export default sourceSlice.reducer;
