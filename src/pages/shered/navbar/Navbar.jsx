import { useState } from "react";
import { Link, Link as ScrollLink } from 'react-scroll';
import { navdata } from "../../../data/data";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSetActive = (to) => {
        setActiveTab(to);
    };

    return (
        <nav className="md:top-0 md:w-full bg-white">
            <div className="w-11/12 mt-4 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={1000}
                            className="cursor-pointer"
                        >
                            <img src="https://reflectivedesign.in/wp-content/uploads/2023/03/reflective-design-logo_1.png" className="h-14 w-40" alt="" />
                        </ScrollLink>
                    </div>
                    <div className="hidden md:flex ">
                        <div className="ml-4 flex items-center gap-12">
                            {navdata.map((nav, index) => (
                                <ScrollLink
                                    key={index}
                                    to={nav.item}
                                    smooth={true}
                                    duration={500}
                                    className={`hover:text-[#080337]  text-[#080337] font-bold  hover:border-b-2 cursor-pointer border-[#080337] ${activeTab === nav.item ? ' border-b-2 border-[#080337]' : ''}`}
                                    onClick={() => { toggleMenu(); handleSetActive(nav.item); }}
                                    spy={true}
                                >
                                    {nav.item}
                                </ScrollLink>

                            ))}
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
                            className="hover:text-white focus:outline-none focus:text-white"
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
                        {navdata.map((nav, index) => (
                            <ScrollLink
                                key={index}
                                to={nav.item}
                                smooth={true}
                                duration={500}
                                className={`hover:text-[#080337]block px-3 py-2 rounded-md text-base font-medium ${activeTab === nav.item ? 'border-b-2 border-[#080337]' : ''}`}
                                onClick={() => { toggleMenu(); handleSetActive(nav.item); }}
                                spy={true}
                            >
                                {nav.item}
                            </ScrollLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
