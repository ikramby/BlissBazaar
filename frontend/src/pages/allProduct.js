import React from 'react';
import './allProduct.css';
import MediaCard from '../component/mediaCard';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function AllProduct() {
  const [products, setProducts] = useState([]);

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

  return (
    <>
        <div id="container-body">
           <div id="container-all">
        <div id="filter">
            <div id="filterlabel">
                <i class="fas fa-ellipsis-v fa-rotate-270"></i><span>Filter</span> </div>
           <select name="status" id="status" >
            <option value='status' selected>Status</option>
           </select>
           <select name="price" id="price" >
            <option value='price' selected>Price</option>
           </select>
           <select name="collection" id="collection" >
            <option value='collection' selected>Collection</option>
           </select>
           <select name="chaine" id="chaine" >
            <option value='chaine' selected>Chaine</option>
           </select>
           <select name="on sale" id="on sale" >
            <option value='on sale' selected>On Sale</option>
           </select>
        </div>
        <div id="allProduct-detail">
   { /* <div id="totalItems">23,344,420 items</div>    */}  

          <div id="items">
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

