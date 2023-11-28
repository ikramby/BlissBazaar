// Import necessary components and libraries
import React from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';

// Features data
const featuresData = [
    'Buy and sell a wide range of tech products.',
    'Create an account to manage your profile and product listings.',
    'Search for products based on categories, brands, and more.',
    'View detailed product information and images.',
    'List your tech products for free on TechBazaar.',
    'Connect with buyers and sellers through the platform.',
    'Secure and easy-to-use platform for online transactions.',
    'Manage your product inventory and track sales.',
    'Receive notifications about new messages, offers, and product inquiries.',
    'Customize your profile to showcase your tech expertise.',
    'Access a personalized dashboard for quick navigation.',
    'Participate in community forums and discussions.',
    'Get real-time updates on the latest tech trends and news.',
];

const FeaturesPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, color: "white" }}>

      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Features of TechBazaar
      </Typography>

      <List>
        {featuresData.map((feature, index) => (
          <ListItem key={index} sx={{ mb: 2 }}>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FeaturesPage;
