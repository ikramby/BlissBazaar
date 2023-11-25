import React from 'react';
import { Container, Typography } from '@mui/material';

const TermOfUse = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, color: 'white' }}>
      <Typography variant="h4" gutterBottom>
        Terms of Use
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to TechBazaar! By using our website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not use our website.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Use of the Website
      </Typography>
      <Typography variant="body1" paragraph>
        The content of the pages of this website is for your general information and use only. It is subject to change without notice.
      </Typography>
      <Typography variant="body1" paragraph>
        Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph>
        This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Limitations of Liability
      </Typography>
      <Typography variant="body1" paragraph>
        We shall not be liable for any loss or damage arising from the use of, or reliance on, the information and materials provided on this website.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Changes to Terms of Use
      </Typography>
      <Typography variant="body1" paragraph>
        TechBazaar may revise these terms of use for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms and Conditions of Use.
      </Typography>
    </Container>
  );
};

export default TermOfUse;
