import React from 'react';
import Navbar from "../../pages/shered/navbar/Navbar";

const HomeBanner = () => {
  return (
    <div className="relative">
<video
        autoPlay
        muted
        loop
        className="absolute w-full h-[800px] md:h-screen object-cover z-[-1]"
      >
        <source
          src="https://media.istockphoto.com/id/521188514/video/traffic-car-on-busy-highway-near-to-the-skyscrapers-in-madrid.mp4?s=mp4-480x480-is&k=20&c=iAVRswaweN0Y1xkHMYqCxB0XnbVh9fYuMx3r6UQD5fo=" // Replace with the URL of your video file
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Navbar Component */}
      <Navbar />
      <div className="hero  mt-24 relative">
        <div
          className="hero-content flex-col lg:flex-row-reverse justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <div className='  md:mt-36 lg:mt-0 mt-24  text-center '>
         <h1 className='text-[#070234] lg:text-6xl text-4xl font-bold'>Unlock the Power of <br /> Outdoor Brilliance</h1>
         <p className='text-[#291E97] md:text-xl md:mt-8 mt-6 font-semibold'>Crafting Impressions, Connecting Spaces. <br /> Welcome to Royal Advertising</p>
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
