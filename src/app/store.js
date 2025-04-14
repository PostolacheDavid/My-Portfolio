import { configureStore } from "@reduxjs/toolkit";
import isLoadingReducer from "../features/isLoading/isLoadingSlice";
import modalReducer from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    isLoading: isLoadingReducer,
    modal: modalReducer,
  },
});
