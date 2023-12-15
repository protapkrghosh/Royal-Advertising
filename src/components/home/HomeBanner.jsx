import React from 'react';
import Navbar from "../../pages/shered/navbar/Navbar";

const HomeBanner = () => {
  return (
    <div className="relative">
      <img
        src="https://i.ibb.co/bbF23py/download-1.png"
        className="absolute w-full h-[600px]  md:h-screen object-cover z-[-1]"
        alt=""
      />
      

      {/* Navbar Component */}
      <Navbar />
      <div className="hero mt-20  relative">
        <div
          className="hero-content flex-col lg:flex-row-reverse justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <div className=' lg:ml-[63px] md:mt-36 lg:mt-14 mt-14  text-center '>
         <h1 className='text-[#070234] lg:text-6xl text-2xl font-bold'>Unlock the Power of <br /> Outdoor Brilliance</h1>
         <p className='text-white md:text-lg mt-4'>Crafting Impressions, Connecting Spaces. <br /> Welcome to Royal Advertising</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
