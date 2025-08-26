import { useTodoContext } from '../context/TodoContext';

export const TodoFilters = () => {
  const { state, dispatch } = useTodoContext();
  const filters = ['all', 'completed', 'pending'];

  return (
    <div>
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: filter })}
          style={{ fontWeight: state.filter === filter ? 'bold' : 'normal' }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
