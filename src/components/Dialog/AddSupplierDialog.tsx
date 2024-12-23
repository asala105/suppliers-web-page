import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AddSupplierInput } from "../../common/type";
import { AddSupplierForm } from "../Form";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  vatNumber: yup
    .string()
    .length(8, "VAT Number must be 8 characters")
    .required("VAT Number is required"),
});

export function AddSupplierDialog() {
  const { handleSubmit, reset } = useForm<AddSupplierInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AddSupplierInput) => console.log(data);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  return (
    <Fragment>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add Supplier
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add Supplier</DialogTitle>
          <DialogContent>
            <AddSupplierForm />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Fragment>
  );
}
