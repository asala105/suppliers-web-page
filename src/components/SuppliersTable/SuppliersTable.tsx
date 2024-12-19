import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { TableHeader } from "./TableHeader";
import { SupplierTableRow } from "./SupplierTableRow";
import { TablePagination } from "@mui/material";
import React, { useState, useCallback } from "react";
import { TableToolbar } from "./TableToolbar";

export function SuppliersTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  const SupliersMockupData = [
    { id: 1, name: "Fmxsgdz", vatNumber: "17304559" },
    { id: 2, name: "Fxgftpl", vatNumber: "11041001" },
    { id: 3, name: "Habwxwp", vatNumber: "47702457" },
    { id: 4, name: "Hmrximi", vatNumber: "51369881" },
    { id: 5, name: "Ngdusbu", vatNumber: "39895477" },
    { id: 6, name: "Qhgwdax", vatNumber: "93590711" },
    { id: 7, name: "Gurbqeg", vatNumber: "20888744" },
    { id: 8, name: "Npejabt", vatNumber: "39453849" },
    { id: 9, name: "Hpyuzan", vatNumber: "18528335" },
    { id: 10, name: "Plelsfx", vatNumber: "52163951" },
  ];

  return (
    <TableContainer component={Paper}>
      <TableToolbar />
      <Table
        sx={{ minWidth: 650, maxWidth: "80vw", mt: 5 }}
        aria-label="simple table"
      >
        <TableHeader />
        <TableBody>
          {SupliersMockupData.map((row) => (
            <SupplierTableRow key={row.id} supplier={row} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={SupliersMockupData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
