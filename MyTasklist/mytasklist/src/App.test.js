import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("adds tasks and deletes only the selected task", () => {
  render(<App />);
  const input = screen.getByLabelText("New task");

  // Duplicate names should still be separate tasks.
  for (let count = 0; count < 2; count++) {
    fireEvent.change(input, { target: { value: "  Learn React  " } });
    fireEvent.click(screen.getByRole("button", { name: "Add" }));
  }

  expect(input.value).toBe("");
  expect(screen.getAllByText("Learn React")).toHaveLength(2);
  fireEvent.click(screen.getAllByRole("button", { name: "Delete" })[0]);
  expect(screen.getAllByText("Learn React")).toHaveLength(1);
  fireEvent.click(screen.getByRole("button", { name: "Delete" }));
  expect(screen.queryByRole("listitem")).toBeNull();
});

test("ignores blank tasks", () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText("New task"), { target: { value: "   " } });
  fireEvent.click(screen.getByRole("button", { name: "Add" }));
  expect(screen.queryByRole("listitem")).toBeNull();
});