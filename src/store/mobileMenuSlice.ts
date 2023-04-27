import { createSlice } from "@reduxjs/toolkit";
import { MobileMenuState } from "../types/store";

const initialState: MobileMenuState = {
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
