import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from './atoms/todoListState'
import { getTodos, addTodo, updateTodo, deleteTodo } from './apis/api'
import TodoForm from './components/TodoForm'
import TodoFilters from './components/TodoFilters'
import TodoList from './components/TodoList'
import './App.css'

export default function App() {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const [selectedTodoId, setSelectedTodoId] = useState(null)

  // Carregar tarefas da API na montagem
  useEffect(() => {
    async function fetchTodos() {
      try {
        const todosFromApi = await getTodos()
        setTodoList(todosFromApi)
      } catch (err) {
        console.error('Erro ao carregar tarefas:', err)
      }
    }
    fetchTodos()
  }, [setTodoList])

  // Adicionar tarefa
  async function handleAddTodo(todo) {
    try {
      const savedTodo = await addTodo(todo)
      // O ID vem como _id da API, ajustamos para id
      setTodoList(old => [...old, { id: savedTodo._id, ...todo }])
    } catch (err) {
      console.error('Erro ao adicionar tarefa:', err)
    }
  }

  // Atualizar tarefa
  async function handleUpdateTodo(id, updatedTodo) {
    try {
      await updateTodo(id, updatedTodo)
      setTodoList(old =>
        old.map(todo => (todo.id === id ? { id, ...updatedTodo } : todo))
      )
    } catch (err) {
      console.error('Erro ao atualizar tarefa:', err)
    }
  }

  // Deletar tarefa
  async function handleDeleteTodo(id) {
    try {
      await deleteTodo(id)
      setTodoList(old => old.filter(todo => todo.id !== id))
      if (selectedTodoId === id) setSelectedTodoId(null)
    } catch (err) {
      console.error('Erro ao deletar tarefa:', err)
    }
  }

  // Selecionar tarefa
  function handleSelectTodo(id) {
    setSelectedTodoId(id)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Lista de Tarefas</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoFilters />
      <TodoList
        todos={todoList}
        selectedTodoId={selectedTodoId}
        onSelectTodo={handleSelectTodo}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  )
}
