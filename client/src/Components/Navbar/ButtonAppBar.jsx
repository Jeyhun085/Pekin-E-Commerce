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
import Button from "@mui/material/Button";
import Footer from "../MainPages/Footer";

export default function ButtonAppBar() {
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <MenuItem style={{ marginLeft: "auto" }} component={Link} href="/">
              Əsas səhifə
            </MenuItem>
            <MenuItem component={Link} href="/contact">
              Əlaqə
            </MenuItem>
            <MenuItem component={Link} href="/service">
              Servis
            </MenuItem>
            <MenuItem component={Link} href="/about">
              Haqqımızda
            </MenuItem>
            <MenuItem component={Link} href="/catalog">
              Kataloq
            </MenuItem>
            <Routes>
              <Route path="catalog" element={<TemporaryDrawer />} />
            </Routes>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
      <Footer />
    </Fragment>
  );
}
