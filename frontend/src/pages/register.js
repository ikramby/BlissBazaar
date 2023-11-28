import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    purpose: "", // Added purpose property to the user state
  });
  const [manufacturer, setManufacturer] = useState(""); // Set default value

  const userType = [{ label: "Buying" }, { label: "Selling" }];

  const handleChange = (event, newValue) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
      purpose: newValue ? newValue.label : "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:7000/tech/register", {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        confirmPassword :user.confirmPassword,
        purpose: user.purpose,
        manufacturer: user.manufacturer,

      });

      if (response.status === 200) {
        console.log("Registration successful", response.data);
        alert("Registration successfully!");
        navigate("/login");
        // Redirect or show success message
      } else {
        console.error("Registration error:", response.data);
        // Handle registration error here
      }
    } catch (error) {
      console.error("Registration error:", error.message);
      // Handle registration error here
    }
  };
  const onChangeManufacturer = (event) => {
    setManufacturer(event.target.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundColor: "white",
          borderRadius: "15px",
          opacity: "0.9",
          marginBottom: "10vh",
          height: "92vh",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
              <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={userType}
              fullWidth
              value={
                user.purpose
                  ? userType.find((option) => option.label === user.purpose)
                  : null
              }
              onChange={handleChange}
              renderInput={(params) => (
                <TextField {...params} label="Purpose" />
              )}
            />
              </Grid>

              </Grid>
              {user.purpose === "Selling" && (
            <Grid item xs={12}>
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
          )}

             
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
