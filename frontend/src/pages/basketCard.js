import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BasketCardItem = ({ product, removeFromCart }) => {
  const shadowStyle = {
    boxShadow: '10px 10px 52px 0px rgba(0, 0, 0, 0.75)',
    WebkitBoxShadow: '10px 10px 52px 0px rgba(0, 0, 0, 0.75)',
    MozBoxShadow: '10px 10px 52px 0px rgba(0, 0, 0, 0.75)',
  };

  return (
    <Card key={product.id} sx={{ maxWidth: 360, backgroundColor: 'transparent', border: '1px solid black', borderRadius: '10px', margin: '10px', backgroundColor: 'hsla(0, 0%, 100%, 0.1)' }} style={shadowStyle}>
      <CardMedia component="img" height="140" image={product.imageUrl} alt={product.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
      <CardContent style={{ flex: 1 }}>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">Price: ${product.price}</Typography>
        <Typography variant="body2">Quantity: {product.quantity}</Typography>
        <Typography variant="body2">Total: ${product.price * product.quantity}</Typography>
        <Button onClick={() => removeFromCart(product.id)} variant="contained" color="secondary">
          Remove from Cart
        </Button>
      </CardContent>
    </Card>
  );
};

const BasketCard = () => {
  const [cartData, setCartData] = React.useState([]);

  React.useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/cart/getCartListData');
        setCartData(response.data);
      } catch (error) {
        console.error('Error fetching cart data', error);
      }
    };

    fetchCartData();
  }, []); 

  const totalAmount = cartData.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`http://localhost:7000/cart/deleteCartList/${productId}`);
      setCartData((prevCartData) => prevCartData.filter((product) => product.id !== productId));
    } catch (error) {
      console.error('Error removing product from cart', error);
    }
  };

  const handleBuyAllClick = async () => {
    try {
      window.alert('Congratulations! Your purchase was successful.');
      await axios.delete('http://localhost:7000/cart/deleteAllCartList');
  
      setCartData([]);
    } catch (error) {
      console.error('Error buying all items', error);
    }
  };
  
  const handleDeleteAllClick = async () => {
    try {
      window.alert('We hope you buy next time.');

      await axios.delete('http://localhost:7000/cart/deleteAllCartList');
      setCartData([]);
    } catch (error) {
      console.error('Error deleting all items', error);
    }
  };
  
  

  return (
    <div>
      {cartData.length > 0 && (
        <div style={{ marginTop: '20px', borderTop: '2px solid #ddd', paddingTop: '10px' }}>
          <Typography variant="h6">Total Price: ${totalAmount}</Typography>
          <Button onClick={handleBuyAllClick} variant="contained" color="primary">
            Buy All
          </Button>
          <Button onClick={handleDeleteAllClick} variant="contained" color="secondary">
            Delete All
          </Button>
        </div>
      )}

      {cartData.map((product) => (
        <BasketCardItem key={product.id} product={product} removeFromCart={removeFromCart} />
      ))}

      {cartData.length > 0 && (
        <div style={{ marginTop: '20px', borderTop: '2px solid #ddd', paddingTop: '10px' }}>
          <Typography variant="h6">Total Price: ${totalAmount}</Typography>
          <Button onClick={handleBuyAllClick} variant="contained" color="primary">
            Buy All
          </Button>
          <Button onClick={handleDeleteAllClick} variant="contained" color="secondary">
            Delete All
          </Button>
        </div>
      )}
    </div>
  );
};

export default BasketCard;
