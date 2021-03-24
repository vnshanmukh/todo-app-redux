import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    // setCheck: (state, action) => {
    //   state.todoList.map((i) => {
    //     if (action.payload === i.id) {
    //       if (i.done === true) {
    //         i.done = false;
    //       } else {
    //         i.done = true;
    //       }
    //     }
    //   });
    // },
  },
});

export const { saveTodo } = todoSlice.actions;
export const { setCheck } = todoSlice.actions;

export const savedTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
