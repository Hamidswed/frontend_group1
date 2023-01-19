import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../type/ProductType";

const favouriteItems =
  localStorage.getItem("favorites") != null
    ? JSON.parse(localStorage.getItem("favorites") as string)
    : [];

type InitialType = {
  products: ProductType[];
  productDetail: ProductType;
  favorites: ProductType[];
  carts: ProductType[];
  totalPrice: number;
};

const initialState: InitialType = {
  products: [],
  favorites: favouriteItems,
  carts: [],
  totalPrice: 0,
  productDetail: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
    qty: 0,
  },
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductData: (state, action) => {
      state.products = action.payload;
    },
    getProductDetailData: (state, action) => {
      state.productDetail = action.payload;
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
    removeFromCart: (state, action) => {
      const index = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[index].qty === 1 && index >= 0) {
        state.carts.splice(index, 1);
      } else {
        state.carts[index].qty--;
      }
    },
    removeAll: (state, action) => {
      const index = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      index >= 0 && state.carts.splice(index, 1);
    },
    totalPrice: (state) => {
      state.totalPrice = state.carts.reduce((acc, curr) => {
        return acc + curr.qty * curr.price;
      }, 0);
    },

    getFavoriteData: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem(
        "favorites",
        JSON.stringify(state.favorites.map((item) => item))
      );
    },
    removeFromFavourite: (state, action) => {
      const index = state.favorites.findIndex(
        (item) => item.id === action.payload.id
      );
      index >= 0 && state.favorites.splice(index, 1);
      localStorage.setItem('favorites',JSON.stringify(state.favorites.map((item)=>item)))
    },
    sortNameAscending: (state) => {
      state.products.sort((a, b): number => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    },

    sortPriceAscending: (state) => {
      state.products.sort((a, b): number => {
        return a.price - b.price;
      });
    },
    sortCategoryAscending: (state) => {
      state.products.sort((a, b): number => {
        const nameA = a.category.toUpperCase();
        const nameB = b.category.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    },
  },
});
export const actions = productSlice.actions;
export default productSlice.reducer;
