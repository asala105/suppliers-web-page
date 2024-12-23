import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AddSupplierForm } from "../AddSupplierForm";

test("renders AddSupplierForm with correct fields", () => {
  render(<AddSupplierForm />);

  expect(screen.getByLabelText("Name")).toBeInTheDocument();
  expect(screen.getByLabelText("VAT Number")).toBeInTheDocument();
});
