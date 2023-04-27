import { configureStore } from "@reduxjs/toolkit";
import shotReducer from "./shotSlice";
import mobileMenuReducer from "./mobileMenuSlice";

const store = configureStore({
  reducer: {
    shot: shotReducer,
    mobileMenu: mobileMenuReducer,
  },
});

export default store;
