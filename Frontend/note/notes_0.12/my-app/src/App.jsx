import { useState } from "react";
import Tarefa from "./components/Tarefa";

function App() {

  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estuda React" },
    { id: 2, texto: "Fazer compras" },
    { id: 3, texto: "Responde e-mails" }
  ]);

  const [novaTarefa, setNovaTarefa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(novaTarefa.trim() === '') return;

    const novoId = tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1;

    const nova = {
      id: novoId,
      texto: novaTarefa.trim()
    };

    setTarefas([...tarefas, nova]);
    setNovaTarefa('');
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
          <Tarefa key={tarefa.id} texto={tarefa.texto} />
        ))}
      </ul>
    </main>
  );
}

export default App;
