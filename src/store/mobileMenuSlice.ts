import { createSlice } from "@reduxjs/toolkit";
import { MobileMenuState } from "../types/store";

const initialState: MobileMenuState = {
  open: false,
};

const mobileMenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    closeMenu(state) {
      state.open = false;
    },
    openMenu(state) {
      state.open = true;
    },
  },
});

export const { closeMenu, openMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
