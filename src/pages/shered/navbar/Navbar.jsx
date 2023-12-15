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
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsFixed(window.innerWidth <= 768 && window.scrollY > 0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 
  return (
    <nav className={` max-w-[1300px]  mx-auto z-10 md:relative  top-5 w-full `}>    

      <div className=" flex justify-between items-center">

        <div className="hidden lg:flex items-center gap-x-5">
          <img
            src="https://i.ibb.co/Zf5cgxT/sdsd-1.png"
            className="w-[140px] h-20"
            alt=""
          />
        </div>
        <div className={`lg:hidden flex justify-between items-center w-full mt-4 px-8 z-10 ${isFixed ? "bg-white text-black w-full shadow-md  fixed mt-[70px] py-4 duration-500 ease-in-out" : ""}`}>
  <div className=" ">
    <img
      src="https://i.ibb.co/Zf5cgxT/sdsd-1.png"
      className="w-24 h-10 -ml-4"
      alt=""
    />
  </div>
  <button
    type="button"
    onClick={toggleMenu}
    className={`focus:outline-none ${isFixed ? " text-black " : " text-black"}`   }
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
        <div className="hidden lg:flex justify-between items-center gap-x-6 ">
         
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
              <p href="" className="hover:text-[#0C0367] text-xl   text-[#003049]">
                {nav.item}
              </p>
            </ScrollLink>
          ))}
         
         <button type="button" className="btn-navbar">
          Let's Talk
        </button>
       
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
