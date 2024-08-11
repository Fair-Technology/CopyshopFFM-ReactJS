import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import selectionReducer from "./selectionSlice";
import { validityChecker } from "./middleware/validityChecker";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = {
  cart: cartReducer,
  selection: selectionReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(validityChecker),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
