import { Box, Typography } from "@mui/material";

export function HomePage() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      display="flex"
      height="100vh"
      alignContent="center"
    >
      <Typography variant="h1" component="h2" textAlign="center">
        Welcome
      </Typography>
    </Box>
  );
}
