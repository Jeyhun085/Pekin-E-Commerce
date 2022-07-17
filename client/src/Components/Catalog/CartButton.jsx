import Fab from "@mui/material/Fab";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Fragment } from "react";
import { useCookies } from "react-cookie";
import Link from "@mui/material/Link";
import { borderRadius } from "@mui/system";

export default function CartButton() {
  const [cookies, setCookie, removeCookie] = useCookies();

  return (
    <Fragment>
      <Fab
        component={Link}
        href="/cart"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          height: 100,
          width: 100
        }}
      >
        <Badge badgeContent={Object.keys(cookies).length} color="primary">
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </Fab>
    </Fragment>
  );
}
