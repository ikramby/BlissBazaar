// Import necessary components and libraries
import React from 'react';
import {
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// FAQ data
const faqData = [
  {
    question: 'What is TechBazaar?',
    answer: 'TechBazaar is an online marketplace for buying and selling tech products.',
  },
  {
    question: 'How can I create an account?',
    answer: 'You can create an account by clicking on the "Sign Up" button and providing the required information.',
  },
  {
    question: 'Is it free to list products on TechBazaar?',
    answer: 'Yes, listing products on TechBazaar is currently free of charge.',
  },
  // Add more FAQ entries as needed
];

const FAQPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Frequently Asked Questions (FAQ)
      </Typography>

      {faqData.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`faq-${index}-content`}
            id={`faq-${index}-header`}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQPage;
