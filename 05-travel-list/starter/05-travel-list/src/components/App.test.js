import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("shares item changes with the packing list and stats through context", () => {
  const confirm = jest.spyOn(window, "confirm");
  try {
    render(<App />);
    expect(screen.getByText("Start adding items")).toBeTruthy();

    fireEvent.change(screen.getByPlaceholderText("item..."), {
      target: { value: "Passport" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Add" }));
    expect(screen.getByText(/You have 1 items/).textContent).toContain("(0%)");

    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox").checked).toBe(true);
    expect(screen.getByText("You got everything! Ready to go")).toBeTruthy();

    fireEvent.click(within(screen.getByRole("listitem")).getByRole("button"));
    expect(screen.getByText("Start adding items")).toBeTruthy();

    fireEvent.change(screen.getByPlaceholderText("item..."), {
      target: { value: "Socks" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Add" }));
    confirm.mockReturnValue(false);
    fireEvent.click(screen.getByRole("button", { name: "Clear List" }));
    expect(screen.getByText("Socks 1")).toBeTruthy();

    confirm.mockReturnValue(true);
    fireEvent.click(screen.getByRole("button", { name: "Clear List" }));
    expect(screen.getByText("Start adding items")).toBeTruthy();
    expect(screen.queryByRole("listitem")).toBeNull();
  } finally {
    confirm.mockRestore();
  }
});
