import React from 'react';
import Navbar from '../Components/Navbar';
import { useMyCartContext } from '../Context/CartContext';

function Cart() {
  const { cart } = useMyCartContext();

  // Check if cart is not an array
  if (!Array.isArray(cart)) {
    console.error("Cart is not an array!");
    return null; // Return early if cart is not an array
  }

  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <div className='border border-solid border-black'>
          {/*
            Use Set to get unique product IDs and map over them
            to display product information
          */}
          {[...new Set(cart.map((product) => product.id))].map((productId) => {
            // Find the first matching product by its id
            const product = cart.find((item) => item.id === productId);
            // Return the product information
            return (
              <div key={productId} className='flex flex-row p-4'>
                <img src={product.cardImage} alt={`product-image-${productId}`} />
                <p className="text-lg font-bold">{product.cardName}</p>
                <p className="text-xl">{product.cardPrice}</p>
              </div>
            );
          })}
        </div>
        <div className='border border-solid border-black'>
          hello
        </div>
      </div>
    </>
  );
}

export default Cart;
