
import React from "react";
import classNames from "classnames";
import { navdata, smallNavdata } from "../../data/data";
import { Link as ScrollLink } from "react-scroll";

const HandleSmallScreenClosenavbar = ({ isOpens, onClose, activeTab, handleSetActive }) => {
    const sidebarClasses = classNames("sidebar", {
        "translate-y-0": isOpens,
        "-translate-y-full": !isOpens,
    });
    return (
        <div>
            {smallNavdata.map((nav, index) => (
                <p className="">
                    <ScrollLink
                        key={index}
                        to={nav.item}
                        smooth={true}
                        duration={500}
                        className={`hover:text-[#080337] text-[#080337] font-bold hover:border-b-2 cursor-pointer border-[#080337] ${activeTab === nav.item ? " border-b-2 border-[#080337]" : ""
                            }`}
                        onClick={() => onClose()}
                        spy={true}
                    >
                        {nav.item}
                    </ScrollLink>
                </p>
            ))}
             <ScrollLink
              to="Contact Us"
              className=""
              smooth={true}
              duration={500}
            >
              <button type="button" className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-md shadow-lg transition duration-300 ease-in-out">
                Contact Us
              </button>
            </ScrollLink>
        </div>
    );
};

export default HandleSmallScreenClosenavbar;
