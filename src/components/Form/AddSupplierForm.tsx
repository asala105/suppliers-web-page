import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { EditSupplierInput, AddSupplierInput } from "../../common/type";

interface AddSupplierFormProps {
  register: UseFormRegister<EditSupplierInput | AddSupplierInput>;
  errors: FieldErrors<EditSupplierInput | AddSupplierInput>;
}

export function AddSupplierForm({ register, errors }: AddSupplierFormProps) {
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
