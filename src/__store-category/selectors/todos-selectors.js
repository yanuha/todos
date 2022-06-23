export const allTodos = (state) => state.todos;

export const completedTodos = (state) =>
  state.todos.filter((todo) => todo.completed === false);
