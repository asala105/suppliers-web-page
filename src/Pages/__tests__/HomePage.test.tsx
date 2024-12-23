import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomePage } from "../Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";

test("renders HomePage with correct heading", () => {
  const theme = createTheme();
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );

  expect(getByText("Welcome")).toBeInTheDocument();
});
