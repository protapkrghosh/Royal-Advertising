import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { navdata } from "../../../data/data";
import Sidebar from "../../../components/home/Sidebar";
import SmllscreenNavbar from "../../../components/home/SmllscreenNavbar";
import HandleSmallScreenClosenavbar from "../../../components/home/HandleSmallScreenClosenavbar";

const Navbar = () => {
  const [isOpens, setIsOpens] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSetActive = (to) => {
    setActiveTab(to);
  };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:top-10 px-10 max-w-[1300px] mx-auto md:w-full relative z-10">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      
      </div>

      <div className=" flex justify-between items-center">

        <div className="flex items-center gap-x-5">
          <img
            src="https://i.ibb.co/Zf5cgxT/sdsd-1.png"
            className="w-[200px]"
            alt=""
          />
        </div>
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={toggleMenu}
            className="focus:outline-none text-white"
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
        <div className="hidden md:flex justify-center items-center gap-x-6">
          {navdata.map((nav, index) => (
            <ScrollLink
              key={index}
              to={nav.item}
              smooth={true}
              duration={500}
              className={`font-bold cursor-pointer`}
              onClick={() => handleSetActive(nav.item)}
              spy={true}
            >
              <p href="" className="hover:text-[white] text-[white]">
                {nav.item}
              </p>
            </ScrollLink>
          ))}
          <button type="button" className="nav-button">
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
