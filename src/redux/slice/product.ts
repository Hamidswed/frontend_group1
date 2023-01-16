import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../type/ProductType";

type InitialType = {
  products: ProductType[];
  carts: ProductType[];
  favorites: ProductType[];
};

const initialState: InitialType = {
  products: [],
  carts: [],
  favorites: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductData: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const index = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedProduct = { ...action.payload, qty: 1 };

      if (index === -1) {
        state.carts.push(updatedProduct);
      } else {
        state.carts[index].qty++;
      }
    },
  },
});
export const actions = productSlice.actions;
export default productSlice.reducer;
