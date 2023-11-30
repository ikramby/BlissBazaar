import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import './navbar.css';
import axios from 'axios';
import AllProduct from '../pages/allProduct';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [productSearch, setProductSearch] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const { auth, setAuth, isAdmin } = useContext(AuthContext);
  const [input, setInput] = useState("")

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

    // Remove the token from local storage and mark the user as not authenticated
    localStorage.removeItem('token');
    setAuth(false);

  };


  // List of categories
  const categories = [
    'computers',
    'phones',
    'electronics',
    'laptops',
    'tablets',
    'smartphones',
    'wearables',
    'accessories',
  ];



  // const handleChange = (e) => {
  //   setInput(e.target.value);
  //};

  const handleSearch = async () => {
    try {

      // const response = await axios.get(`http://localhost:7000/products/search/${input}`);
      const searchUrl = `http://localhost:7000/products/search/${input}`;
      

      const response = await axios.get(searchUrl);

      console.log("input", input);
      setProductSearch(response.data);
      
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Function to toggle the visibility of categories
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" color="transparent">

        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleCategories}

          >

            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href='/' sx={{ color: 'white' }}>  TechBazar</Link>

          </Typography>


          {!auth &&
            (<>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                <Link href='/login' sx={{ color: 'white' }}>
                  LOGIN
                </Link>
              </Typography>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                <Link href='/register' sx={{ color: 'white' }}>
                  REGESTER
                </Link>
              </Typography>


            </>)}


          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href='/AboutUs' sx={{ color: 'white' }}>
              About Us
            </Link>

          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href='/allproduct' sx={{ color: 'white' }}>
              All products
            </Link>
          </Typography>


          {(auth && isAdmin()) && (
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link href='/dashboard' sx={{ color: 'white' }}>
                Dashboard
              </Link>
            </Typography>
          )}


          <Link href="/basket" style={{ textDecoration: 'none', color: 'inherit' }}>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Link>


          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Log out</MenuItem>

              </Menu>
            </div>
          )}

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{ backgroundColor: 'white' }}
              onChange={(e) => {
                setInput(e.target.value);
                handleSearch(); // Call handleSearch on input change
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>

      {showCategories && (
        <ul className="categories-list">
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}

      {/* Display search results */}
      {productSearch && productSearch.length > 0 && (
        // <Box sx={{ p: 2, backgroundColor: 'lightgray' }}>
        //   <Typography variant="h6" component="div" sx={{ color: 'black' }}>
        //     Search Results:
        //   </Typography>
        //   <ul>
        //     {product.map((result) => (
        //       <li key={result.id}>{result.name}</li>
        //     ))}
        //   </ul>
        // </Box>
        <AllProduct productSearch={productSearch}/>
      )}
    </Box>
  );
}
