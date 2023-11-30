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
        const response = await axios.get('http://localhost:3000/'); // Replace 3000 with your actual server port
        setProducts(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle errors here, such as displaying a message to the user
      }
    };
 

    // Call the inner function
    fetchProducts();
  }, []);

  return (
    <>
    <div id='body'>
     <div class="dashboard-container">
     <div id="dashboard-title">
        <h1>Top Market Statistic</h1>
        <h4>Top NTF on ___, ranked by volume, floor price and other statistic</h4>
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
            <span>24%</span>
            <span>7D%</span>
            <span>Floor Price</span>
            <span>Oweners</span>
            <span>Items</span>
            </div>
            

        </div>
       
        <div class="dhaboard-row">
            <div>
                <span>1.</span>
                
              <span class="collec" >DELL</span>  
            </div>
            <div class="collection">
                <span>27,465465</span>
            <span>+92.96</span>
            <span>-16.38</span>
            <span>12.98</span>
            <span>5.9k</span>
            <span>10K</span>
            </div>
            

        </div>
        {Array.isArray(products) && products.map((product, index) => (
              <DashRow key={index} product={product} />
             
            ))}
          
       
     </div>


    </div> 
    </div>
    </>
  )
}
