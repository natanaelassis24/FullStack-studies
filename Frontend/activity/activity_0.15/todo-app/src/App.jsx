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
  const [selectedTodoId, setSelectedTodoId] = useState(null) // Estado da tarefa selecionada

  useEffect(() => {
    async function fetchTodos() {
      try {
        const todosFromApi = await getTodos()
        const formatted = todosFromApi.map(({ _id, ...rest }) => ({
          id: _id,
          ...rest,
        }))
        setTodoList(formatted)
      } catch (err) {
        console.error(err)
      }
    }
    fetchTodos()
  }, [])

  async function handleAddTodo(todo) {
    try {
      const savedTodo = await addTodo(todo)
      setTodoList(old => [...old, { id: savedTodo._id, ...todo }])
    } catch (err) {
      console.error(err)
    }
  }

  async function handleUpdateTodo(id, updatedTodo) {
    try {
      await updateTodo(id, updatedTodo)
      setTodoList(old =>
        old.map(todo => (todo.id === id ? { id, ...updatedTodo } : todo))
      )
    } catch (err) {
      console.error(err)
    }
  }

  async function handleDeleteTodo(id) {
    try {
      await deleteTodo(id)
      setTodoList(old => old.filter(todo => todo.id !== id))
      // Limpa seleção se a tarefa deletada era a selecionada
      if (selectedTodoId === id) setSelectedTodoId(null)
    } catch (err) {
      console.error(err)
    }
  }

  // Função para selecionar uma tarefa (passar para TodoList)
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
        selectedTodoId={selectedTodoId}       // passa o id selecionado
        onSelectTodo={handleSelectTodo}       // passa a função para selecionar
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  )
}
