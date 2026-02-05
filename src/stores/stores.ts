import { configureStore } from "@reduxjs/toolkit";

import sourceSlice from "@/features/others/store/source-slice";

export const store = configureStore({
  reducer: {
    sourceSlice: sourceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
