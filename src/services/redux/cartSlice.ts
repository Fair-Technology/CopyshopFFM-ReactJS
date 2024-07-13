import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {}

// Define a type for the slice state
interface CartState {
  cartItems: CartItem[];
  totalItems: number;
}

// Define the initial state using that type
const initialState: CartState = {
  cartItems: [],
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
      state.totalItems += 1;
    },
    deleteFromCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.cartItems.indexOf(action.payload);
      if (index > -1) {
        // only splice array when item is found
        state.cartItems.splice(index, 1); // 2nd parameter means remove one item only
      }
      state.totalItems -= 1;
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
