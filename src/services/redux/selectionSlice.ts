import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../modals/order";

export interface InitialSelectionState {
  selectedProduct: Product;
  error: string | null;
}

export const defaultSelection: Product = {
  format: "A4",
  weight: "80g",
  printSetting: "singleSided",
  flipSetting: null,
  noOfSets: 1,
  bwPages: 0,
  colorPages: 0,
  file: "",
  option: {
    name: "print",
  },
};

const initialState: InitialSelectionState = {
  selectedProduct: defaultSelection,
  error: null,
};

export const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    setSelection: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setSelection, setError } = selectionSlice.actions;
export default selectionSlice.reducer;
