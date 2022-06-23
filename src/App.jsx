import './styles.css';

import { TodoList } from './components/TodoList';
import { NewTodo } from './components/NewTodo';
import { Filters } from './components/Filters';

export default function App() {
  return (
    <div className='App'>
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  );
}
