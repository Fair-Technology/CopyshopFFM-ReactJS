import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../modals/order";

interface InitialCartState {
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
      state.cartItems.push(action.payload);
      state.totalItems += 1;
    },
    deleteFromCart: (state, action: PayloadAction<Product>) => {
      const index = state.cartItems.indexOf(action.payload);
      if (index > -1) {
        state.cartItems.splice(index, 1);
      }
      state.totalItems -= 1;
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
