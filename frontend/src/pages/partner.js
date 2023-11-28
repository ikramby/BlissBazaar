// Import necessary components and libraries
import React from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const partnersData = [
  'Apple', 'Benco', 'Honor', 'Huawei', 'IKU', 'Infinix', 'IPLUS', 'Itel Mobile',
  'Lenovo', 'LOGICOM', 'Nokia', 'Oppo', 'Hp', 'Realme', 'Samsung', 'SCHNEIDER',
  'Toshiba', 'Sagem',
];

const PartnerWithUsPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, color: "white" }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Partner With Us
      </Typography>

      <Typography variant="body1" align="justify" sx={{ mb: 4 }}>
        TechBazaar is proud to partner with leading tech brands, including {partnersData.slice(0, -1).join(', ')} and {partnersData.slice(-1)[0]}.
        Our valued partnerships allow us to offer a diverse and high-quality selection of products to our users.
      </Typography>

      <Typography variant="body1" align="justify" sx={{ mt: 4 }}>
        If your tech brand is interested in becoming a partner with TechBazaar, please contact us at techbazaar@gmail.com.
      </Typography>
    </Container>
  );
};

export default PartnerWithUsPage;
