import { TodoProvider, useTodoContext } from './context/TodoContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { TodoFilters } from './components/TodoFilters';
import { useMemo } from 'react';
import './index.css';

function TodoList() {
  const { state } = useTodoContext();

  useLocalStorage('todos', state.todos); // Salva no localStorage

  const filteredTodos = useMemo(() => {
    switch (state.filter) {
      case 'completed':
        return state.todos.filter(todo => todo.completed);
      case 'pending':
        return state.todos.filter(todo => !todo.completed);
      default:
        return state.todos;
    }
  }, [state.todos, state.filter]);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TodoForm />
      <TodoFilters />
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}
