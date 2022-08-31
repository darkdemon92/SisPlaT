import { createSlice } from "@reduxjs/toolkit";

let initialState = {tasks:{}}; //{tasks:[]};
export const allTaskSlice = createSlice({
  name: "AllTask",
  initialState,
  reducers: {
    modifyTaskList: (state, action) => {
      //console.log(state, action);
      //console.log(action.payload);
      const {getAllTasks} = action.payload;
      //console.log(state);
      state.tasks = getAllTasks;
    },
  },
});

export const { modifyTaskList } = allTaskSlice.actions;
export default allTaskSlice.reducer;