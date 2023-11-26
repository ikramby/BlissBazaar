import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function MediaCard({ productId,name, description, imageUrl, price, category, color, manufacturer, onSale }) {
 console.log("id",productId)
  const shadowStyle = {
        boxShadow: '10px 10px 52px 0px rgba(0, 0, 0, 0.75)',
        WebkitBoxShadow: '10px 10px 52px 0px rgba(0, 0, 0, 0.75)',
        MozBoxShadow: '10px 10px 52px 0px rgba(0, 0, 0, 0.75)',
      };

      const navigate = useNavigate();
      const handleEditClick = () => {
        navigate(`/EditProduct/${productId}`, {
          state: {
            productId,
            name,
            description,
            imageUrl,
            price,
            category,
            color,
            manufacturer,
            onSale,
          },
        });
      };
      const handleDeleteClick = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this product?');
      
        if (confirmDelete) {
          try {
            await axios.delete(`http://localhost:7000/products/${productId}`);
            window.location.reload();
            console.log('Product deleted successfully');
          } catch (error) {
            console.error('Error deleting product', error);
          }
        }
      };
      

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'transparent', border:'1px solid black' , 
    borderRadius:'10px',margin:'10px', backgroundColor:'hsla(0, 0%, 100%, 0.1)',
    
     }} style={shadowStyle}>
            <CardMedia sx={{ height: 240 }} image={imageUrl} title={name} />

     {/*<CardMedia
        sx={{ height: 240 }}
        image="https://cdn.thewirecutter.com/wp-content/media/2023/06/laptops-2048px-5607.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
        title="green iguana"
      />
     */} 
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="white">
        {name}
        </Typography>
        <Typography variant="body2" color="white">
        {description}
        </Typography>
      </CardContent>
      <CardActions>
      <Typography variant="body2" color="white">
      price:   {price}
        </Typography>
       {/*
       <Button size="small" style={{ color: 'black', fontSize:'20px' }} >price:   {price}</Button>
       */} 
          <Button size="small" style={{ color: 'white', fontSize: '20px' }} onClick={handleEditClick}>
          Edit
        </Button>      
        <Button size="small" style={{ color: 'white', fontSize: '20px' }} onClick={handleDeleteClick}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}