import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import { Typography, Grid, Button, Paper, Link } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
 maxWidth: 345,
 boxShadow: '10px 10px 52px 0px rgba(0, 0, 0, 0.75)',
 [theme.breakpoints.down('md')]: {
    maxWidth: 200,
 },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
 height: 200,
 [theme.breakpoints.down('md')]: {
    height: 150,
 },
}));

export default function MediaCustomer() {
 const location = useLocation();
 const { productId, name, description, imageUrl, price, category, color, manufacturer, onSale } = location.state || {};

 const navigate = useNavigate();

 const handleBuyClick = async () => {
    try {
      // Send a POST request to addToCart endpoint
      await axios.post('http://localhost:7000/cart/addToCart', {
        imageUrl,
        name,
        price,
        quantity: 1, // You may adjust the quantity as needed
      });

      console.log('Product added to cart successfully');
    } catch (error) {
      console.error('Error adding product to cart', error);
    }
 };

 if (!productId) {
    // Handle the case where productId is not available (optional)
    return <div>Product not found.</div>;
 }

 return (
    <div style={{ padding: '16px' }}>
      <StyledCard>
        <StyledCardMedia component="img" image={imageUrl} alt={name} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
        <CardContent>
          <>
            <Typography gutterBottom variant="h5" component="div">
             {name}
            </Typography>
            <Typography>{description}</Typography>
            <Typography>{price} DT</Typography>
          </>
          <CardActions>
            <Button size="small" style={{ fontSize: '20px' }} onClick={handleBuyClick}>
             BUY
            </Button>
          </CardActions>
        </CardContent>
      </StyledCard>
    </div>
 );
}