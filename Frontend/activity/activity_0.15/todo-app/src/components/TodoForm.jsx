import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoListState'
import { nanoid } from 'nanoid' // biblioteca para gerar ID único

export default function TodoForm() {
  const [text, setText] = useState('')
  const [todoList, setTodoList] = useRecoilState(todoListState)

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return

    const newTodo = {
      id: nanoid(),
      text,
      completed: false,
    }

    setTodoList([...todoList, newTodo])
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}
