import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCookies } from 'react-cookie';

export default function CartItemsTable() {

  const [cookies, setCookie, removeCookie] = useCookies();

  Object.keys(cookies).map(function(key, index) {
    console.log(cookies[key].name);
    });


  


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ad</TableCell>
            <TableCell align="right">Kod</TableCell>
            <TableCell align="right">Qiymet</TableCell>
            <TableCell align="right">Say</TableCell>
            <TableCell align="right">Cem</TableCell>
            <TableCell align="right">+/-</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Object.keys(cookies).map(function(key, index) {
          return (
            <TableRow
              key={cookies[key].name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {cookies[key].name}
              </TableCell>
              <TableCell align="right">{cookies[key].article}</TableCell>
              <TableCell align="right">{cookies[key].price}</TableCell>
              <TableCell align="right">{cookies[key].qty}</TableCell>
              <TableCell align="right">{cookies[key].qty*cookies[key].price}</TableCell>
            </TableRow>
          )
          
    })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
