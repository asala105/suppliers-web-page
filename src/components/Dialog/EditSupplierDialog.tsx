import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import { AddSupplierForm } from "../Form";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { EditSupplierInput, Supplier } from "../../common/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconButton } from "@mui/material";
import { updateSupplier } from "../../API";

const schema = yup.object().shape({
  id: yup.string().required("ID is required"),
  name: yup.string().required("Name is required"),
  vatNumber: yup
    .string()
    .length(8, "VAT Number must be 8 characters")
    .required("VAT Number is required"),
});

interface EditSupplierDialogProps {
  supplier: Supplier;
}

export function EditSupplierDialog({ supplier }: EditSupplierDialogProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<EditSupplierInput>({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: supplier as EditSupplierInput,
  });

  const onSubmit = async (data: EditSupplierInput) => {
    console.log(data);
    const response = await updateSupplier(data);
    handleClose();
  };
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  return (
    <React.Fragment>
      <IconButton aria-label="edit" size="small" onClick={handleClickOpen}>
        <EditIcon fontSize="inherit" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Supplier</DialogTitle>
        <DialogContent>
          <AddSupplierForm register={register} errors={errors} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
