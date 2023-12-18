import React from 'react';
import { Link as ScrollLink } from "react-scroll";


const HomeBanner = () => {
  return (
    <div className="relative "> 
      <img src="https://cdn-edjcg.nitrocdn.com/VBWSxyKIMetGynBOPkcprlqWleWuyTij/assets/images/optimized/rev-9f1d91c/www.blipbillboards.com/wp-content/uploads/image-11-1.png" className='w-full h-screen' alt="" />

      
      <div className="  absolute top-[130px] md:top-[180px] lg:top-[230px] lg:left-[150px] ">
        <div
          className="md:w-[600px] px-2"
          style={{ zIndex: 1 }}
        >
         <h1 className='text-[#FFF] lg:text-6xl text-3xl font-bold'>Unlock the Power <br /> of Outdoor Brilliance</h1>
         <p className='text-[#FFF] md:text-xl mt-6 font-semibold text-justify'>Welcome to Royal Advertising, where we redefine the art of outdoor promotion.  With a commitment to excellence and a   touch of royalty, we craft bespoke advertising solutions  that elevate your brand to new heights</p>
         <ScrollLink to='Contact Us' 
      smooth={true}
      duration={500}><button type="button" className="btn-navbar mt-4">
      Let's Talk
    </button></ScrollLink>
         
        </div>
        
      </div>
    </div>
  );
};

export default HomeBanner;
