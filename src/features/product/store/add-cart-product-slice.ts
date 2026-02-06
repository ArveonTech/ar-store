import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type statusAddCart = string;

const initialState = "";

const statusAddCartSlice = createSlice({
  name: "addCart",
  initialState,
  reducers: {
    status: (_, action: PayloadAction<statusAddCart>) => {
      return action.payload;
    },
  },
});

export const { status } = statusAddCartSlice.actions;
export default statusAddCartSlice.reducer;
