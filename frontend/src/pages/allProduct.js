import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaCard from '../component/mediaCard';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Container, Typography } from "@mui/material";
import Footer from "./Footer";


import './allProduct.css';
// import Data from './Data.json'
// import  { useState, useEffect } from 'react';
//import Data from './Data.json'




export default function AllProduct() {

  const [data,setData] = useState([])

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [productCount, setProductCount] = useState(0);
  const [colorProductCount, setColorProductCount] = useState(0);
  const [manufacturerProductCount, setManufacturerProductCount] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [priceProductCount, setPriceProductCount] = useState(0);

  const categories = [
    'computers',
    'phones',
    'electronics',
    'laptops',
    'tablets',
    'smartphones',
    'wearables',
    'accessories',
  ];
  const manufacturers = [
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
  ];
  const colors = [
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
  ];


 // useEffect(() => {
   // const fetchProducts = async () => {
 //     try {
   //     let url = 'http://localhost:7000/products/';

     //   if (selectedCategory) {
    //      url = `http://localhost:7000/products/category/${selectedCategory}`;
      //  } else if (selectedColor) {
     //     url = `http://localhost:7000/products/color/${selectedColor}`;
      //  } else if (selectedManufacturer) {
        //  url = `http://localhost:7000/products/manufacturer/${selectedManufacturer}`;
       // } else if (selectedPrice) {
      //    url = `http://localhost:7000/products/price/${selectedPrice}`;
       // }

       // const response = await axios.get(url);
        //setProducts(response.data);
        //setProductCount(response.data.length);

        // Fetch count for color
       // if (selectedColor) {
        //  const colorCountResponse = await axios.get(`http://localhost:7000/products/color/${selectedColor}`);
        //  setColorProductCount(colorCountResponse.data.length);
       // }

        // Fetch count for manufacturer
       // if (selectedManufacturer) {
         // const manufacturerCountResponse = await axios.get(`http://localhost:7000/products/manufacturer/${selectedManufacturer}`);
         // setManufacturerProductCount(manufacturerCountResponse.data.length);
      //  }

    // Fetch count for price range
    //if (selectedPrice) {
    // const priceCountResponse = await axios.get(`http://localhost:7000/products/price/${selectedPrice}`);
    // setPriceProductCount(priceCountResponse.data.length);
    //}


      //} catch (error) {
      //  console.error('Error fetching products', error);
     // }
    //};

    //fetchProducts();
  //}, [selectedCategory, selectedColor, selectedManufacturer, selectedPrice]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {

        let url = 'http://localhost:7000/products';

  
        if (selectedCategory) {
          url = `http://localhost:7000/products/category/${selectedCategory}`;
        } else if (selectedColor) {
          url = `http://localhost:7000/products/color/${selectedColor}`;
        } else if (selectedManufacturer) {
          url = `http://localhost:7000/products/manufacturer/${selectedManufacturer}`;
        } else if (selectedPrice) {
          url = `http://localhost:7000/products/price/${selectedPrice}`;
        }
  
        const response = await axios.get(url);
        setData(response.data);
        setProducts(response.data);
        setProductCount(response.data.length);
  
        // Fetch count for color
        if (selectedColor) {
          const colorCountResponse = await axios.get(`http://localhost:7000/products/color/${selectedColor}`);
          setColorProductCount(colorCountResponse.data.length);
        }
  
        // Fetch count for manufacturer
        if (selectedManufacturer) {
          const manufacturerCountResponse = await axios.get(`http://localhost:7000/products/manufacturer/${selectedManufacturer}`);
          setManufacturerProductCount(manufacturerCountResponse.data.length);
        }
  
        // Fetch count for price range
        if (selectedPrice) {
          const priceCountResponse = await axios.get(`http://localhost:7000/products/price/${selectedPrice}`);
          setPriceProductCount(priceCountResponse.data.length);
        }
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
  

    fetchProducts();
  }, [selectedCategory, selectedColor, selectedManufacturer, selectedPrice]);
  


  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    setSelectedCategory('');
    setSelectedColor('');
    setSelectedManufacturer('');
  };



  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedColor('');
    setSelectedManufacturer('');
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    setSelectedCategory('');
    setSelectedManufacturer('');
  };

  const handleManufacturerChange = (e) => {
    setSelectedManufacturer(e.target.value);
    setSelectedCategory('');
    setSelectedColor('');
  };

  console.log(data,'data')

  const [isButtonClicked, setIsButtonClicked] = useState(false);


  return (
    <>
        <div id="container-body">
           <div id="container-all">
        <div id="filter">
            <div id="filterlabel">
               <span>Filter</span> </div>
   {/* 
    <select name="status" id="status" >
            <option value='status' selected>Status</option>
           </select>
   */}       
            <select name="category" id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value='category' > Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category} style={{ color: 'blue' }}>
          {category}
          </option>
        ))}
      </select>

      <select name="manufacturer" id="manufacturer" value={selectedManufacturer} onChange={handleManufacturerChange}>
        <option value='manufacturer' > Manufacturer</option>
        {manufacturers.map((manufacturer, index) => (
          <option key={index} value={manufacturer} style={{ color: 'blue' }}>
            {manufacturer}
          </option>
        ))}
      </select>


      <select name="color" id="color" value={selectedColor} onChange={handleColorChange}>
        <option value='color' > Color</option>
        {colors.map((color, index) => (
          <option key={index} value={color} style={{ color:  'blue' }}>
            {color}
          </option>
        ))}
      </select>

      <select name="price" id="price" value={selectedPrice} onChange={handlePriceChange}>
  <option value='' > Price</option>
  <option value='0-1000' style={{ color: 'blue' }}>0-1000 DT</option>
  <option value='1000-2000' style={{ color: 'blue' }}>1000-2000 DT</option>
  <option value='2000-3000' style={{ color: 'blue' }}>2000-3000 DT</option>
  <option value='3000-4000' style={{ color: 'blue' }}>3000-4000 DT</option>
  <option value='4000-5000' style={{ color: 'blue' }}>4000-5000 DT</option>
  <option value='5000-6000' style={{ color: 'blue' }}>5000-6000 DT</option>
</select>
      {/*
      <select name="on sale" id="on sale" >
            <option value='on sale' selected>On Sale</option>
           </select>
      
      */}    
      
           
        </div>
        <div id="allProduct-detail">
      { /* <div id="totalItems">23,344,420 items</div>    */}  

          <div id="items">
        
             <Typography variant="body2" color="white">
             {selectedCategory ? `Total products: ${productCount}` : ''}
             {selectedColor ? `Total products by color: ${colorProductCount}` : ''}
             {selectedManufacturer ? `Total products by manufacturer: ${manufacturerProductCount}` : ''}
             {selectedPrice ? `Total products by price range: ${priceProductCount}` : ''}
              </Typography>
          <Link to="/NewProduct">
          
          <Button
            size="small"
            style={{
              color: 'white',
              backgroundColor: isButtonClicked ? 'blue' : '#6495ED', 
              fontSize: '15px',
              cursor: 'pointer',
            }}
            onClick={() => setIsButtonClicked(!isButtonClicked)}
          >
            New Product
          </Button>
          
              </Link>
            <select name="items" id="items">
            <option value='on sale' selected>All Items</option>

            </select>
            <select name="items" id="items">
            <option value='Sort By' selected>Sort By</option>

            </select>

          </div>
          <div id="allProduct-component">
              <div id="allProduct-component">
              {products.map((product) => (
      <MediaCard
        key={product.id}
        productId={product.id}
        name={product.name}
        description={product.description}
        imageUrl={product.imageUrl}
        price={product.price}
        category={product.categories}
      />
      ))}
</div>

            </div>
        </div>
 
        </div>
    </div>
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
    </>
    
  )
}

