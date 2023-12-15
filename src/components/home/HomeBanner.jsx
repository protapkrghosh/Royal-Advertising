import React from 'react';
import Navbar from "../../pages/shered/navbar/Navbar";

const HomeBanner = () => {
  return (
    <div className="relative">
      <img
        src="https://visme.co/blog/wp-content/uploads/2019/08/header-1.gif"
        className="absolute lg:w-[100%]  h-screen object-cover z-[-1]"
        alt=""
      />
      

      {/* Navbar Component */}
      <Navbar />
      <div className="hero mt-20 relative">
        <div
          className="hero-content flex-col lg:flex-row-reverse justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <div className=' md:ml-16  '>
         
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
