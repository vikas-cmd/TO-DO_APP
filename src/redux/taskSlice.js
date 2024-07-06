import { createSlice } from '@reduxjs/toolkit';
//initialState
const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  };
  //create slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  //reducers
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ text: action.payload, completed: false });
      console.log("addTask")
    },
    deleteTask: (state, action) => {
        state.tasks.splice(action.payload, 1);
      },
    editTask: (state, action) => {
        state.tasks[action.payload.index].text = action.payload.text;
    },
    toggleTaskCompletion: (state, action) => {
        state.tasks[action.payload].completed = !state.tasks[action.payload].completed;
      },
  }
});

export const { addTask, deleteTask, editTask, toggleTaskCompletion } = taskSlice.actions;
export default taskSlice.reducer;
