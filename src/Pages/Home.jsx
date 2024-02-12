import React from 'react';
import Navbar from '../Components/Navbar';
import SneakerData from '../Data/SneakerData';

function Home() {
  return (
    <React.Fragment>
      <Navbar />

      <div className=''>
        <div className='grid grid-cols-3 gap-4 ml-20 mt-20'> 
          {SneakerData.map((item) => (
            <div className='  flex flex-col items-center justify-start w-96 h-auto bg-emerald-100' key={item.id}>
              <img src={item.cardImage} alt="product" className='w-96 h-96 '/> 
              <p className='text-2xl'>{item.cardName}</p>
              <p className='text-2xl'>{item.cardPrice}</p>
              <button className='btn-card'>ADD TO CART</button>
            </div>
          ))}
        </div>
      </div>

    </React.Fragment>
  );
}

export default Home;
