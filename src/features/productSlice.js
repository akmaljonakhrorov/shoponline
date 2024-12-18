import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const fromlocalStorage = () => {
  return (
    JSON.parse(localStorage.getItem("products")) ?? {
      products: [],
      allProducts: 0,
      price: 0,
    }
  );
};
const productSlice = createSlice({
  name: "products",
  initialState: fromlocalStorage(),
  reducers: {
    addProducts: (state, { payload }) => {
      const product = state.products.find((prod) => prod.id == payload.id);
      if (product) {
        toast.warn("Product already added");
      } else {
        state.products = [...state.products, payload];
      }
      productSlice.caseReducers.calculateTotal(state);
    },
    removeProducts: (state, { payload }) => {
      const res = state.products.filter((value) => value.id != payload);
      state.products = res;
      productSlice.caseReducers.calculateTotal(state);
    },
    incrementAmount: (state, { payload }) => {
      const item = state.products.find((product) => product.id == payload);
      item.amount += 1;
      productSlice.caseReducers.calculateTotal(state);
    },
    decrementAmount: (state, { payload }) => {
      const item = state.products.find((product) => product.id == payload);
      item.amount -= 1;
      productSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      let allProductsCounter = 0;
      let allProductsPrice = 0;
      state.products.forEach((product) => {
        allProductsPrice += product.amount * product.price;
        allProductsCounter += product.amount;
      });
      state.allProducts = allProductsCounter;
      state.price = allProductsPrice;
      localStorage.setItem("products", JSON.stringify(state));
    },
  },
});

export const { addProducts, removeProducts, incrementAmount, decrementAmount } =
  productSlice.actions;
export default productSlice.reducer;
