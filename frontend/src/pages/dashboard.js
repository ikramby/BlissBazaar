import React from 'react';
import './dashboard.css';

export default function Dashboard() {
  return (
    <>
    <div id='body'>
     <div className="dashboard-container">
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
     <div className="dashboard-tab">
        <div className="title">
            <div>
              <span className="collec" >Collection</span>  
            </div>
            <div className="collection">
                <span>volume</span>
            <span>24%</span>
            <span>7D%</span>
            <span>Floor Price</span>
            <span>Oweners</span>
            <span>Items</span>
            </div>
            

        </div>
       
        <div className="dhaboard-row">
            <div>
                <span>1.</span>
                
              <span className="collec" >DELL</span>  
            </div>
            <div className="collection">
                <span>27,465465</span>
            <span>+92.96</span>
            <span>-16.38</span>
            <span>12.98</span>
            <span>5.9k</span>
            <span>10K</span>
            </div>
            

        </div>
        
           <div className="dhaboard-row">
            <div>
                <span>1.</span>
                
              <span className="collec" >LG</span>  
            </div>
            <div className="collection">
                <span>27,465465</span>
            <span>+92.96</span>
            <span>-16.38</span>
            <span>12.98</span>
            <span>5.9k</span>
            <span>10K</span>
            </div>
            

        </div>
       
           <div className="dhaboard-row">
            <div>
                <span>2.</span>
                
              <span className="collec" >Samsung</span>  
            </div>
            <div className="collection">
                <span>27,465465</span>
            <span>+92.96</span>
            <span>-16.38</span>
            <span>12.98</span>
            <span>5.9k</span>
            <span>10K</span>
            </div>
            

        </div>
       
           <div className="dhaboard-row">
            <div>
                <span>3.</span>
                
              <span className="collec" >HP</span>  
            </div>
            <div className="collection">
                <span>27,465465</span>
            <span>+92.96</span>
            <span>-16.38</span>
            <span>12.98</span>
            <span>5.9k</span>
            <span>10K</span>
            </div>
            

        </div>
       
     </div>


    </div> 
    </div>
    </>
  )
}
