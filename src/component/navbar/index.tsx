import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link2 from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  }
 
}));




export default function Navbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Client side
          </Typography>
          <nav>
            <Link2 variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link2>
            <Link2 variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link2>
            <Link to="/signup/">
            <Link2 variant="button" color="textPrimary" href="#" className={classes.link}>
              Sign up
            </Link2>
            </Link>
          </nav>
          <Link to="/signin/">
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Sign in
          </Button>
          </Link>
        </Toolbar>
      </AppBar>

    </React.Fragment>
  );
}