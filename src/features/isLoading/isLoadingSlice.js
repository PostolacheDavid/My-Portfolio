import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState,

  reducers: {
    toggleValue: (state) => {
      if (state.value === true) {
        state.value = false;
      } else {
        state.value = true;
      }
    },
  },
});

export const { toggleValue } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
