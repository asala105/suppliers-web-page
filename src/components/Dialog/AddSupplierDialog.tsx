import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { AddSupplierForm } from "../Form";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { AddSupplierInput } from "../../common/type";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  vatNumber: yup
    .string()
    .length(8, "VAT Number must be 8 characters")
    .required("VAT Number is required"),
});

export function AddSupplierDialog() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<AddSupplierInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  return (
    <React.Fragment>
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
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add Supplier</DialogTitle>
          <DialogContent>
            <AddSupplierForm register={register} errors={errors} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
