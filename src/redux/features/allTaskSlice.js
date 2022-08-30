import { createSlice } from "@reduxjs/toolkit";

let initialState = {tasks:[]};
export const allTaskSlice = createSlice({
  name: "AllTask",
  initialState,
  reducers: {
    modifyTaskList: (state, action) => {
      //console.log(state, action);
      //const  = action.payload;
      //console.log(logged);
      //state.logged = logged;
    },
  },
});

export const { modifyTaskList } = allTaskSlice.actions;
export default allTaskSlice.reducer;