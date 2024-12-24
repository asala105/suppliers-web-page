import { TablePagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import React, { useCallback, useEffect, useState } from "react";
import { getSuppliers } from "../../API/getSuppliers";
import { SupplierTableRow } from "./SupplierTableRow";
import { TableHeader } from "./TableHeader";
import { TableToolbar } from "./TableToolbar";
import { Supplier } from "../../common/type";

export function SuppliersTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  const handleChangePage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    },
    []
  );

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    },
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const suppliers = await getSuppliers();
      setSuppliers(suppliers);
    };
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <TableToolbar />
      <Table
        sx={{ minWidth: 650, maxWidth: "80vw", mt: 5 }}
        aria-label="simple table"
      >
        <TableHeader />
        <TableBody>
          {suppliers.map((row) => (
            <SupplierTableRow key={row.id} supplier={row} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={suppliers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
