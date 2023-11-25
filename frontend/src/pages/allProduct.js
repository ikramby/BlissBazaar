import React from 'react';
import './allProduct.css';
import MediaCard from '../component/mediaCard';

export default function AllProduct() {
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
            <div id="totalItems">23,344,420 items</div>
          <div id="items">
            <select name="items" id="items">
            <option value='on sale' selected>All Items</option>

            </select>
            <select name="items" id="items">
            <option value='Sort By' selected>Sort By</option>

            </select>

          </div>
          <div id="allProduct-component">
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          

          

          


          </div>
        </div>
 
        </div>
    </div>
    </>
  )
}

