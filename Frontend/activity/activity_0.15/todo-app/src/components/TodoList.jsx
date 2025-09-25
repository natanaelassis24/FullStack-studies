export default function TodoList({ todos, selectedTodoId, onSelectTodo, onUpdateTodo, onDeleteTodo }) {
  function toggleCompleted(todo) {
    onUpdateTodo(todo.id, { ...todo, completed: !todo.completed })
  }

  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => onSelectTodo(todo.id)}
          style={{
            backgroundColor: todo.id === selectedTodoId ? '#d3f9d8' : 'transparent',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '4px',
            marginBottom: '0.3rem'
          }}
        >
          <label
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              userSelect: 'none',
              cursor: 'pointer',
            }}
            onClick={e => e.stopPropagation()} // evita seleção ao clicar no label
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo)}
            />
            {todo.text}
          </label>
          <button
            onClick={e => {
              e.stopPropagation() // evita disparar onSelectTodo ao clicar no botão
              onDeleteTodo(todo.id)
            }}
            style={{ marginLeft: '1rem' }}
          >
            Excluir
          </button>
        </li>
      ))}
    </ul>
  )
}
