import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';

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


// ... (your imports remain unchanged)

const BasketCard = () => {
  const [cartData, setCartData] = React.useState([]);
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [isPurchaseComplete, setPurchaseComplete] = React.useState(false);
  const [fullName, setFullName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [address, setAddress] = React.useState('');

  const navigate = useNavigate();

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

  const handleBuyAllClick = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handlePurchase = async () => {
    try {
      // Ensure required fields are not empty
      if (!fullName || !phoneNumber || !address) {
        // You can show an error message or handle this case as needed
        return;
      }

      // Extract the required data from the states
      const userOrder = {
        totalPrice: totalAmount,
        fullName,
        phoneNumber,
        address,
        
        // products: cartData.map(product => ({
        //   id: product.id,
        //   name: product.name,
        //   quantity: product.quantity,
        //   total: product.price * product.quantity,
        // })),
      };

      // Example: Send the user order to the server
      await axios.post('http://localhost:7000/orders', userOrder);

      setDialogOpen(false);
      setPurchaseComplete(true);
    } catch (error) {
      console.error('Error completing the purchase', error);
    }
  };

  const handlePurchaseCompleteClose = () => {
    setPurchaseComplete(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div>
        {cartData.length > 0 && (
          <div style={{ marginTop: '20px', borderTop: '2px solid #ddd', paddingTop: '10px' }}>
            <Typography variant="h6">Total Price: ${totalAmount}</Typography>
          </div>
        )}

        {cartData.map((product) => (
          <BasketCardItem key={product.id} product={product} removeFromCart={removeFromCart} />
        ))}
      </div>
      <div style={{ borderTop: '2px solid #ddd', paddingTop: '10px', position: 'sticky', bottom: 0, background: '#fff' }}>
        <Typography variant="h6">Total Price: ${totalAmount}</Typography>
        <Button onClick={handleBuyAllClick} variant="contained" color="primary">
          Buy All
        </Button>
        <Button onClick={() => navigate('/')} variant="contained" color="secondary">
          Go Back
        </Button>
      </div>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        {/* Your Footer component */}
        <Footer />
      </Container>

      {/* User details dialog */}
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          {/* List of products in the cart */}
          {cartData.map((product) => (
            <div key={product.id}>
              <Typography>{product.name}</Typography>
              <Typography>Quantity: {product.quantity}</Typography>
              <Typography>Total: ${product.price * product.quantity}</Typography>
              <hr />
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handlePurchase} color="primary" variant="contained">
            Purchase
          </Button>
        </DialogActions>
      </Dialog>

      {/* Purchase complete dialog */}
      <Dialog open={isPurchaseComplete} onClose={handlePurchaseCompleteClose}>
        <DialogTitle>Congratulations!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Thank you for your purchase, {fullName}!</Typography>
          <Typography variant="body2">
            We have received your order and will contact you within 48 hours.
          </Typography>
          <Typography variant="body2">Your Phone Number: {phoneNumber}</Typography>
          <Typography variant="body2">Your Address: {address}</Typography>

          {/* List of purchased products */}
          {cartData.map((product) => (
            <div key={product.id}>
              <Typography>{product.name}</Typography>
              <Typography>Quantity: {product.quantity}</Typography>
              <Typography>Total: ${product.price * product.quantity}</Typography>
              <hr />
            </div>
          ))}

          <Typography variant="h6">Total Price: ${totalAmount}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePurchaseCompleteClose} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BasketCard;
