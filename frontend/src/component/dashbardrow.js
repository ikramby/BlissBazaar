import React from 'react';

export default function DashRow({product , index}) {
  return (
    <>
      <div class="dhaboard-row">
            <div>
                <span>{index +1}</span>
                
              <span className="collec" >{product.manufacturer}</span>  
            </div>
            <div className="collection">
                <span>{product.quantity}</span>
            <span>{product.createdAt.slice(0,10)}</span>
            <span>{product.updatedAt.slice(0,10)}</span>
            <span>{product.price}</span>
            <span>{product.name}</span>
            <span>{product.color}</span>
            </div>
            

        </div>
    </>
  )
}
