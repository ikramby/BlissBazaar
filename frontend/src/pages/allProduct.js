import React from 'react';
import './allProduct.css';
import MediaCard from '../component/mediaCard';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';


export default function AllProduct() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:7000/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);
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


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:7000/products/';
        if (selectedCategory) {
          url = `http://localhost:7000/products/category/${selectedCategory}`;
        }

        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const productCountText = selectedCategory
    ? `Total products: ${products.length}`
    : '';
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

      <select name="manufacturer" id="manufacturer" >
        <option value='manufacturer' > Manufacturer</option>
        {manufacturers.map((manufacturer, index) => (
          <option key={index} value={manufacturer} style={{ color: 'blue' }}>
            {manufacturer}
          </option>
        ))}
      </select>


      <select name="color" id="color" >
        <option value='color' > Color</option>
        {colors.map((color, index) => (
          <option key={index} value={color} style={{ color:  'blue' }}>
            {color}
          </option>
        ))}
      </select>

           <select name="price" id="price" >
            <option value='price' selected>Price</option>
           </select>
         
          
           <select name="on sale" id="on sale" >
            <option value='on sale' selected>On Sale</option>
           </select>
        </div>
        <div id="allProduct-detail">
   { /* <div id="totalItems">23,344,420 items</div>    */}  

          <div id="items">
        
          <Typography variant="body2" color="white">
        {productCountText}
        </Typography>
          <Link to="/NewProduct">
            <Button size="small" style={{ color: 'white', fontSize: '15px' }}>New Product</Button>
          </Link>
            <select name="items" id="items">
            <option value='on sale' selected>All Items</option>

            </select>
            <select name="items" id="items">
            <option value='Sort By' selected>Sort By</option>

            </select>

          </div>
          <div id="allProduct-component">
              {/* Map through the products and render a MediaCard for each */}
              {products.map((product) => (
                 <MediaCard
                 key={product.id} 
                 productId={product.id} // Pass the product ID as a prop
                 name={product.name}
                 description={product.description}
                 imageUrl={product.imageUrl}
                 price={product.price}
                 category={product.category}
                 color={product.color}
                 manufacturer={product.manufacturer}
                 onSale={product.onSale}
               />
              ))}
            </div>
        </div>
 
        </div>
    </div>
    </>
  )
}

