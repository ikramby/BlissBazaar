import React from 'react';
import './dashboard.css';
import DashRow from '../component/dashbardrow';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Inner function that calls the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:7000/products'); 
        setProducts(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching products:', error);
       
      }
    };
 

   
    fetchProducts();
  }, []);

  return (
    <>
    <div id='body'>
     <div class="dashboard-container">
     <div id="dashboard-title">
        <h1>Top Market Statistic</h1>
        <h4> Floor price and other statistic</h4>
     </div>
     <div id="dhashboard-filter">
        <div id="market-place-performance">Market Place Performance</div>
        <div id="select"> 
            <select name="days" id="days">

        </select>
        <select name="all-categ" id="all-categ">

        </select>
    </div>
       
     </div>
     <div class="dashboard-tab">
        <div class="title">
            <div>
              <span class="collec" >Collection</span>  
            </div>
            <div class="collection">
                <span>volume</span>
            <span>Created at </span>
            <span>Updated at </span>
            <span>Price</span>
            <span>Oweners</span>
            <span>Color</span>
            </div>
            

        </div>
       
        
        {Array.isArray(products) && products.map((product, index) => (
              <DashRow key={index} product={product} index={index} />
             
            ))}
          
       
     </div>


    </div> 
    </div>
    </>
  )
}
