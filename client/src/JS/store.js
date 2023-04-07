import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice/productSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product:productSlice
},
});
