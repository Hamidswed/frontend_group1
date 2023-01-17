import { isBindExpression } from "@babel/types";
import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type/ProductType";

type InitialType = {
  products: ProductType[];
  favorites:ProductType[];
  isExist:boolean;
 
};

const initialState: InitialType = {
  products: [],
  favorites:[],
  isExist:false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductData: (state, action) => {
      state.products = action.payload
    },
    getFavoriteData:(state,action)=>
    {
const id=action.payload.id;
      if( state.isExist===false)
      {
        state.favorites.push(action.payload)
      }
       
    }
  },
});
export const actions = productSlice.actions;
export default productSlice.reducer;
