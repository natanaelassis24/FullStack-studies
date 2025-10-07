import { useMemo } from "react";

export default function useContadorDeTarefas(tarefas: string[]) {
  const contador = useMemo(() => tarefas.length, [tarefas]);
  return contador;
}
