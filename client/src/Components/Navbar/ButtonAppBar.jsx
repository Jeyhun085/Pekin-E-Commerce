import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TemporaryDrawer from "./TemporaryDrawer";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import { Routes, Route } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <MenuItem style={{ marginLeft: "auto" }} component={Link} href="/">
              Home
            </MenuItem>
            <MenuItem component={Link} href="/contact">
              Contact
            </MenuItem>
            <MenuItem component={Link} href="/about">
              About
            </MenuItem>
            <MenuItem component={Link} href="/catalog">
              Catalog
            </MenuItem>
            <Routes>
              <Route path="catalog" element={<TemporaryDrawer />} />
            </Routes>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </Fragment>
  );
}
