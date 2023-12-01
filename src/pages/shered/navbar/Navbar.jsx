import { useState } from "react";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
        <nav className=" md:top-0 md:w-full bg-white">
            <div className="w-11/12 mt-4 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            to="home"
                            smooth={true}
                            duration={1000}
                            className="cursor-pointer"
                        >
                            <img src="https://reflectivedesign.in/wp-content/uploads/2023/03/reflective-design-logo_1.png" className="h-14 w-40" alt="" />
                        </Link>
                    </div>
                    <div className="hidden md:flex ">
                        <div className="ml-4 flex items-center gap-12">
                            <Link
                                to="home"
                                smooth={true}
                                duration={1000}
                                className="text-[#080337] font-bold  hover:border-b-2 cursor-pointer"
                            >
                                Home
                            </Link>
                            <Link
                                to="about"
                                smooth={true}
                                duration={1000}
                                className=" text-[#080337] font-bold  hover:border-b-2 cursor-pointer"
                            >
                                About Us
                            </Link>
                            <Link
                                to="projects"
                                smooth={true}
                                duration={1000}
                                className="text-[#080337] font-bold  hover:border-b-2 cursor-pointer"
                            >
                                Services
                            </Link>
                            <Link
                                to="skills"
                                smooth={true}
                                duration={1000}
                                className="text-[#080337] font-bold  hover:border-b-2 cursor-pointer"
                            >
                                Work
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={1000}
                                className=" text-[#080337] font-bold  hover:border-b-2 cursor-pointer"
                            >
                                Contacts
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={1000}
                                className=" btn-navbar ml-5"
                            >
                                Lets Talks
                            </Link>

                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className=" hover:text-white focus:outline-none focus:text-white"
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
                            className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={toggleMenu}
                        >
                            About Us
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={toggleMenu}
                        >
                            Services
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={toggleMenu}
                        >
                            Work
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className=" hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            onClick={toggleMenu}
                        >
                            Contacts
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;