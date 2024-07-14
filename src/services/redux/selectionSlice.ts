import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../modals/order";

interface InitialSelectionState {
  selectedProduct: Product;
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
    name: "booklet",
  },
  price: 0,
};

const initialState: InitialSelectionState = {
  selectedProduct: defaultSelection,
};

export const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    setFormat: (state, action: PayloadAction<string>) => {
      state.selectedProduct.format = action.payload;
    },
    setWeight: (state, action: PayloadAction<string>) => {
      state.selectedProduct.weight = action.payload;
    },
    setPrintSetting: (state, action: PayloadAction<string>) => {
      state.selectedProduct.printSetting = action.payload;
    },
    setFlipSetting: (state, action: PayloadAction<string>) => {
      state.selectedProduct.flipSetting = action.payload;
    },
    setNoOfSets: (state, action: PayloadAction<number>) => {
      state.selectedProduct.noOfSets = action.payload;
    },
    setBWPages: (state, action: PayloadAction<number>) => {
      state.selectedProduct.bwPages = action.payload;
    },
    setColorPages: (state, action: PayloadAction<number>) => {
      state.selectedProduct.colorPages = action.payload;
    },
    setOption: (state, action: PayloadAction<string>) => {
      state.selectedProduct.option.name = action.payload;
    },
    setFrontCover: (state, action: PayloadAction<string>) => {
      state.selectedProduct.option.frontCover = action.payload;
    },
    setBackCover: (state, action: PayloadAction<string>) => {
      state.selectedProduct.option.backCover = action.payload;
    },
    setCoverPrint: (state, action: PayloadAction<boolean>) => {
      state.selectedProduct.option.coverPrint = action.payload;
    },
    setFlipSide: (state, action: PayloadAction<string>) => {
      state.selectedProduct.option.flipSide = action.payload;
    },
    setCoverColor: (state, action: PayloadAction<string>) => {
      state.selectedProduct.option.coverColor = action.payload;
    },
    setIsEmbossed: (state, action: PayloadAction<boolean>) => {
      state.selectedProduct.option.isEmbossed = action.payload;
    },
    setEmbossColor: (state, action: PayloadAction<string>) => {
      state.selectedProduct.option.embossColor = action.payload;
    },
    setCoverWeight: (state, action: PayloadAction<string>) => {
      state.selectedProduct.option.coverWeight = action.payload;
    },
    setStitchSide: (state, action: PayloadAction<string>) => {
      state.selectedProduct.option.stitchSide = action.payload;
    },
    setHolePunchType: (state, action: PayloadAction<string>) => {
      state.selectedProduct.option.holePunchType = action.payload;
    },
    setHolePunchSide: (state, action: PayloadAction<string>) => {
      state.selectedProduct.option.holePunchSide = action.payload;
    },
    setOnlyName: (state, action: PayloadAction<string>) => {
      state.selectedProduct.option = {
        name: action.payload,
      };
    },
  },
});

export const {
  setFormat,
  setWeight,
  setPrintSetting,
  setFlipSetting,
  setNoOfSets,
  setBWPages,
  setColorPages,
  setOption,
  setFrontCover,
  setBackCover,
  setCoverPrint,
  setFlipSide,
  setCoverColor,
  setIsEmbossed,
  setEmbossColor,
  setCoverWeight,
  setStitchSide,
  setHolePunchType,
  setHolePunchSide,
  setOnlyName,
} = selectionSlice.actions;
export default selectionSlice.reducer;
