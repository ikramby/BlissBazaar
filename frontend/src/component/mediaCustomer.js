import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography, Grid, Button, Paper, Link } from "@mui/material";

export default function MediaCustomer({ productId,name, description, imageUrl, price, category, color, manufacturer, onSale }) {
 console.log("id",productId)
  const shadowStyle = {
        boxShadow: '10px 10px 52px 0px rgba(0, 0, 0, 0.75)',
        WebkitBoxShadow: '10px 10px 52px 0px rgba(0, 0, 0, 0.75)',
        MozBoxShadow: '10px 10px 52px 0px rgba(0, 0, 0, 0.75)',
      };

      const navigate = useNavigate();
    
      

  return (
    <Grid  xs={12} sm={6} md={4}>
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="div"
        sx={{
          pt: "100%",
        }}
        image={imageUrl}
      />
      <CardContent sx={{ flexGrow: 1 }}>
      
          <>
            <Typography gutterBottom variant="h5" component="h2">
             {name}
            </Typography>
            <Typography>{description}</Typography>
            <Typography>{price} DT</Typography>
          </>
          <Button size="small" style={{ fontSize: '20px' }}>
          BUY
        </Button>
      </CardContent>
    </Card>
  </Grid>
);
}