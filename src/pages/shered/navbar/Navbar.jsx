import { useState } from "react";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className="md:fixed md:top-0 md:w-full md:z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="home"
              smooth={true}
              duration={1000}
              className="text-gray-300 text-3xl hover:text-white cursor-pointer"
            >
              <img src="https://www.hubnex.in/assets/hubnex%20white-0214a446.png" alt="" />
            </Link>
          </div>
          <div className="hidden md:flex">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                to="home"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                About
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                skills
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                contact
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
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
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >

            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;