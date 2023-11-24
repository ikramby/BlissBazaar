import React from 'react';
import {
  Typography,
  Grid,
  Button,
  Paper,
  Link,
} from '@mui/material';
import { styled } from '@mui/system';

// Define the styled components
const StyledButton = styled(Button)({
  margin: theme => theme.spacing(1),
});

const StyledTypography = styled(Typography)({
  // Your styles for Typography component
});

const StyledLink = styled(Link)({
  // Your styles for Link component
  color: 'white',  // Example: Override color for Link
});

// Your functional component
const HomePage = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledButton variant="contained" color="primary">
            Main Collection
          </StyledButton>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledButton variant="contained" color="primary">
            View All Products
          </StyledButton>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <StyledTypography variant="h4" component="h4">
              Welcome to TechBazaar!
            </StyledTypography>
            <StyledTypography variant="body1" component="p">
              TechBazar is your one-stop destination for all your IT needs. We specialize in offering a wide range of top-notch IT equipment, inclu...
            </StyledTypography>
            <StyledButton variant="contained" color="primary">
              <StyledLink href='/AboutUs'>
                About Us!
              </StyledLink>
            </StyledButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <StyledTypography variant="h4" component="h4">
              Products..
            </StyledTypography>
            <StyledTypography variant="body1" component="p">
              showing products..
            </StyledTypography>
            <StyledButton variant="contained" color="primary">
              See All Products
            </StyledButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <StyledTypography variant="h4" component="h4">
              Need Some Help!
            </StyledTypography>
            <StyledTypography variant="body1" component="p">
              If you have any questions or concerns, please call us on 01481 238565 between 09.00 and 16.30. For general enquiries, you can also email health@msg.gg.
            </StyledTypography>
            <StyledButton variant="contained" color="primary">
              About Us
            </StyledButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
