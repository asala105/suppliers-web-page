import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export function NavBar() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/suppliers">
        Suppliers
      </Link>
    </Breadcrumbs>
  );
}
