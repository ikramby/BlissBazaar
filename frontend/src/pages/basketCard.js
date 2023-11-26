import React from 'react';

const BasketCard = ({ product }) => {
  return (
    <div></div>
    // <div style={styles.card}>
    //   <img src={product.imageUrl} alt={product.name} style={styles.image} />
    //   <div style={styles.details}>
    //     <h3>{product.name}</h3>
    //     <p>Price: ${product.price}</p>
    //     <p>Quantity: {product.quantity}</p>
    //     <p>Total: ${product.price * product.quantity}</p>
    //   </div>
    // </div>
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
};

export default BasketCard;
