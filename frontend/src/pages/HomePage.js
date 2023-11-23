import React from 'react';
import '../index.css'
import {
//  AppBar,
//  Toolbar,
//  IconButton,
 Typography,
//  InputBase,
//  Paper,
 Grid,
 Button,
} from '@material-ui/core';
import Link from '@mui/material/Link';
// import { Search, Home, Face, ArrowForward } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#2e2e2e',
  },
  searchBar: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      {/* <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Home />
          </IconButton>
          <div className={classes.searchBar}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button variant="contained" color="primary" className={classes.button}>
            Profile
          </Button>
          <IconButton edge="end" color="inherit">
            <Home />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <Face />
          </IconButton>
        </Toolbar>
      </AppBar> */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Button variant="contained" color="primary" className={classes.button}>
            Main Collection
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained" color="primary" className={classes.button}>
            View All Products
          </Button>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <Typography variant="h4" component="h4">
              Welcome to TechBazaar!
            </Typography>
            <Typography variant="body1" component="p">
            TechBazar is your one-stop destination for all your IT needs. We specialize in offering a wide range of top-notch IT equipment, inclu...
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
            <Link href='/AboutUs' sx={{color:'white'}}>
            About Us!
            </Link>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <Typography variant="h4" component="h4">
              Products..
            </Typography>
            <Typography variant="body1" component="p">
            showing products..
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
              See All Products
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <Typography variant="h4" component="h4">
              Need Some Helpe!
            </Typography>
            <Typography variant="body1" component="p">
            If you have any questions or concerns, please call us on 01481 238565 between 09.00 and 16.30. For general enquiries, you can also email health@msg.gg.
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
              About Us
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
