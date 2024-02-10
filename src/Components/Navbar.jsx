import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
          <nav className=' mt-0 bg-emerald-400 text-white '>
            <ul className='list-none flex items-center justify-evenly p-5'>
                <li className='text-3xl'>CONTEXT-API CART SYSTEM</li>
               <Link to='/cart'><li className=''><FaShoppingCart className='w-7 h-7'/></li></Link> 
             
            </ul>
            
          </nav>
    </>
  )
}

export default Navbar