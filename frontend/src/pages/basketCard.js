import React from 'react';
import { useCart } from '../component/cartContext';

const BasketCard = () => {
  const { products } = useCart(); // Provide a default value if products is undefined

  return (
    <div>
      <h2>Your Basket</h2>
      <ul>
        {products.map((product) => (
          <li key={product.productId}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img src={product.imageUrl} alt={product.name} />
            <p>Price: {product.price} DT</p>
            <p>Category: {product.category}</p>
            <p>Color: {product.color}</p>
            <p>Manufacturer: {product.manufacturer}</p>
            <p>On Sale: {product.onSale ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketCard;
