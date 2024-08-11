import { Middleware } from "@reduxjs/toolkit";
import { setError, setSelection } from "../selectionSlice";
import { checkValidity } from "../../../lib/utils";

export const validityChecker: Middleware = (stateAPI) => (next) => (action: any) => {
  const { dispatch } = stateAPI;
  if (action.type === setSelection.type) {
    const selectedProduct = action.payload;
    const validationResult = checkValidity(selectedProduct);

    if (!validationResult.isValid) {
      dispatch(setError(validationResult.message));
      return;
    }
  }
  return next(action);
};
