import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaPhoneAlt } from "react-icons/fa";
import useAOSInit from "../../hooks/useAosInit";
import pcHero from "../../assets/homeBanner.jpg"
import mobileBanner from "../../assets/mobile-banner.jpg"
const HomeBanner = () => {
  useAOSInit()
  return (
    <div className="relative ">
      <img
        src={pcHero}
        className="hidden md:flex w-full h-[600px] md:h-screen"
        alt="home banner"
        loading="lazy"
        
      />
      <div className="relative inline-block w-full h-[720px] md:hidden">
        <img
          src={mobileBanner}
          className=" w-full object-cover  h-full"
          alt="phone banner"
          width="100" height="10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[rgba(0,0,0,0.6)] to-transparent"></div>
      </div>
      <div className=" text-left absolute left-1 md:left-0 top-[280px] md:top-[180px] lg:top-[130px] xl:top-[230px] lg:left-[100px] xl:left-[150px] ">
        <div className="md:w-[600px]" style={{ zIndex: 1 }}>
          <h1 className="text-white md:hidden  text-4xl leading-tight text-center md:text-left font-cursive font-semibold">
            Welcome to Royal Advertising
          </h1>

          <h1 className="text-[#FFF] hidden md:flex lg:text-6xl text-4xl font-bold text-center  md:text-left">
            Unlock the Power of Outdoor Brilliance
          </h1>
          <p data-aos="fade-up" className="text-gray-300 md:hidden  md:text-xl mt-6 font-thin text-center  md:text-justify">
          Elevate your brand with Royal Advertising—where outdoor promotion meets unparalleled elegance for lasting impressions.
          </p>
          <p className="text-[#FFF] hidden md:flex md:text-xl mt-6 font-semibold text-center  md:text-justify">
            Welcome to Royal Advertising, where we redefine the art of outdoor
            promotion. With a commitment to excellence and a touch of royalty,
            we craft bespoke advertising solutions that elevate your brand to
            new heights
          </p>
          <ScrollLink
            to="Contact Us"
            href="#"
            smooth={true}
            duration={500}
          >
            
            <button type="button" className="bg-gradient-to-br   md:block from-blue-500 to-purple-600 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out flex justify-center items-center gap-x-3 mt-4">
       Let's Talk
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
