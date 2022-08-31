import { createSlice } from "@reduxjs/toolkit";

let initialState = {tasks:[]};
export const allTaskSlice = createSlice({
  name: "AllTask",
  initialState,
  reducers: {
    modifyTaskList: (state, action) => {
      //console.log(state, action);
      const {data} = action.payload;
      //console.log(JSON.stringify(data));
      //state.tasks = data;
    },
  },
});

export const { modifyTaskList } = allTaskSlice.actions;
export default allTaskSlice.reducer;