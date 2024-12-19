import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";

export function TableToolbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickOpen = () => {
    alert("Add Supplier button clicked");
  };
  const handleClickSortButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseSortButton = () => {
    setAnchorEl(null);
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
        <IconButton
          aria-label="edit"
          size="small"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickSortButton}
        >
          <SortRoundedIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseSortButton}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleCloseSortButton}>Name</MenuItem>
          <MenuItem onClick={handleCloseSortButton}>Date Added</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}
