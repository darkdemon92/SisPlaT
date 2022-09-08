import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode:"dark",
  },
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