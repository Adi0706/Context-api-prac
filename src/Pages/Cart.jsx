import React from 'react';
import Navbar from '../Components/Navbar';
import { useMyCartContext } from '../Context/CartContext';
import { MdDelete } from "react-icons/md";

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
        <div className=' mt-7 p-2'>
          {/*
            Use Set to get unique product IDs and map over them
            to display product information
          */}
          {[...new Set(cart.map((product) => product.id))].map((productId) => {
            // Find the first matching product by its id
            const product = cart.find((item) => item.id === productId);
            // Return the product information
            return (
              <div key={productId} className='flex flex-row p-7 '>
                <img src={product.cardImage} alt={`product-image-${productId}`} className='w-36 h-36'/>
                <div className=' flex flex-row items-center w-auto h-auto justify-center ml-36'>
                <p className="text-lg font-bold p-4">{product.cardName}</p>
                <p className="text-xl p-4">{product.cardPrice}</p>
                <MdDelete className='items-center'/>
                <div className='border border-solid border-black flex flex-row ml-7'><button className='btn-quantity'>-</button><p className='mt-2'>number</p><button className='btn-quantity'>+</button></div>
                </div>
               
              </div>
            );
          })}
          <hr/>
        <div class=" w-52 h-52 ml-96"><p className='text-center font-bold'>TOTAL AMOUNT</p><p className='ml-24'>amount</p></div>
        </div>
        
      </div>
      

    </>
  );
}

export default Cart;
