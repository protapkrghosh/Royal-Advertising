
import React from "react";
import classNames from "classnames";
import HandleSmallScreenClosenavbar from "./HandleSmallScreenClosenavbar";

const SmllscreenNavbar = ({isOpens, onClose, }) => {
    const sidebarClasses = classNames("sidebar", {
        "translate-y-0": isOpens,
        "-translate-y-full": !isOpens,
        
      });
    
    return (
        <div className={sidebarClasses} style={{ width: "570px", position: "fixed", top: 0, left: 0, zIndex: 20, transition: "transform 0.3s ease-in-out", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <nav className="transition-transform duration-300 transform h-screen md:hidden bg-white  text-[#070234] p-6">
          <div className="flex justify-between ">
          <div>
         <img
                src="https://reflectivedesign.in/wp-content/uploads/2023/03/reflective-design-logo_1.png"
                className="h-12 w-36"
                alt=""
              />
         </div>
          <div>
          <button onClick={onClose} className="absolute top-4 left-4 text-white cursor-pointer bg-red-500 rounded-full p-2">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          </div>
         
          </div>
          <div className="mt-36 ">
          <HandleSmallScreenClosenavbar isOpens={isOpens} onClose={onClose}  />
  
          </div>
          <div className="mt-10">
              <hr className="w-full h-1 bg-black"/>
              <div className="mt-10 text-2xl">
                  <p >+91-8858230920</p>
                  <p className="mt-4">info@reflectivedesign.in</p>
              </div>
          </div>
        </nav>
      </div>
    );
};

export default SmllscreenNavbar;