import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isForm: false,
  isError: false,
  projectLink: "",
  github: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { isForm, isError } = action.payload;
      state.isOpen = true;
      state.isForm = isForm;
      state.isError = isError;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.isForm = false;
      state.isError = false;
    },
    setLinks: (state, action) => {
      const { projectLink, githubLink } = action.payload;
      state.projectLink = projectLink;
      state.github = githubLink;
    },
  },
});

export const { openModal, closeModal, setLinks } = modalSlice.actions;

export default modalSlice.reducer;
