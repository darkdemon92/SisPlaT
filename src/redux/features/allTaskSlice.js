import { createSlice } from "@reduxjs/toolkit";

let initialState = {tasks:[]};
export const allTaskSlice = createSlice({
  name: "AllTask",
  initialState,
  reducers: {
    modifyTaskList: (state, action) => {
      //console.log(state, action);
      const {tasks} = action.payload;
      //console.log(tasks);
      state.tasks = tasks;
    },
  },
});

export const { modifyTaskList } = allTaskSlice.actions;
export default allTaskSlice.reducer;