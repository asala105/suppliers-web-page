import { Box, Button, Typography } from "@mui/material";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import AddIcon from "@mui/icons-material/Add";

export function TableToolbar() {
  const handleClickOpen = () => {
    alert("Add Supplier button clicked");
  };
  return (
    <Box
      display="flex"
      flexDirection="row"
      mt={10}
      p={5}
      maxWidth="80vw"
      justifyContent={"space-between"}
    >
      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="h4" id="tableTitle" component="div">
          Suppliers
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          size="medium"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add Supplier
        </Button>
        <SortRoundedIcon />
      </Box>
    </Box>
  );
}
