import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Fees() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Lifetime Fees</Title>
      <Typography component="p" variant="h4">
        $47.31
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as of 26 June, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View breakdown
        </Link>
      </div>
    </React.Fragment>
  );
}