// Navbar.js
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { navdata } from "../../../data/data";
import Sidebar from "../../../components/home/Sidebar";

const Navbar = () => {
  const [isOpens, setIsOpens] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const handleSetActive = (to) => {
    setActiveTab(to);
  };

  const toggleSidebar = () => {
    setIsOpens(!isOpens);
  };

  return (
    <nav className="md:top-0 md:w-full bg-white relative z-10">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <button
            type="button"
            onClick={toggleSidebar}
            className=" focus:outline-none mr-4 hidden  md:flex items-center"
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
              src="https://reflectivedesign.in/wp-content/uploads/2023/03/reflective-design-logo_1.png"
              className="h-14 w-40"
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
                className={`hover:text-[#080337]  text-[#080337] font-bold  hover:border-b-2 cursor-pointer border-[#080337] ${activeTab === nav.item ? ' border-b-2 border-[#080337]' : ''}`}
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
              className=" btn-navbar ml-5"
            >
              Lets Talks
            </ScrollLink>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={toggleSidebar}
            className="hover:text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpens ? (
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
      </div>
      {isOpens && <Sidebar isOpens={isOpens} onClose={toggleSidebar} />}
    </nav>
  );
};

export default Navbar;
