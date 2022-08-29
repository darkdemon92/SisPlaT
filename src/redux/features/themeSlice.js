import { createSlice } from "@reduxjs/toolkit";

let initialState = {mode:"dark"};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    modifyTheme: (state, action) => {
      //console.log(state, action);
      const { mode } = action.payload;
      //console.log(mode);
      state.mode = mode;
    },
  },
});

export const { modifyTheme } = themeSlice.actions;
export default themeSlice.reducer;