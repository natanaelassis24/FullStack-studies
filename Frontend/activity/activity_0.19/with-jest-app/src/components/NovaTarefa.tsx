"use client";

import React, { useState, FormEvent } from "react";

interface NovaTarefaProps {
  onAdd: (novaTarefa: string) => void;
}

export default function NovaTarefa({ onAdd }: NovaTarefaProps) {
  const [valor, setValor] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (valor.trim() === "") return;
    onAdd(valor.trim());
    setValor("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicionar nova tarefa"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        aria-label="input-nova-tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
