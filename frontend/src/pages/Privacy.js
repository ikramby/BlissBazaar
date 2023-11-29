import React from "react";
import { Container, Typography } from "@mui/material";

import Footer from "./Footer";

const PrivacyPolicy = () => {
  console.log("hello");

  return (
    <Container maxWidth="md" sx={{ mt: 4, color: "white" }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        Your privacy is important to us. It is our policy to respect your
        privacy regarding any information we may collect from you across our
        website.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Information We Collect
      </Typography>
      <Typography variant="body1" paragraph>
        We only ask for personal information when we truly need it to provide a
        service to you. We collect it by fair and lawful means, with your
        knowledge and consent.
      </Typography>
      {/* Add more sections based on the information you collect */}
      <Typography variant="h5" gutterBottom>
        How We Use Your Information
      </Typography>
      <Typography variant="body1" paragraph>
        We use the information we collect in various ways, including to:
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
        </ul>
      </Typography>
      {/* Add more sections based on how you use collected information */}
      <Typography variant="h5" gutterBottom>
        Security
      </Typography>
      <Typography variant="body1" paragraph>
        We value your trust in providing us your personal information, thus we
        are striving to use commercially acceptable means of protecting it. But
        remember that no method of transmission over the internet or method of
        electronic storage is 100% secure and reliable, and we cannot guarantee
        its absolute security.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Changes to This Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        We may update our Privacy Policy from time to time. Thus, we advise you
        to review this page periodically for any changes. We will notify you of
        any changes by posting the new Privacy Policy on this page.
      </Typography>
      <Typography variant="body1" paragraph>
        This Privacy Policy was last updated on {"{date}"}.
      </Typography>

      {/* Footer */}

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

      {/* End footer */}
    </Container>
  );
};

export default PrivacyPolicy;
