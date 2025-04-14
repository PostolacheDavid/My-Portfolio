import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  projectLink: "",
  github: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
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
