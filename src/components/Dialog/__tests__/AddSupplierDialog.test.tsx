import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AddSupplierDialog } from "../AddSupplierDialog";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const mockOnSubmit = jest.fn();
test("renders AddSupplierDialog and submits form", () => {
  const theme = createTheme();
  render(
    <ThemeProvider theme={theme}>
      <AddSupplierDialog />
    </ThemeProvider>
  );

  fireEvent.change(screen.getByLabelText("Name"), {
    target: { value: "Test Supplier" },
  });
  fireEvent.change(screen.getByLabelText("VAT Number"), {
    target: { value: "12345678" },
  });

  fireEvent.click(screen.getByText("Add Supplier"));

  expect(screen.getByText("Test Supplier")).toBeInTheDocument();
  expect(screen.getByText("12345678")).toBeInTheDocument();
  expect(mockOnSubmit).toHaveBeenCalledWith({
    name: "Test Supplier",
    vatNumber: "12345678",
  });
});
