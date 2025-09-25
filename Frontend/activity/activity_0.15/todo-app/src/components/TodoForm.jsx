import { useState } from 'react'

export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return
    onAddTodo({
      text,
      completed: false,
    })
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
