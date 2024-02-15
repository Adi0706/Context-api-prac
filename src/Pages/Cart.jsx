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
      <div className='flex items-center justify-around'>
        <div className='border border-solid border-black mt-12'>
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
                <img src={product.cardImage} alt={`product-image-${productId}`} className='w-52 h-52'/>
                <div className='border border-solid border-black flex flex-col items-center w-auto h-auto justify-center'>
                <p className="text-lg font-bold">{product.cardName}</p>
                <p className="text-xl">{product.cardPrice}</p>
                </div>
               
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
