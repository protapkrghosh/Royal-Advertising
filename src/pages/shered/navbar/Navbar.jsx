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

  const toggleSidebar = () => {
    setIsOpens(!isOpens);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:top-10 px-10 max-w-[1300px] mx-auto md:w-full bg-white relative z-10">
      {/* <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <button
            type="button"
            onClick={toggleSidebar}
            className="focus:outline-none mr-4 hidden md:flex items-center"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm16 4H4v2h16v-2z"
              />
            </svg>
          </button>
          <ScrollLink
            to="home"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            <img
              src="https://b2h9h9q9.rocketcdn.me/wp-content/uploads/2020/11/vishal-mega-mart-Franchise-Logo.png"
              className="h-28 w-40"
              alt=""
            />
          </ScrollLink>
        </div>

        <div className="hidden md:flex">
          <div className="ml-4 flex items-center gap-12">
            {navdata.map((nav, index) => (
              <ScrollLink
                key={index}
                to={nav.item}
                smooth={true}
                duration={500}
                className={`hover:text-[#080337] text-[#080337] font-bold hover:border-b-2 cursor-pointer border-[#080337] ${activeTab === nav.item ? ' border-b-2 border-[#080337]' : ''}`}
                onClick={() => handleSetActive(nav.item)}
                spy={true}
              >
                {nav.item}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={1000}
              className="btn-navbar ml-5"
            >
              Lets Talk
            </ScrollLink>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={toggleMenu}
            className="  focus:outline-none"
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
      </div> */}

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <button
            type="button"
            onClick={toggleSidebar}
            className="focus:outline-none hidden md:flex items-center"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm16 4H4v2h16v-2z"
              />
            </svg>
          </button>
          <img
            src="https://demo.7iquid.com/salepush/wp-content/uploads/2022/04/logo-1.png"
            className="w-[200px]"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center gap-x-6">
          {navdata.map((nav, index) => (
            <ScrollLink
              key={index}
              to={nav.item}
              smooth={true}
              duration={500}
              className={`hover:text-[#080337] text-[#080337] font-bold cursor-pointer`}
              onClick={() => handleSetActive(nav.item)}
              spy={true}
            >
              <a href="">{nav.item}</a>
            </ScrollLink>
          ))}
        </div>
        <button
          type="button"
          className='nav-button'
        >
          Let's Talk
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <HandleSmallScreenClosenavbar
              isOpens={isOpens}
              onClose={toggleMenu}
              activeTab={activeTab}
              handleSetActive={handleSetActive} // Ensure you are passing handleSetActive here
            />
          </div>
        </div>
      )}

      {isOpens && <Sidebar isOpens={isOpens} onClose={toggleSidebar} />}
      {isOpen && <SmllscreenNavbar isOpens={isOpen} onClose={toggleMenu} />}
    </nav>
  );
};

export default Navbar;
