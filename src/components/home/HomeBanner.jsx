import React from 'react';
import Navbar from "../../pages/shered/navbar/Navbar";

const HomeBanner = () => {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1618333150660-bb31830aa1fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute lg:w-[100%] h-[600px] md:h-screen object-cover z-[-1]"
        alt=""
      />
      <div data-testid="navbar-component" className="absolute top-0 left-0 w-[100%] h-[600px] md:h-screen bg-black bg-opacity-30  z-0 shadow-lg" />

      {/* Navbar Component */}
      <Navbar />
      <div className="hero mt-24 relative">
        <div
          className="hero-content flex-col lg:flex-row-reverse justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <div>
            <div className="text-6xl md:text-7xl text-black font-bold text-center md:mt-20 ">
              <p>Boost Your Brand with Our Strategies </p>
            </div>

            <p className="py-6 text-xl text-white font-semibold text-center mt-6">
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
