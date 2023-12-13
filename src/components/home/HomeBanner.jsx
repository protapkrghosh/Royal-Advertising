import React from 'react';
import Navbar from "../../pages/shered/navbar/Navbar";

const HomeBanner = () => {
  return (
    <div className="relative">
      <img
        src="https://www.shutterstock.com/image-photo/outdoor-billboard-on-blue-sky-600nw-1921386038.jpg"
        className="absolute w-[100%] h-[100vh] object-cover z-[-1]"
        alt=""
      />
      <div data-testid="navbar-component" className="absolute top-0 left-0 w-[100%] h-[100vh]  z-0 shadow-lg" />

      {/* Navbar Component */}
      <Navbar />
      <div className="hero mt-24 relative">
        <div
          className="hero-content flex-col lg:flex-row-reverse justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <div>
            <div className="text-6xl md:text-7xl   font-bold text-center md:mt-[150px] mt-20">
              <p>Boost Your Brand with Our Strategies </p>
            </div>

            <p className="py-6 text-xl text-yellow-400 font-semibold text-center mt-6">
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
