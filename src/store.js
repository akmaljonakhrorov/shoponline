import { configureStore } from "@reduxjs/toolkit";
import productReduser from "./features/productSlice";
export const store = configureStore({
  reducer: {
    products: productReduser,
  },
});
