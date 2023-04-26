import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Shot } from "../types/shots";

const initialState: Shot = {
  name: "Serve",
  videoID: "zSTsLQQDhMw",
};

const shotSlice = createSlice({
  name: "shot",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Shot>) => {
      return action.payload;
    },
  },
});

export const { set } = shotSlice.actions;
export default shotSlice.reducer;
