import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Button,
  Grid,
} from '@material-ui/core';
import { Search, Home, Face, ArrowForward } from '@material-ui/icons';
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
      <AppBar position="static" className={classes.navbar}>
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
      </AppBar>
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
              Here at TechBazaar Emporium, we provide you with a wide range of high-quality electronics, from phones and laptops to TVs and smart home devices.
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