
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setAddedProducts((prevAddedProducts) => [...prevAddedProducts, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.productId !== productId));
    setAddedProducts((prevAddedProducts) => prevAddedProducts.filter((product) => product.productId !== productId));
  };

  const clearCart = () => {
    setCart([]);
    setAddedProducts([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, addedProducts, products: cart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
