import { useEffect, useState } from "react";
import Tarefa from "./components/Tarefa";

const API_URL = 'https://crudcrud.com/api/8bfd91e8118b4d5995bb46a34f372eb8/tarefas';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(dados => setTarefas(dados))
      .catch(erro => console.error("Erro ao buscar tarefas:", erro));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(novaTarefa.trim() === '') return;

    const nova = {
      texto: novaTarefa.trim()
    };

    // Envia a nova tarefa para a API
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nova)
    })
    .then(res => res.json())
    .then(tarefaCriada => {
      setTarefas([...tarefas, tarefaCriada]);
      setNovaTarefa('');
    })
    .catch(erro => console.error('Erro ao adicionar tarefa:', erro));
  }

  return (
    <main className="container">
      <h1>To-do List App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tarefas.map(tarefa => (
          <Tarefa key={tarefa._id} texto={tarefa.texto} />
        ))}
      </ul>
    </main>
  );
}

export default App;
