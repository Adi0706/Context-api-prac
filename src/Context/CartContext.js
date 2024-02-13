import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const objValue = {
    cart,
    setCart
  }

  return (
    <CartContext.Provider value={objValue}>
      {children}
    </CartContext.Provider>
  );
};

//custom hook
export const useMyCartContext =()=>{
    return useContext(CartContext)
}

// export { CartProvider, CartContext }; // Exporting CartProvider and CartContext individually
