import React from "react";
import { Link as ScrollLink } from "react-scroll";

const HomeBanner = () => {
  return (
    <div className="relative ">
      <img
        src="https://cdn-edjcg.nitrocdn.com/VBWSxyKIMetGynBOPkcprlqWleWuyTij/assets/images/optimized/rev-9f1d91c/www.blipbillboards.com/wp-content/uploads/image-11-1.png"
        className="hidden md:flex w-full h-[600px] md:h-screen"
        alt=""
      />
      <div
      className="relative inline-block w-full h-[730px] md:hidden"
      >
        <img src="https://images.squarespace-cdn.com/content/v1/608bf3b649215c2156c82cda/1620236465578-S0ONGH905OF8IQ87GUOA/outdoor-billboard-NJDS46H.jpg?format=1500w" className="h-full w-full object-cover bg-cover bg-no-repeat bg-center" alt="" />
  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.7)]"></div>
      </div>
      <div className=" text-left absolute top-[250px] md:top-[180px] lg:top-[130px] xl:top-[230px] lg:left-[150px] ">
        <div className="md:w-[600px]  " style={{ zIndex: 1 }}>
          <h1 className="text-[#FFF] md:hidden  lg:text-6xl text-4xl font-bold text-center  md:text-left">
            Unlock the Power  of <br /> Outdoor Brilliance
          </h1>
          <h1 className="text-[#FFF] hidden md:flex lg:text-6xl text-4xl font-bold text-center  md:text-left">
            Unlock the Power <br />  of  Outdoor Brilliance
          </h1>
          <p className="text-[#FFF] md:hidden  md:text-xl mt-6 font-semibold text-center  md:text-justify">

            Welcome to Royal Advertising, where we redefine <br /> the art of outdoor
            promotion.  With <br />  a   commitment  to excellence and   a touch <br /> of royalty,
            we craft bespoke <br /> advertising  solutions <br /> that elevate your brand to
            new heights
          </p>
          <p className="text-[#FFF] hidden md:flex px-4 md:text-xl mt-6 font-semibold text-center  md:text-justify">

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
