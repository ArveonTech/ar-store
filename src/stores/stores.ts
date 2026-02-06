import { configureStore } from "@reduxjs/toolkit";

import sourceSlice from "@/features/others/store/source-slice";
import statusAddCartSlice from "@/features/product/store/add-cart-product-slice";

export const store = configureStore({
  reducer: {
    sourceSlice: sourceSlice,
    statusAddCartSlice: statusAddCartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
