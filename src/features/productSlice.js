import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  allProducts: 0,
  price: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      const product = state.products.find((prod) => prod.id == payload.id);
      if (product) {
        toast.warn("Product already added");
      } else {
        state.products = [...state.products, payload];
        let allProductsCounter = 0;
        let allProductsPrice = 0;
        state.products.forEach((product) => {
          allProductsPrice += product.amount * product.price;
          allProductsCounter += product.amount;
        });
        state.allProducts = allProductsCounter;
        state.price = allProductsPrice;
      }
    },
    removeProducts: () => {},
  },
});

export const { addProducts, removeProducts } = productSlice.actions;
export default productSlice.reducer;
