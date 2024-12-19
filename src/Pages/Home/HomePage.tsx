import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export function HomePage() {
  const theme = useTheme();
  const isPhoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      alignContent="center"
    >
      <Typography
        variant={isPhoneSize ? "h3" : "h1"}
        component="h2"
        textAlign="center"
      >
        Welcome
      </Typography>
    </Box>
  );
}
