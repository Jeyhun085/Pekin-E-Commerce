import Fab from "@mui/material/Fab";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Fragment } from "react";
import { useCookies } from 'react-cookie';
import Link from "@mui/material/Link";

export default function CartButton() {



  const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
  };

  const [cookies, setCookie, removeCookie] = useCookies();

  return (
    <Fragment>
      <Fab component={Link} href="/cart" sx={fabStyle}>
        <Badge badgeContent={Object.keys(cookies).length} color="primary">
          <ShoppingCartIcon  />
        </Badge>
      </Fab>
    </Fragment>
  );
}
