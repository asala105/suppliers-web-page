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
import { addSupplier } from "../../API/addSupplier";
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
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<AddSupplierInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: AddSupplierInput) => {
    console.log(data);
    const response = await addSupplier(data);

    console.log(data);
  };

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
        <DialogTitle>Add Supplier</DialogTitle>
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
    </Fragment>
  );
}
