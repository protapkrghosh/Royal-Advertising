import React from "react";
import { Link as ScrollLink } from "react-scroll";
import mobileImage from "../../assets/3.jpg";

const HomeBanner = () => {
  return (
    <div className="relative ">
      <img
        src="https://cdn-edjcg.nitrocdn.com/VBWSxyKIMetGynBOPkcprlqWleWuyTij/assets/images/optimized/rev-9f1d91c/www.blipbillboards.com/wp-content/uploads/image-11-1.png"
        className="hidden md:flex w-full h-[600px] md:h-screen"
        alt=""
      />
      <div
      className="relative inline-block w-full h-[550px] md:hidden"
      >
        <img src="https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/349138/hero_-_castore_reflective_48_sheet.png?w=608&ar=default&fit=crop&crop=faces,edges&auto=format" className="h-full w-full object-cover bg-cover bg-no-repeat bg-center" alt="" />
  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.5)]"></div>
      </div>

      <div className="  absolute top-[150px] md:top-[180px]  lg:top-[230px] lg:left-[150px] ">
        <div className="md:w-[600px] px-2" style={{ zIndex: 1 }}>
          <h1 className="text-[#FFF] lg:text-6xl text-4xl font-bold text-center md:text-left">
            Unlock the Power <br /> of Outdoor Brilliance
          </h1>
          <p className="text-[#FFF] md:text-xl mt-6 font-semibold text-center md:text-justify">
            Welcome to Royal Advertising, where we redefine the art of outdoor
            promotion. With a commitment to excellence and a touch of royalty,
            we craft bespoke advertising solutions that elevate your brand to
            new heights
          </p>
          <ScrollLink
            to="Contact Us"
            className="flex justify-center items-center md:block"
            smooth={true}
            duration={500}
          >
            <button type="button" className="btn-navbar mt-4">
              Let's Talk
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
