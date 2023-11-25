import React, { useState } from 'react';
import axios from 'axios';
import {
  Card,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@mui/material';

const NewProductForm = ({ addNewProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState([]);
  const [color, setColor] = useState([]);
  const [manufacturer, setManufacturer] = useState([]);
  const [onSale, setOnSale] = useState(false);
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      description,
      imageUrl,
      price,
      category,
      status,
      color,
      manufacturer,
      onSale,
      quantity,
    };

    axios
      .post('http://localhost:7000/products/', newProduct)
      .then((response) => {
        console.log('Operation completed successfully', response);
        // You may want to update your state or trigger a refresh here
      })
      .catch((error) => {
        console.error('Error adding product', error);
      });

    // Reset individual states
    setName('');
    setDescription('');
    setImageUrl('');
    setPrice('');
    setCategory('');
    setStatus([]);
    setColor([]);
    setManufacturer([]);
    setOnSale(false);
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card
        variant="outlined"
        style={{
          width: '70%',
          padding: '20px',
          margin: '20px auto',
        }}
      >
        <Typography variant="h5" component="div">
          Add New Product
        </Typography>
        <TextField
          label="Product Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <TextField
          label="Image URL"
          variant="outlined"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Price"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          type="number"
          margin="normal"
        />
        <TextField
          label="Quantity"
          variant="outlined"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          fullWidth
          type="number"
          margin="normal"
        />

        <TextField
          label="Category"
          variant="outlined"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          margin="normal"
        />
        <br></br>
        <TextField
          label="Color"
          variant="outlined"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          fullWidth
          margin="normal"
        />
        <br></br>
        <br></br>
        <TextField
          label="Manufacturer"
          variant="outlined"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          fullWidth
          margin="normal"
        />
        <br></br>

        <FormControlLabel
          control={
            <Checkbox
              checked={onSale}
              onChange={() => setOnSale(!onSale)}
              name="onSale"
            />
          }
          label="On Sale"
        />
        <br></br>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Add Product
        </Button>
      </Card>
    </form>
  );
};

export default NewProductForm;
