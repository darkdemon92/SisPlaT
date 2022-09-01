import { createSlice } from "@reduxjs/toolkit";

export const TaskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    TaskList: (state, action) => {
      //console.log(state, action);
      //console.log(action.payload);
      const Data = action.payload;
      //console.log(DATA);
      state.tasks = Data;
    },
    modifyTaskList: (state, action) => {
      //console.log(state, action);
      //console.log(action.payload);
      const Data = action.payload;
      const taskFound = state.tasks.find((task) => task.id === Data.id);
      //console.log(taskFound);
      if (taskFound) {
        state.tasks.splice(state.tasks.indexOf(taskFound), 1);
        state.tasks.push(Data);
        //taskFound = action.payload;
      }
    },
  },
});

export const { TaskList, modifyTaskList } = TaskSlice.actions;
export default TaskSlice.reducer;
