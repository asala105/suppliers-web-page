import { Box } from "@mui/material";
import { SuppliersTable } from "../../components";

export function SuppliersPage() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      textAlign={"center"}
      width="100vw"
      mt={10}
      pt={10}
    >
      <SuppliersTable />
    </Box>
  );
}
