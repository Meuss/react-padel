import { configureStore } from "@reduxjs/toolkit";
import shotReducer from "./shotSlice";

const store = configureStore({
  reducer: {
    shot: shotReducer,
  },
});

export default store;
