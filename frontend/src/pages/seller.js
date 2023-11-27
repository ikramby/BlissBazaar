import React from "react";
import { useState } from 'react';
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
  Card,
  CardContent,
  Avatar,
  Button,
  Container,
  Tab,
  Tabs,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Footer from "./Footer";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

// AppBar styles
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));



export default function Seller() {

  const [tabValue, setTabValue] = useState(0);
  const [manufacturer, setManufacturer] = useState("HP"); // Set default value
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address1: "",
  });
  const { userId } = useParams(); 
console.log("userid",userId )
  useEffect(() => {
    // Fetch user information when the component mounts
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/tech/getMyInformation/${userId}`);
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    if (tabValue === 0) {
      fetchUserInfo();
    }
  }, [tabValue, userId]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const onChangeManufacturer = (event) => {
    setManufacturer(event.target.value);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            TechBazaar
          </Typography>
          <Search>
          
          
          
          </Search>
        
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="profile and products tabs"
          >
            <Tab label="Profile" />
            <Tab label="My Products" />
          </Tabs>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
          >
            <MoreIcon />
          </IconButton>
          <IconButton size="large" aria-label="wallet">
            <WalletIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          sx={{ mb: 4 }}
        >
          <Tab label="Profile" />
          <Tab label="My Products" />
        </Tabs>

        {tabValue === 0 && (
           <Box>
           <React.Fragment>
      <Typography variant="h6" gutterBottom>
       My Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    value={userInfo.firstName}
                    onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    value={userInfo.lastName}
                    onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    value={userInfo.password}
                    onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                  />
                </Grid>

             {/* 
             <Grid item xs={12}>
                  <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                    value={userInfo.address1}
                    onChange={(e) => setUserInfo({ ...userInfo, address1: e.target.value })}
                  />
                </Grid>
             */}   
      
      
        <Grid item xs={12} sm={6}>
                  <Select
                    labelId="manufacturer-label"
                    id="manufacturer"
                    value={manufacturer}
                    onChange={onChangeManufacturer}
                    label="Manufacturer"
                    fullWidth
                    autoComplete="shipping country"
                    variant="standard"
                  >
                     <MenuItem value="Hp">Hp</MenuItem>
              <MenuItem value="Toshiba">Toshiba</MenuItem>
              <MenuItem value="Samsung">Samsung</MenuItem>
              <MenuItem value="Apple">Apple</MenuItem>
              <MenuItem value="Benco">Benco</MenuItem>
              <MenuItem value="Honor">Honor</MenuItem>
              <MenuItem value="Huawei">Huawei</MenuItem>
              <MenuItem value="IKU">IKU</MenuItem>
              <MenuItem value="Infinix">Infinix</MenuItem>
              <MenuItem value="IPLUS">IPLUS</MenuItem>
              <MenuItem value="Itel mobile">Itel mobile</MenuItem>
              <MenuItem value="Lenovo">Lenovo</MenuItem>
              <MenuItem value="LOGICOM">LOGICOM</MenuItem>
              <MenuItem value="Nokia">Nokia</MenuItem>
              <MenuItem value="Oppo">Oppo</MenuItem>
              <MenuItem value="realme">realme</MenuItem>
              <MenuItem value="SCHNEIDER">SCHNEIDER</MenuItem>
              <MenuItem value="Sagem">Sagem</MenuItem>
                  </Select>
                </Grid>
        <Grid item xs={12}>
          {/* 
            <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
          */}
        
        </Grid>
      </Grid>
    </React.Fragment>
    </Box>
        )}
        {tabValue === 1 && (
          <Box>
          
          </Box>
        )}
      </Container>

      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Footer />
      </Container>
    </>
  );
}