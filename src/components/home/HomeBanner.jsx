import React from 'react';
import Navbar from "../../pages/shered/navbar/Navbar";

const HomeBanner = () => {
  return (
    <div className="relative "> 
      <img src="https://cdn-edjcg.nitrocdn.com/VBWSxyKIMetGynBOPkcprlqWleWuyTij/assets/images/optimized/rev-9f1d91c/www.blipbillboards.com/wp-content/uploads/image-11-1.png" className='w-full h-screen' alt="" />

      
      <div className="  absolute top-[210px] left-[20px]  lg:top-[230px] lg:left-[150px] ">
        <div
          className=""
          style={{ zIndex: 1 }}
        >
          <div className=' '>
         <h1 className='text-[#FFF] lg:text-6xl text-4xl font-bold'>Unlock the Power of <br /> Outdoor Brilliance</h1>
         <p className='text-[#FFF] md:text-xl mt-6 font-semibold'>Welcome to Royal Advertising, where we redefine the art of <br /> outdoor promotion.  With a commitment to excellence and a  <br />  touch of royalty, we craft bespoke advertising solutions <br />  that elevate your brand to new heights</p>
         <button type="button" className="btn-navbar mt-4">
          Let's Talk
        </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HomeBanner;
