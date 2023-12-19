import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { navdata } from "../../../data/data";
import SmllscreenNavbar from "../../../components/home/SmllscreenNavbar";
import HandleSmallScreenClosenavbar from "../../../components/home/HandleSmallScreenClosenavbar";

const Navbar = () => {
  const [isOpens, setIsOpens] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const handleSetActive = (to) => {
    setActiveTab(to);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsFixed(window.innerWidth <= 768 && window.scrollY > 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className={` w-full mx-auto fixed z-10 `}>
<<<<<<< HEAD
      <div
        className={` bg-[#FFF] shadow-2xl duration-500 ease-in-out  ${
          isFixed
            ? "lg:bg-white text-black w-full shadow-2xl bg-opacity-100 ease-in-out"
            : ""
        }`}
      >
        <div className="lg:w-10/12 mx-auto flex  justify-between items-center ">
=======

      <div className={` bg-[#FFF] shadow-2xl duration-500 ease-in-out  ${isFixed ? "lg:bg-white text-black w-full shadow-2xl bg-opacity-100 ease-in-out" : ""}`}>
        <div className="lg:w-10/12 mx-auto flex  justify-between items-center ">

>>>>>>> e05ed97891dbd8cc1aeec3d577d28713669a3e55
          <div className="hidden lg:flex items-center gap-x-5">
            <img
              src="https://i.ibb.co/Zf5cgxT/sdsd-1.png"
              className="w-[140px] h-[70px] my-4"
              alt=""
            />
          </div>
<<<<<<< HEAD
          <div
            className={`lg:hidden flex justify-between items-center w-full  px-8 z-10 ${
              isFixed
                ? "bg-white text-black w-full shadow-md  fixed mt-[70px]"
                : ""
            }`}
          >
=======
          <div className={`lg:hidden flex justify-between items-center w-full  px-8 z-10 ${isFixed ? "bg-white text-black w-full shadow-md  fixed mt-[70px]" : ""}`}>
>>>>>>> e05ed97891dbd8cc1aeec3d577d28713669a3e55
            <div className=" ">
              <img
                src="https://i.ibb.co/Zf5cgxT/sdsd-1.png"
                className="w-24 h-10 -ml-4 my-4"
                alt=""
              />
            </div>
            <button
              type="button"
              onClick={toggleMenu}
<<<<<<< HEAD
              className={`focus:outline-none ${
                isFixed ? " text-black " : " text-black"
              }`}
=======
              className={`focus:outline-none ${isFixed ? " text-black " : " text-black"}`}
>>>>>>> e05ed97891dbd8cc1aeec3d577d28713669a3e55
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm16 4H4v2h16v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden lg:mt-[20px] py-2 lg:flex justify-between items-center gap-x-6 ">
<<<<<<< HEAD
=======

>>>>>>> e05ed97891dbd8cc1aeec3d577d28713669a3e55
            {navdata.map((nav, index) => (
              <ScrollLink
                key={index}
                to={nav.item}
                smooth={true}
                duration={500}
                className={`font-bold cursor-pointer `}
                onClick={() => handleSetActive(nav.item)}
                spy={true}
              >
<<<<<<< HEAD
                <p
                  href=""
                  className="relative inline-block text-xl text-[#0C0367] group overflow-hidden"
                >
=======
                <p href="" className="relative inline-block text-xl text-[#0C0367] group overflow-hidden">
>>>>>>> e05ed97891dbd8cc1aeec3d577d28713669a3e55
                  {nav.item}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#0C0367] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </p>
              </ScrollLink>
<<<<<<< HEAD
=======

>>>>>>> e05ed97891dbd8cc1aeec3d577d28713669a3e55
            ))}
            <ScrollLink
              to="Contact Us"
              className=""
              smooth={true}
              duration={500}
            >
<<<<<<< HEAD
              <button type="button" className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-md shadow-lg transition-colors duration-300 ease-in-out mb-3">
                Contact Us
              </button>
            </ScrollLink>
          </div>
=======
              <button type="button" className="btn-navbar mb-3">
                Contact Us
              </button>
            </ScrollLink>

          </div>

>>>>>>> e05ed97891dbd8cc1aeec3d577d28713669a3e55
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <HandleSmallScreenClosenavbar
              isOpens={isOpens}
              onClose={toggleMenu}
              activeTab={activeTab}
              handleSetActive={handleSetActive}
            />
          </div>
        </div>
      )}
      {isOpen && <SmllscreenNavbar isOpens={isOpen} onClose={toggleMenu} />}
    </nav>
  );
};

export default Navbar;
