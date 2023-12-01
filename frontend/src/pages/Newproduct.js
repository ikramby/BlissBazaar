import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Container,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import CardMedia from "@mui/material/CardMedia";
import Footer from "./Footer";
import UploadFile from "./UploadFile"; 
const NewProductForm = ({ addNewProduct }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState([]);
  const [color, setColor] = useState([]);
  const [manufacturer, setManufacturer] = useState([]);
  const [onSale, setOnSale] = useState(false);
  const [quantity, setQuantity] = useState(null); 
  const [useImageUrl, setUseImageUrl] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      if (useImageUrl) {
        formData.append("imageUrl", imageUrl);
      } else {
        formData.append("image", imageUrl); // Assuming imageUrl is a file blob
      }
      formData.append("price", price);
      formData.append("category", category);
      formData.append("status", status);
      formData.append("color", color);
      formData.append("manufacturer", manufacturer);
      formData.append("onSale", onSale);
      if (quantity !== null) {
        formData.append("quantity", quantity);
      }

      // Use axios.post to send FormData with the image file to the server
      const response = await axios.post('http://localhost:7000/products/', formData);
      console.log('Operation completed successfully', response);

      // Reset form fields
      setName('');
      setDescription('');
      setImageUrl('');
      setPrice('');
      setCategory('');
      setStatus([]);
      setColor([]);
      setManufacturer('');
      setOnSale(false);
      setQuantity('');

    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  

  const [imageFile, setImageFile] = useState(null);


  const onChangeCategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const onChangeColor = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };

  const onChangeManufacturer = (e) => {
    console.log(e.target.value);
    setManufacturer(e.target.value);
  };

  const [onSalePercentage, setOnSalePercentage] = useState("");

  const onChangeOnSalePercentage = (e) => {
    setOnSalePercentage(e.target.value);
  };




  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Card
          variant="outlined"
          style={{
            width: "70%",
            padding: "20px",
            margin: "20px auto",
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

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={category}
              onChange={onChangeCategory}
              label="Category"
            >
              <MenuItem value="computers">Computers</MenuItem>
              <MenuItem value="Phones">Phones</MenuItem>
              <MenuItem value="electronics">electronics</MenuItem>
              <MenuItem value="laptops">laptops</MenuItem>
              <MenuItem value="tablets">tablets</MenuItem>
              <MenuItem value="smartphones">smartphones</MenuItem>
              <MenuItem value="wearables">wearables</MenuItem>
              <MenuItem value="accessories">accessories</MenuItem>
            </Select>
          </FormControl>

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
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="color-label">Color</InputLabel>
            <Select
              labelId="color-label"
              id="color"
              value={color}
              onChange={onChangeColor}
              label="Color"
            >
              <MenuItem value="White">White</MenuItem>
              <MenuItem value="Black">Black</MenuItem>
              <MenuItem value="Red">Red</MenuItem>
              <MenuItem value="Gold">Gold</MenuItem>
              <MenuItem value="Silver">Silver</MenuItem>
              <MenuItem value="Gray">Gray</MenuItem>
              <MenuItem value="Beige">Beige</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Orange">Orange</MenuItem>
              <MenuItem value="Green">Green</MenuItem>
              <MenuItem value="Purple">Purple</MenuItem>
            </Select>
          </FormControl>
          <UploadFile /> {/* Include the UploadFile component */}

         {/* Checkbox to choose between URL and file upload */}
        
           {/* Checkbox to choose between URL and file upload */}
           <FormControlLabel
            control={
              <Checkbox
                checked={useImageUrl}
                onChange={() => setUseImageUrl(!useImageUrl)}
                color="primary"
              />
            }
            label="Use Image URL"
          />
          {/* Conditionally render URL input or file upload input based on the checkbox */}
          {useImageUrl ? (
            <TextField
              label="Image URL"
              variant="outlined"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              fullWidth
              margin="normal"
            />
          ) : (
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="image-input"
                name="image"
              />
              <label htmlFor="image-input">
                <Button
                  component="span"
                  color="primary"
                  variant="contained"
                  style={{ marginTop: "20px" }}
                >
                  Upload Image
                </Button>
              </label>

              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Uploaded Preview"
                  style={{ width: "100%", marginTop: "10px" }}
                />
              )}
            </div>
          )}
          <TextField
            label="Price"
            variant="outlined"
            value={price}
            InputProps={{
              endAdornment: <InputAdornment position="end">DT</InputAdornment>,
            }}
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

          <br></br>

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="manufacturer-label">Manufacturer</InputLabel>
            <Select
              labelId="manufacturer-label"
              id="manufacturer"
              value={manufacturer}
              onChange={onChangeManufacturer}
              label="Manufacturer"
            >
              <MenuItem value="Hp">Hp</MenuItem>
              <MenuItem value="Toshiba">Toshiba</MenuItem>
              <MenuItem value="Samsung">Samsung</MenuItem>
              <MenuItem value="Apple">Apple</MenuItem>
              <MenuItem value="Benco">Benco</MenuItem>
              <MenuItem value="Honor">Honor</MenuItem>
              <MenuItem value="Huawei">Huawei</MenuItem>
              <MenuItem value="IKU">IKU</MenuItem>
              <MenuItem value="Infinix">Infinix</MenuItem>
              <MenuItem value="IPLUS">IPLUS</MenuItem>
              <MenuItem value="Itel mobile">Itel mobile</MenuItem>
              <MenuItem value="Lenovo">Lenovo</MenuItem>
              <MenuItem value="LOGICOM">LOGICOM</MenuItem>
              <MenuItem value="Nokia">Nokia</MenuItem>
              <MenuItem value="Oppo">Oppo</MenuItem>
              <MenuItem value="realme">realme</MenuItem>
              <MenuItem value="SCHNEIDER">SCHNEIDER</MenuItem>
              <MenuItem value="Sagem">Sagem</MenuItem>
            </Select>
          </FormControl>

          <br></br>
{/*
 <TextField
            label="On Sale (%)"
            variant="outlined"
            type="number"
            value={onSalePercentage}
            onChange={onChangeOnSalePercentage}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            fullWidth
            margin="normal"
          />
*/}
         

          <br></br>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Add Product
          </Button>
        </Card>
      </form>
      {/* Footer */}

      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Footer />
      </Container>

      {/* End footer */}
    </div>
  );
};

export default NewProductForm;
