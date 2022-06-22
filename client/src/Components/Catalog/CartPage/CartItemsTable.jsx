import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCookies } from "react-cookie";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function CartItemsTable() {
  const [cookies, setCookie, removeCookie] = useCookies();

  function IncreaseQTY(article) {
    var newCookie = cookies[article];
    newCookie.qty++;
    setCookie(article, newCookie, {
      expires: new Date(Date.now() + 604800000),
    });

  }

  function DecreaseQTY(article) {
    var newCookie = cookies[article];
    newCookie.qty--;
    if (newCookie.qty === 0) {
      removeCookie(article);
    } else {
      setCookie(article, newCookie, {
        expires: new Date(Date.now() + 604800000),
      });
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell sortDirection="asc" align="center">Code</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">QTY</TableCell>
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(cookies).map(function (key, index) {
            return (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {cookies[key].name}
                </TableCell>
                <TableCell  align="center">{cookies[key].article}</TableCell>
                <TableCell align="center">{cookies[key].price}</TableCell>

                <TableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button
                      onClick={() => {
                        DecreaseQTY(cookies[key].article);
                      }}
                    >
                      -
                    </Button>
                    <Button variant="text" disableRipple={true}>
                      {cookies[key].qty}
                    </Button>
                    <Button
                      onClick={() => {
                        IncreaseQTY(cookies[key].article);
                      }}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </TableCell>
                <TableCell align="center">
                  {cookies[key].qty * cookies[key].price}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
