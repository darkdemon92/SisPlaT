import { createSlice } from "@reduxjs/toolkit";

let initialState = {userdata:{}, logged: false};
export const loginSlice = createSlice({
  name: "Data",
  initialState,
  reducers: {
    modifyUserData: (state, action) => {
      //console.log(state, action);
      //console.log(state.logged);
      const { userdata, logged } = action.payload;
      //console.log(action.payload);
      state.userdata = userdata;
      state.logged = logged;
    },
  },
});

export const { modifyUserData } = loginSlice.actions;
export default loginSlice.reducer;