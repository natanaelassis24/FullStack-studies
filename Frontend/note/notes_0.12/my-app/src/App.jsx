import Tarefa from "./components/Tarefa";

function App() {

  const tarefas = [
    { id: 1, texto: "Estuda React" },
    { id: 2, texto: "Fazer compras" },
    { id: 3, texto: "Responde e-mails" }
  ];

  return (
    <main>
      <h1>to-do list app</h1>
      <ul>

        {tarefas.map(tarefa => <Tarefa key={tarefa.id} texto={tarefa.texto} />)}

      </ul>
    </main>
  );
}

export default App;
