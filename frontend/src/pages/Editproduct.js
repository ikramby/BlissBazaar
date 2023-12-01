import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  InputAdornment,
  Typography,
  Container,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Footer from "./Footer";
import UploadFile from "./UploadFile"; 

const EditProductForm = ({
  productId,
  name,
  description,
  imageUrl,
  price,
  category,
  color,
  manufacturer,
  onSale,
}) => {
  const navigate = useNavigate();

  const { productId: paramProductId } = useParams();
  console.log("id", paramProductId);
  const [nameInput, setName] = useState(name || "");
  const [descriptionInput, setDescription] = useState(description || "");
  const [imageUrlInput, setImageUrl] = useState(imageUrl || "");
  const [priceInput, setPrice] = useState(price || "");
  const [categoryInput, setCategory] = useState(category || "");
  const [colorInput, setColor] = useState(color || "");
  const [manufacturerInput, setManufacturer] = useState(manufacturer || "");
  const [onSaleInput, setOnSale] = useState(onSale || false);
  const [quantityInput, setQuantity] = useState("");
  const [fileInput, setFileInput] = useState(null); 
  const [imageFile, setImageFile] = useState(null);
  const [useImageUrl, setUseImageUrl] = useState(false);

  const handleFileUpload = (imageUrl) => {
    setImageUrl(imageUrl);
  };

  useEffect(() => {
    if (paramProductId) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(
            `http://localhost:7000/products/${paramProductId}`
          );
          const productData = response.data;

          setName(productData.name || "");
          setDescription(productData.description || "");
          setImageUrl(productData.imageUrl || "");
          setPrice(productData.price || "");
          setCategory(productData.category || "");
          setColor(productData.color || "");
          setManufacturer(productData.manufacturer || "");
          setQuantity(productData.quantity || "");
        } catch (error) {
          console.error("Error fetching product", error);
        }
      };

      fetchProduct();
    }
  }, [paramProductId]);
  const [cloudName] = useState("dsozaejvw");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", nameInput);
    formData.append("description", descriptionInput);
    formData.append("price", priceInput);
    formData.append("category", categoryInput);
    formData.append("color", colorInput);
    formData.append("manufacturer", manufacturerInput);
    formData.append("quantity", quantityInput);
  
    if (useImageUrl) {
      formData.append("imageUrl", imageUrl);
    } else {
      // Check if imageFile is not null before making the Cloudinary request
      if (imageFile) {
        try {
          const cloudinaryResponse = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            imageFile,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
      
          formData.append("imageUrl", cloudinaryResponse.data.secure_url);
        } catch (error) {
          console.error("Error uploading image to Cloudinary", error);
          return; // Stop the submission if image upload fails
        }
      } else {
        console.error("No image file selected");
        return; // Stop the submission if no image file is selected
      }
      
    }
  
    try {
      const response = await axios.put(
        `http://localhost:7000/products/${paramProductId}`,
        formData
      );
  
      setImageUrl(response.data.imageUrl);
      console.log("Product updated successfully");
      navigate(`/allproduct`);
    } catch (error) {
      console.error("Error updating product", error);
    }
  };
  
  
  
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const onChangeColor = (e) => {
    setColor(e.target.value);
  };

  const onChangeManufacturer = (e) => {
    setManufacturer(e.target.value);
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      setFileInput(file);
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
        setImageFile(file); // Set the image file
      };
      reader.readAsDataURL(file);
    }
  };
  



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card
          variant="outlined"
          style={{
            width: "70%",
            padding: "20px",
            margin: "20px auto",
          }}
        >
          <Typography variant="h5" component="div">
            Edit Product
          </Typography>
          <TextField
            label="Product Name"
            variant="outlined"
            value={nameInput}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={categoryInput}
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
            value={descriptionInput}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <Select
              labelId="color-label"
              id="color"
              value={colorInput}
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
              <UploadFile onFileUpload={handleFileUpload} />

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

          {/* ... other input fields ... */}

          <TextField
            label="Price"
            variant="outlined"
            value={priceInput}
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
            value={quantityInput}
            onChange={(e) => setQuantity(e.target.value)}
            fullWidth
            type="number"
            margin="normal"
          />
          <br></br>
          <br></br>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="manufacturer-label">Manufacturer</InputLabel>
            <Select
              labelId="manufacturer-label"
              id="manufacturer"
              value={manufacturerInput}
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
            Update Product
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

export default EditProductForm;
