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
      const {actions, records} = action.payload;
      console.log(actions, records);
      if (actions === "update") {   
        const taskFound = state.tasks.find((task) => task.id === records.id);
        //console.log(taskFound);
        if (taskFound) {
          state.tasks.splice(state.tasks.indexOf(taskFound), 1);
          state.tasks.push(records);
        }
      }
      if (actions === "delete") {   
        const taskFound = state.tasks.find((task) => task.id === records.id);
        //console.log(taskFound);
        if (taskFound) {
          state.tasks.splice(state.tasks.indexOf(taskFound), 1);
        }
      }
      if (actions === "create") {   
        state.tasks.push(records);
      }
    },
  },
});

export const { TaskList, modifyTaskList } = TaskSlice.actions;
export default TaskSlice.reducer;
