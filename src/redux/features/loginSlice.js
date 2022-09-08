import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginData",
  initialState: {
    userdata: {}, 
    logged: false,
  },
  reducers: {
    modifyUserData: (state, action) => {
      //console.log(state, action);
      //console.log(state.logged);
      const { user, logged } = action.payload;
      //console.log(action.payload);
      state.userdata = user;
      state.logged = logged;
    },
  },
});

export const { modifyUserData } = loginSlice.actions;
export default loginSlice.reducer;