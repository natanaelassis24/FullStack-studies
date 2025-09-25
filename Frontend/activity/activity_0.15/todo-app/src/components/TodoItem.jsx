import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoListState'

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((todo) => todo.id === item.id)

  const toggleComplete = () => {
    const newList = [...todoList]
    newList[index] = {
      ...item,
      isComplete: !item.isComplete,
    }
    setTodoList(newList)
  }

  const removeItem = () => {
    const newList = todoList.filter((_, i) => i !== index)
    setTodoList(newList)
  }

  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <span style={{ textDecoration: item.isComplete ? 'line-through' : 'none', marginRight: '1rem' }}>
        {item.text}
      </span>
      <button onClick={toggleComplete}>
        {item.isComplete ? 'Desfazer' : 'Concluir'}
      </button>
      <button onClick={removeItem} style={{ marginLeft: '0.5rem' }}>
        Remover
      </button>
    </div>
  )
}
