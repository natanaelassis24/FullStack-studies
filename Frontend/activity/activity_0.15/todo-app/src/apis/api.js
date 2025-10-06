const API_URL = 'https://crudcrud.com/api/22441f96386f432fa3d2ce4be10aafae/todos'

export async function getTodos() {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error('Erro ao buscar tarefas')
  const data = await res.json()
  return data.map(todo => ({
    ...todo,
    id: todo._id,
  }))
}

export async function addTodo(todo) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  })
  if (!res.ok) throw new Error('Erro ao adicionar tarefa')
  return res.json()
}

export async function updateTodo(id, updatedTodo) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTodo),
  })
  if (!res.ok) throw new Error('Erro ao atualizar tarefa')
  return true
}

export async function deleteTodo(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('Erro ao deletar tarefa')
  return true
}
