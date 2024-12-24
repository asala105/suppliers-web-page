import { enqueueSnackbar } from "notistack";

export function handleError(error: any) {
  console.error(error);
  enqueueSnackbar("An error occurred. Please try again later.", {
    variant: "error",
  });
}
