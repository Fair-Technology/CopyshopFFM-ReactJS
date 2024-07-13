import { configureStore, Store } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import cartReducer from "./cartSlice";

export const store: Store = configureStore({
  reducer: {
    cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
