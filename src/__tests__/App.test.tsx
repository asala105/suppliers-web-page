import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import "@testing-library/jest-dom";

test("renders HomePage component for the root route", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Welcome")).toBeInTheDocument();
});

test("renders SuppliersPage component for the /suppliers route", () => {
  render(
    <MemoryRouter initialEntries={["/suppliers"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Suppliers")).toBeInTheDocument();
});
