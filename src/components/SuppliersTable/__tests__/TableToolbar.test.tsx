import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableToolbar } from "../TableToolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

test("renders TableToolbar and handles button click", () => {
  const theme = createTheme();
  render(
    <ThemeProvider theme={theme}>
      <TableToolbar />
    </ThemeProvider>
  );

  expect(screen.getByText("Suppliers")).toBeInTheDocument();

  const addButton = screen.getByText("Add Supplier");
  fireEvent.click(addButton);
  expect(screen.getByText("Add Supplier button clicked")).toBeInTheDocument();
});
