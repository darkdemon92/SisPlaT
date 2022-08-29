import { createSlice } from "@reduxjs/toolkit";

let initialState = {logged:false};
export const loginSlice = createSlice({
  name: "IsLogged",
  initialState,
  reducers: {
    modifyLoggedIn: (state, action) => {
      //console.log(state, action);
      const { logged } = action.payload;
      //console.log(logged);
      state.logged = logged;
    },
  },
});

export const { modifyLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;