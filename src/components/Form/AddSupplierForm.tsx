import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";
import { AddSupplierInput, EditSupplierInput, Supplier } from "../../common/type";

export function AddSupplierForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Supplier | AddSupplierInput>();
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2} p={2}>
      <TextField
        {...register("name")}
        label="Name"
        variant="outlined"
        fullWidth
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("vatNumber")}
        label="VAT Number"
        variant="outlined"
        fullWidth
        error={!!errors.vatNumber}
        helperText={errors.vatNumber?.message}
      />
    </Box>
  );
}
