import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredTodo } from '../store/todos/todos-selectors';
import { removeTodo, toggleTodo } from '../store/todos/todos-actions';
// import { selectActiveFilters } from '../store/filters/filters-selectors';
import { useParams } from 'react-router-dom';

export const TodoList = () => {
  const dispatch = useDispatch();
  // const activeFilter = useSelector(selectActiveFilters);
  const { filter: activeFilter } = useParams();
  const todos = useSelector((state) => selectFilteredTodo(state, activeFilter));

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />{' '}
          {todo.title}{' '}
          <button type='button' onClick={() => dispatch(removeTodo(todo.id))}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
