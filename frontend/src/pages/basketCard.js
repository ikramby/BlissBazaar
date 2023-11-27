import React from 'react';
import { useCart } from '../component/cartContext'; // Update the path

const BasketCard = () => {
  const { cart } = useCart();

  // Calculate the total price
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
      {cart.map((product) => (
        <div key={product.productId} style={styles.card}>
          <img src={product.imageUrl} alt={product.name} style={styles.image} />
          <div style={styles.details}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Total: ${product.price * product.quantity}</p>
          </div>
        </div>
      ))}
      <div style={styles.total}>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '10px',
    padding: '10px',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '10px',
  },
  details: {
    flex: 1,
  },
  total: {
    textAlign: 'right',
    marginTop: '10px',
  },
};

export default BasketCard;
