import React from 'react';
import Navbar from "../../pages/shered/navbar/Navbar";

const HomeBanner = () => {
  return (
    <div className="relative">
      <img
        src="https://i.ibb.co/x5sjkvz/billboard.jpg"
        className="absolute w-full h-[800px]  md:h-screen object-cover z-[-1]"
        alt=""
      />
      

      {/* Navbar Component */}
      <Navbar />
      <div className="hero mt-20  relative">
        <div
          className="hero-content flex-col lg:flex-row-reverse justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <div className='  md:mt-36 lg:mt-8 mt-24  text-center '>
         <h1 className='text-[#070234] lg:text-6xl text-4xl font-bold'>Unlock the Power of <br /> Outdoor Brilliance</h1>
         <p className='text-[#291E97] md:text-xl md:mt-8 mt-4'>Crafting Impressions, Connecting Spaces. <br /> Welcome to Royal Advertising</p>
         <button type="button" className="btn-navbar mt-2">
          Let's Talk
        </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HomeBanner;
