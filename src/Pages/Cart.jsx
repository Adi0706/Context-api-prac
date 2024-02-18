import React from 'react';
import Navbar from '../Components/Navbar';
import { useMyCartContext } from '../Context/CartContext';
import { MdDelete } from "react-icons/md";

function Cart() {
  const { cart, setCart } = useMyCartContext();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.cardPrice.replace("$","")), 0);
};

const calculateTotalQuantity = (productId)=>{
  return cart.reduce((total,item)=> (item.id===productId?total + 1 :total),0)
}
  const handleDelete = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const handleDecrement = (productId) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === productId);
    if (index !== -1 && calculateTotalQuantity(productId)>1) {
      updatedCart.splice(index,1);
      setCart(updatedCart);
    }
  };
  
  const handleIncrement = (productId) => {
    setCart([...cart,cart.find((item)=>item.id === productId)])
  };
  
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-around'>
        <div className='mt-7 p-2'>
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
                <img src={product.cardImage} alt={`product-image-${productId}`} className='w-36 h-36' />
                <div className='flex flex-row items-center w-auto h-auto justify-center ml-36'>
                  <p className="text-lg font-bold p-4">{product.cardName}</p>
                  <p className="text-xl p-4">{product.cardPrice}</p>
                  <MdDelete className='items-center cursor-pointer' onClick={() => handleDelete(product.id)} />
                  <div className='border border-solid border-black flex flex-row ml-7'>
                    <button className='btn-quantity' onClick={() => handleDecrement(productId)}>-</button>
                    <p className='mt-2'>{calculateTotalQuantity(product.id)}</p>
                    <button className='btn-quantity' onClick={() => handleIncrement(productId)}>+</button>
                  </div>
                </div>
              </div>
            );
          })}
          <hr />
          <div className='w-52 h-52 ml-96'>
            <p className='text-center font-bold'>TOTAL AMOUNT</p>
            <p className='ml-24'>${calculateTotal()}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
