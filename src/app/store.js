import { configureStore } from "@reduxjs/toolkit";
import isLoadingReducer from "../features/isLoading/isLoadingSlice";

export const store = configureStore({
  reducer: {
    isLoading: isLoadingReducer,
  },
});
