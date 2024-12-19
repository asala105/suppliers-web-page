import { Box } from "@mui/material";
import { SuppliersTable } from "../../components";

export function SuppliersPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      width="100vw"
      mt={10}
    >
      <Box width={"80vw"}>
        <SuppliersTable />
      </Box>
    </Box>
  );
}
