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
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    imageUrl: '',
    price: '',
    category: 'electronics',
    status: [],
    color: [],
    manufacturer: [],
    onSale: false,
    quantity: '', 

  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleCheckboxChange = (name) => (e) => {
    const { value, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: checked
        ? [...newProduct[name], value]
        : newProduct[name].filter((item) => item !== value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:7000/products/addproduct', newProduct)
      .then((response) => {
        console.log('Operation completed successfully', response);
        // You may want to update your state or trigger a refresh here
      })
      .catch((error) => {
        console.error('Error adding product', error);
      });

    setNewProduct({
      name: '',
      description: '',
      imageUrl: '',
      price: '',
      category: 'electronics',
      status: [],
      color: [],
      manufacturer: [],
      onSale: false,
      quantity: '', 
    });
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
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          variant="outlined"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <TextField
          label="Image URL"
          variant="outlined"
          name="imageUrl"
          value={newProduct.imageUrl}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Price"
          variant="outlined"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          fullWidth
          type="number"
          margin="normal"
        />
        <TextField
  label="Quantity"
  variant="outlined"
  name="quantity"
  value={newProduct.quantity}
  onChange={handleChange}
  fullWidth
  type="number"
  margin="normal"
/>

        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            name="category"
            value={newProduct.category}
            onChange={handleChange}
          >
           <MenuItem value="computers">Computers</MenuItem>
    <MenuItem value="phones">Phones</MenuItem>
    <MenuItem value="electronics">Electronics</MenuItem>
    <MenuItem value="laptops">Laptops</MenuItem>
    <MenuItem value="tablets">Tablets</MenuItem>
    <MenuItem value="smartphones">Smartphones</MenuItem>
    <MenuItem value="wearables">Wearables</MenuItem>
          </Select>
        </FormControl> <br></br>
        <FormControl fullWidth><br></br>
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            name="status"
            multiple
            value={newProduct.status}
            onChange={handleCheckboxChange('status')}
          >
            <MenuItem value="available">Available</MenuItem>
            <MenuItem value="out of stock">Out of Stock</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth><br></br>
          <InputLabel>Color</InputLabel>
          <Select
            label="Color"
            name="color"
            multiple
            value={newProduct.color}
            onChange={handleCheckboxChange('color')}
          >
                       {[
              'Beige',
              'White',
              'Blue',
              'Gold',
              'Gray',
              'Black',
              'Orange',
              'Pink',
              'Red',
              'Silver',
              'Green',
              'Purple',
            ].map((color) => (
              <MenuItem key={color} value={color}>
                {color}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth><br></br>
          <InputLabel>Manufacturer</InputLabel>
          <Select
            label="Manufacturer"
            name="manufacturer"
            multiple
            value={newProduct.manufacturer}
            onChange={handleCheckboxChange('manufacturer')}
          >
                {[
              'Apple',
              'benco',
              'Honor',
              'Huawei',
              'IKU',
              'Infinix',
              'IPLUS',
              'Itel mobile',
              'Lenovo',
              'LOGICOM',
              'Nokia',
              'Oppo',
              'Hp',
              'realme',
              'Samsung',
              'SCHNEIDER',
              'Toshiba',
              'Sagem',
            ].map((manufacturer) => (
              <MenuItem key={manufacturer} value={manufacturer}>
                {manufacturer}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={newProduct.onSale}
              onChange={handleChange}
              name="onSale"
            />
          }
          label="On Sale"
        /><br></br>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Add Product
        </Button>
      </Card>
    </form>
  );
};

export default NewProductForm;
