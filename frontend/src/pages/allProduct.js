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
           <select name="status" id="status"></select>
           <select name="status" id="status"></select>
           <select name="status" id="status"></select>
           <select name="status" id="status"></select>
           <select name="status" id="status"></select>
        </div>
        <div id="allProduct-detail">
            <div id="totalItems">23,344,420 items</div>
          <div id="items">
            <select name="items" id="items"></select>
            <select name="items" id="items"></select>

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

