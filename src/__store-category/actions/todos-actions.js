import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../constants/todos-const";

// actions
export const addTodo = (title) => ({
  type: ADD_TODO,
  title
});

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  todoId
});

export const toggleTodo = (todoId) => ({
  type: TOGGLE_TODO,
  todoId
});
