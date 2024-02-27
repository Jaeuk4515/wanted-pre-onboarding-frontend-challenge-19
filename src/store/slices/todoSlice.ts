import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type todoList = {
  id: number;
  todo: string;
};

const initialState: todoList[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todoList>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload);
    }
  }
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;