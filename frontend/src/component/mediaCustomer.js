import * as React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';
import { Typography, Grid, Button, Input, InputLabel, FormControl } from "@mui/material";

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

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyClick = async () => {
    try {
      // Send a POST request to addToCart endpoint
      await axios.post('http://localhost:7000/cart/addToCart', {
        imageUrl,
        name,
        price,
        quantity,
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
          <FormControl>
            <InputLabel htmlFor="quantity">Quantity</InputLabel>
            <Input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)) || 1)}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton onClick={handleDecrement} size="small" edge="end">
                    <RemoveIcon />
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleIncrement} size="small" edge="end">
                    <AddIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
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
