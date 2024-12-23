import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SuppliersTable } from "../SuppliersTable";
import { ThemeProvider, createTheme } from "@mui/material/styles";

test("renders SuppliersTable with correct data", () => {
  const theme = createTheme();
  render(
    <ThemeProvider theme={theme}>
      <SuppliersTable />
    </ThemeProvider>
  );
});
