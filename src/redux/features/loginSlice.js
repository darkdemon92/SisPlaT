import { createSlice } from "@reduxjs/toolkit";

let initialState = {logged:false};
export const loginSlice = createSlice({
  name: "IsLogged",
  initialState,
  reducers: {
    modifyLoggedIn: (state, action) => {
      //console.log(state, action);
      //console.log(state.logged);
      const { data } = action.payload;
      //console.log(data);
      state.logged = data;
    },
  },
});

export const { modifyLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;