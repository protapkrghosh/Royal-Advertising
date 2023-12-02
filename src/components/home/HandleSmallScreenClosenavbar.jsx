
import React from "react";
import classNames from "classnames";
import { navdata } from "../../data/data";
import { Link as ScrollLink } from "react-scroll";

const HandleSmallScreenClosenavbar = ({ isOpens, onClose, activeTab, handleSetActive }) => {
    const sidebarClasses = classNames("sidebar", {
        "translate-y-0": isOpens,
        "-translate-y-full": !isOpens,
    });
    return (
        <div>
            {navdata.map((nav, index) => (
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
        </div>
    );
};

export default HandleSmallScreenClosenavbar;
