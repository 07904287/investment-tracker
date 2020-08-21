import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, feePaid, paymentMethod, amount) {
  return { id, date, name, feePaid, paymentMethod, amount };
}

const rows = [
  createData(0, '05 Jun, 2020', 'Vanguard S&P 500 ETF (VOO)', '$3.65', 'VISA ⠀•••• 3719', '$1,312.44'),
  createData(1, '25 May, 2020', 'iShares Russell 2000 ETF (IWM)', '$2.97', 'VISA ⠀•••• 3719', '$1,866.99'),
  createData(2, '22 May, 2020', 'Hennessy Small Cap Financial Fund Investor Class (HSFNX)', '$16.28', 'MC ⠀•••• 1253', '$1,100.81'),
  createData(3, '16 May, 2020', 'FTSE 100 (^FTSE)', '$19.65', 'AMEX ⠀•••• 2165', '$654.39'),
  createData(4, '14 May, 2020', 'CMC Crypto 200 Index by Solacti (^CMC200)', '$4.76', 'VISA ⠀•••• 3719', '$1,212.79'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Investments() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Investments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Instrument</TableCell>
            <TableCell>Fee Paid</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Amount Invested</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.feePaid}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more investments
        </Link>
      </div>
    </React.Fragment>
  );
}