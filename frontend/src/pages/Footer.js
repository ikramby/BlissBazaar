import React, { memo } from "react";
import {
  Container,
  Typography,
  Link,
  Grid,
  IconButton,
  Box,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { styled } from "@mui/material/styles";

// Copyright function
function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="/">
        TechBazaar
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// Styled Footer Box
const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: theme.spacing(6, 2),
  marginTop: theme.spacing(8),
  width: "100vw",
  boxSizing: "border-box",
  marginLeft: "-50vw",
  position: "relative",
  left: "50%",
}));

// Footer Content (Memoized)
const FooterContent = memo(() => (
  <Grid container spacing={4}>
    {/* About Section */}
    <Grid item xs={12} sm={4}>
      <Typography variant="h6" gutterBottom>
        <Link href="/" color="inherit">
          TechBazaar
        </Link>
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sclerisque
        donec non pellentesque ut.
      </Typography>
    </Grid>

    {/* Additional Links */}
    <Grid item xs={12} sm={2}>
      <Typography variant="h6" gutterBottom>
        About
      </Typography>
      <Link href="/AboutUs" color="inherit">
        About Us
      </Link>
      <br />
      <Link href="#" color="inherit">
        Product
      </Link>
      <br />
      <Link href="/TermOfUse" color="inherit">
        Terms & Condition
      </Link>
      <br />
      <Link href="#" color="inherit">
        FAQ
      </Link>
    </Grid>

    {/* Company Section */}
    <Grid item xs={12} sm={2}>
      <Typography variant="h6" gutterBottom>
        Company
      </Typography>
      <Link href="#" color="inherit">
        Our Team
      </Link>
      <br />
      <Link href="#" color="inherit">
        Partner With Us
      </Link>
      <br />
      <Link href="/PrivacyPolicy" color="inherit">
        Privacy & Policy
      </Link>
      <br />
      <Link href="#" color="inherit">
        Features
      </Link>
    </Grid>

    {/* Contact Section */}
    <Grid item xs={12} sm={4}>
      <Typography variant="h6" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body2">+216 123456789</Typography>
      <Typography variant="body2">anis@polyglot-digital.com</Typography>
      <IconButton color="inherit">
        <FacebookIcon />
      </IconButton>
      <IconButton color="inherit">
        <TwitterIcon />
      </IconButton>
      <IconButton color="inherit">
        <InstagramIcon />
      </IconButton>
    </Grid>
  </Grid>
));

// Footer Component
const Footer = () => {
  return (
    <>
      <FooterBox>
        <Container maxWidth={false} disableGutters>
          <FooterContent />
        </Container>
      </FooterBox>

      {/* Additional Footer Section */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#333",
          padding: "20px 0",
          width: "100vw",
          boxSizing: "border-box",
          marginLeft: "-50vw",
          position: "relative",
          left: "50%",
        }}
      >
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          TechBazaar. All rights reserved.
        </Typography>
        <Copyright />
      </Box>
    </>
  );
};

export default Footer;
