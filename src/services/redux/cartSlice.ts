import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../modals/order";
import { calculatePrice } from "../../lib/utils";

export interface InitialCartState {
  cartItems: Product[];
  totalItems: number;
}

const initialState: InitialCartState = {
  cartItems: [],
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      let item = action.payload;
      const cost = calculatePrice(item);
      item = { ...item, cost };
      state.cartItems.push(item);
      state.totalItems += 1;
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index > -1) {
        state.cartItems.splice(index, 1);
      }
      state.totalItems -= 1;
    },
    updateCart: (
      state,
      action: PayloadAction<{ itemIndex: number; item: Product }>
    ) => {
      const { itemIndex, item } = action.payload;
      const cost = calculatePrice(item);
      state.cartItems[itemIndex] = { ...item, cost };
    },
  },
});

export const { addToCart, deleteFromCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
