import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Logo from "../../assets/logo-white.png";
import { Box } from "@mui/material";

export function NavBar() {
  return (
    <Box
      m={0}
      p={2}
      sx={{
        flexDirection: "row",
        display: "flex",
        position: "absolute",
        top: 0,
        justifyContent: "space-between",
      }}
      alignItems="center"
      justifyContent="space-between"
      height="15vh"
      width="100vw"
      bgcolor="rgb(27, 117, 183)"
    >
      <img src={Logo} height="80vh" alt="logo" />
      <Box mr={5} alignItems="center">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            sx={{
              textDecoration: "none",
              "&:hover": {
                color: "#DCDCDE",
              },
            }}
            color="#fff"
            href="/"
          >
            Home
          </Link>
          <Link
            sx={{
              textDecoration: "none",
              "&:hover": {
                color: "#DCDCDE",
              },
            }}
            color="#fff"
            href="/suppliers"
          >
            Suppliers
          </Link>
        </Breadcrumbs>
      </Box>
    </Box>
  );
}
