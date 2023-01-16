import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type/ProductType";

type InitialType = {
  products: ProductType[];
};

const initialState: InitialType = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductData: (state, action) => {
      state.products = action.payload
    },
  },
});
export const actions = productSlice.actions;
export default productSlice.reducer;
