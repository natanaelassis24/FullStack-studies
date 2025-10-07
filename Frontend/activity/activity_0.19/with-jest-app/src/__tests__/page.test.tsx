import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Page Server Component", () => {
  it("renderiza a lista de tarefas e contador corretamente", () => {
    render(<Page />);
    expect(screen.getByRole("heading")).toHaveTextContent("Minhas Tarefas");
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBeGreaterThan(0);
  });
});
