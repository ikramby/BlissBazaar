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
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Footer from "./Footer";

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
  const [onSalePercentage, setOnSalePercentage] = useState("");

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
          setOnSale(productData.onSale || false);
          setQuantity(productData.quantity || "");
        } catch (error) {
          console.error("Error fetching product", error);
        }
      };

      fetchProduct();
    }
  }, [paramProductId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      paramProductId,
      name: nameInput,
      description: descriptionInput,
      imageUrl: imageUrlInput,
      price: priceInput,
      category: categoryInput,
      color: colorInput,
      manufacturer: manufacturerInput,
      onSale: onSaleInput,
      quantity: quantityInput,
    };

    try {
      await axios.put(
        `http://localhost:7000/products/${paramProductId}`,
        updatedProduct
      );

      console.log("Product updated successfully");
      navigate(`/allproduct`);
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

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

  const onChangeOnSalePercentage = (e) => {
    setOnSalePercentage(e.target.value);
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
          <CardMedia
            sx={{ height: 500, width: "100%" }}
            image={imageUrlInput}
            title={name}
          />
          <TextField
            label="Image URL"
            variant="outlined"
            value={imageUrlInput}
            onChange={(e) => setImageUrl(e.target.value)}
            fullWidth
            margin="normal"
          />
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
