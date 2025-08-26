import { useTodoContext } from '../context/TodoContext';

export const TodoItem = ({ todo }) => {
  const { dispatch } = useTodoContext();

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
        Remover
      </button>
    </li>
  );
};
