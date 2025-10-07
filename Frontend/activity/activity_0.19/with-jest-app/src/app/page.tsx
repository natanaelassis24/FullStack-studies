"use client";

import React, { useState } from "react";
import NovaTarefa from "@/components/NovaTarefa";
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas";
import { tarefasIniciais } from "@/data/tarefas";

export default function Page() {
  const [tarefas, setTarefas] = useState<string[]>(tarefasIniciais);

  function adicionarTarefa(nova: string) {
    setTarefas((old) => [...old, nova]);
  }

  const contador = useContadorDeTarefas(tarefas);

  return (
    <main>
      <h1>Minhas Tarefas ({contador})</h1>
      <ul>
        {tarefas.map((tarefa, i) => (
          <li key={i}>{tarefa}</li>
        ))}
      </ul>
      <NovaTarefa onAdd={adicionarTarefa} />
    </main>
  );
}
