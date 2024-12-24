import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, TableCell, TableRow } from "@mui/material";
import { deleteSupplier } from "../../API/deleteSupplier";
import { Supplier } from "../../common/type";
import { EditSupplierDialog } from "../Dialog/EditSupplierDialog";

interface TableRowProps {
  supplier: Supplier;
}

export function SupplierTableRow({ supplier }: TableRowProps) {
  const handleDelete = () => {
    const confirmed = confirm("Are you sure you want to verify this address?");
    if (confirmed) {
      deleteSupplier(supplier.id);
    }
  };
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
        <EditSupplierDialog supplier={supplier} />
        <IconButton aria-label="delete" size="small" onClick={handleDelete}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
