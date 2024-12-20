import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import React, { useState } from "react";
import { AddSupplierDialog } from "../Dialog/AddSupplierDialog";

export function TableToolbar() {
  const theme = useTheme();
  const isPhoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
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
      flexDirection={isPhoneSize ? "column" : "row"}
      mt={10}
      p={2}
      maxWidth="80vw"
      justifyContent={"space-between"}
    >
      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="h4" id="tableTitle" component="div">
          Suppliers
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <AddSupplierDialog />
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
