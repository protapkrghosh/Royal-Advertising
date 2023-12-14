import React from 'react';
import Navbar from "../../pages/shered/navbar/Navbar";

const HomeBanner = () => {
  return (
    <div className="relative">
      <img
        src="https://png.pngtree.com/thumb_back/fw800/background/20230616/pngtree-blank-billboard-mockup-in-3d-rendering-against-a-white-backdrop-image_3624362.jpg"
        className="absolute lg:w-[100%] h-[600px] md:h-screen object-cover z-[-1]"
        alt=""
      />
      

      {/* Navbar Component */}
      <Navbar />
      <div className="hero mt-24 relative">
        <div
          className="hero-content flex-col lg:flex-row-reverse justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <div>
            <div className="text-4xl md:text-7xl text-[#070234] font-bold text-center md:mt-16 ">
              <p className=''>Boost Your Brand with Our Strategies </p>
            </div>

            <p className="py-6 text-xl  text-[#0C0367] font-semibold text-center mt-6">
              Give your brand a boost with our Bilbord Advertising agency.
              <br /> We get you a customer not just traffic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
