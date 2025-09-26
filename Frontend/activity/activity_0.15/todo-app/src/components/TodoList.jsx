import { useRecoilValue, useRecoilState } from 'recoil'
import { filteredTodoList } from '../selectors/filteredTodoList'
import { todoListState } from '../atoms/todoListState'

export default function TodoList() {
  const todos = useRecoilValue(filteredTodoList)
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const toggleCompleted = (todoId) => {
    const updatedList = todoList.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )
    setTodoList(updatedList)
  }

  const deleteTodo = (todoId) => {
    const updatedList = todoList.filter(todo => todo.id !== todoId)
    setTodoList(updatedList)
  }

  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '4px',
            marginBottom: '0.3rem',
            backgroundColor: todo.completed ? '#e0e0e0' : 'transparent'
          }}
        >
          <label
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              userSelect: 'none',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            {todo.text}
          </label>
          <button
            onClick={() => deleteTodo(todo.id)}
            style={{ marginLeft: '1rem' }}
          >
            Excluir
          </button>
        </li>
      ))}
    </ul>
  )
}
