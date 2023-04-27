import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const mobileMenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.open = !state.open;
    },
  },
});

export const { toggleMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
