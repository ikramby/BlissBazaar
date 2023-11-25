import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    const shadowStyle = {
        boxShadow: '10px 10px 52px 0px rgba(0, 0, 0, 0.75)',
        WebkitBoxShadow: '10px 10px 52px 0px rgba(0, 0, 0, 0.75)',
        MozBoxShadow: '10px 10px 52px 0px rgba(0, 0, 0, 0.75)',
      };
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'transparent', border:'1px solid black' , 
    borderRadius:'10px',margin:'10px', backgroundColor:'hsla(0, 0%, 100%, 0.1)',
    
     }} style={shadowStyle}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://cdn.thewirecutter.com/wp-content/media/2023/06/laptops-2048px-5607.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="black">
          Laptop
        </Typography>
        <Typography variant="body2" color="white">
        Dell laptops are known for their reliability, performance, each designed with specific purposes in mind.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ color: 'black', fontSize:'20px' }} >price: 55$</Button>
        <Button size="small" style={{ color: 'black', fontSize:'20px' }} >Buy</Button>
      </CardActions>
    </Card>
  );
}