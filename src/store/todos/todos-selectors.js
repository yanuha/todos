export const selectAllTodos = (state) => state.todos;

export const selectCompletedTodos = (state) =>
  state.todos.filter((todo) => todo.completed === false);

export const selectFilteredTodo = (state, filter) => {
  switch (filter) {
    case 'active':
      return state.todos.filter((todo) => !todo.completed);
    case 'completed':
      return state.todos.filter((todo) => todo.completed);
    case 'all':
    default:
      return state.todos;
  }
};
