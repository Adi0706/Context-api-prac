import React from 'react'
import Home from '../src/Pages/Home';
import Cart from '../src/Pages/Cart'
import {Routes,Route} from 'react-router-dom';

function Allroutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </>
  )
}

export default Allroutes