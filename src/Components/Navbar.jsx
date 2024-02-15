import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useMyCartContext } from '../Context/CartContext';

function Navbar() {
  const { cart } = useMyCartContext();

  return (
    <nav className=' mt-0 bg-emerald-400 text-white'>
      <ul className='list-none flex items-center justify-evenly p-5'>
        <Link to='/'><li className='text-3xl'>CONTEXT-API CART SYSTEM</li></Link>
        <Link to='/cart'>
          
          <li className=''><FaShoppingCart className='w-7 h-7' />({cart?.length || 0})</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar;
