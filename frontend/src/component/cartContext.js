// CartContext.js

import React, { createContext, useContext, useReducer } from 'react';

// Define your initial state, reducer, and actions
const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    // Add other cases for modifying the cart state
    default:
      return state;
  }
};

// Create the context
const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};


export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

 

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
