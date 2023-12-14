import React from 'react';
import Navbar from "../../pages/shered/navbar/Navbar";

const HomeBanner = () => {
  return (
    <div className="relative">
      <img
        src="https://img.freepik.com/free-psd/empty-billboard-city_132075-5618.jpg?size=626&ext=jpg&ga=GA1.1.1466948822.1701212219&semt=ais"
        className="absolute w-[100%] h-[100vh] object-cover z-[-1]"
        alt=""
      />
      <div data-testid="navbar-component" className="absolute top-0 left-0 w-[100%] h-[100vh] bg-black bg-opacity-30  z-0 shadow-lg" />

      {/* Navbar Component */}
      <Navbar />
      <div className="hero mt-24 relative">
        <div
          className="hero-content flex-col lg:flex-row-reverse justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <div>
            <div className="text-6xl md:text-7xl text-black   font-bold text-center md:mt-20 ">
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
