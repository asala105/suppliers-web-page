import { IconButton, TableCell, TableRow } from "@mui/material";
import { Supplier } from "../../common/type";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface TableRowProps {
  supplier: Supplier;
}

export function SupplierTableRow({ supplier }: TableRowProps) {
  return (
    <TableRow
      key={supplier.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {supplier.name}
      </TableCell>
      <TableCell align="right">{supplier.vatNumber}</TableCell>
      <TableCell align="right">
        <IconButton aria-label="edit" size="small">
          <EditIcon fontSize="inherit"/>
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
