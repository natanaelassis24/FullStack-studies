import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

describe("NovaTarefa Component", () => {
  it("renderiza input e botão", () => {
    render(<NovaTarefa onAdd={() => {}} />);
    expect(screen.getByPlaceholderText(/adicionar nova tarefa/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /adicionar/i })).toBeInTheDocument();
  });

  it("chama onAdd com valor correto e limpa input", () => {
    const onAddMock = jest.fn();
    render(<NovaTarefa onAdd={onAddMock} />);
    const input = screen.getByPlaceholderText(/adicionar nova tarefa/i);
    const button = screen.getByRole("button", { name: /adicionar/i });

    act(() => {
      fireEvent.change(input, { target: { value: "Nova tarefa" } });
    });
    act(() => {
      fireEvent.click(button);
    });

    expect(onAddMock).toHaveBeenCalledWith("Nova tarefa");
    expect(input).toHaveValue("");
  });

  it("não chama onAdd se input vazio", () => {
    const onAddMock = jest.fn();
    render(<NovaTarefa onAdd={onAddMock} />);
    const button = screen.getByRole("button", { name: /adicionar/i });

    act(() => {
      fireEvent.click(button);
    });

    expect(onAddMock).not.toHaveBeenCalled();
  });
});
