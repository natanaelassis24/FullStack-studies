import React from "react";
import { renderHook } from "@testing-library/react";
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas";

describe("useContadorDeTarefas Hook", () => {
  it("retorna o número correto de tarefas", () => {
    const { result, rerender } = renderHook(({ tarefas }) => useContadorDeTarefas(tarefas), {
      initialProps: { tarefas: ["tarefa1", "tarefa2"] },
    });

    expect(result.current).toBe(2);

    rerender({ tarefas: ["tarefa1", "tarefa2", "tarefa3"] });
    expect(result.current).toBe(3);
  });

  it("retorna zero para lista vazia", () => {
    const { result } = renderHook(() => useContadorDeTarefas([]));
    expect(result.current).toBe(0);
  });
});
