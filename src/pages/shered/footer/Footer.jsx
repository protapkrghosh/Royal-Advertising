import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const emojiSVG = `
    <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg">
      
    <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(12, 8, 51, 1)" offset="0%"></stop><stop stop-color="rgba(12, 8, 51, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,343L26.7,285.8C53.3,229,107,114,160,81.7C213.3,49,267,98,320,122.5C373.3,147,427,147,480,130.7C533.3,114,587,82,640,57.2C693.3,33,747,16,800,40.8C853.3,65,907,131,960,147C1013.3,163,1067,131,1120,122.5C1173.3,114,1227,131,1280,155.2C1333.3,180,1387,212,1440,228.7C1493.3,245,1547,245,1600,261.3C1653.3,278,1707,310,1760,326.7C1813.3,343,1867,343,1920,326.7C1973.3,310,2027,278,2080,245C2133.3,212,2187,180,2240,163.3C2293.3,147,2347,147,2400,187.8C2453.3,229,2507,310,2560,318.5C2613.3,327,2667,261,2720,245C2773.3,229,2827,261,2880,236.8C2933.3,212,2987,131,3040,122.5C3093.3,114,3147,180,3200,245C3253.3,310,3307,376,3360,334.8C3413.3,294,3467,147,3520,106.2C3573.3,65,3627,131,3680,196C3733.3,261,3787,327,3813,359.3L3840,392L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"></path></svg>
    
    </svg>
  `;

  // const mediaImage = "https://i.ibb.co/z2QnSQg/wave.png";
  const footerText = "text-lg text-gray-300 tracking-wide mb-5";
  const footerHead = "text-xl font-bold mb-5";
  const footerLinks = "flex flex-col gap-y-3 text-[17px]";

  const footerStyle = {
    // backgroundImage: `url(${mediaImage})`,
    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(emojiSVG)}")`,
  };

  return (
    <div style={footerStyle} className="relative bg-no-repeat bg-cover bg-center h-[1400px] lg:h-[600px] flex justify-center mt-14">
      <footer className="absolute text-white bottom-0 p-5 lg:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[95%] mx-auto">
          <div>
            <p className={footerHead}>Office</p>
            <p className={footerText}>
              Plot No.10, Pratap Nagar, <br /> Tedhi Pulia Ring Road, Vikas <br /> Nagar, Lucknow, Uttar <br /> Pradesh – 226022
            </p>
            <p className={footerText}>info@refletivedesign.in</p>
            <p className={footerText}>+91-8858230920 +91-8858130920</p>
          </div>

          <div>
            <header className={footerHead}>Visit Us</header>
            <div className={footerLinks}>
              <a className="link no-underline text-white hover:ml-2 duration-300">Home</a>
              <a className="link no-underline text-white hover:ml-2 duration-300">Services</a>
              <a className="link no-underline text-white hover:ml-2 duration-300">About Us</a>
              <a className="link no-underline text-white hover:ml-2 duration-300">Portfolio</a>
              <a className="link no-underline text-white hover:ml-2 duration-300">Contacts</a>
              <a className="link no-underline text-white hover:ml-2 duration-300">Blogs</a>
            </div>
          </div>

          <div>
            <header className={footerHead}>Our Services</header>
            <div className={footerLinks}>
              <a className="link no-underline text-white hover:ml-2 duration-300">Social Media Marketing</a>
              <a className="link no-underline text-white hover:ml-2 duration-300">SEO</a>
              <a className="link no-underline text-white hover:ml-2 duration-300">Graphic Designing</a>
              <a className="link no-underline text-white hover:ml-2 duration-300">Website Designing</a>
              <a className="link no-underline text-white hover:ml-2 duration-300">3D Walkthrough</a>
              <a className="link no-underline text-white hover:ml-2 duration-300">Video Editing & Animation</a>
            </div>
          </div>
          
          <div>
            <header className={footerHead}>Newsletter</header>
            <div className={footerLinks}>
              <div className="flex gap-5 items-center">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-ghost w-full max-w-xs bg-[#221F46] rounded-full"
                />
                <div className="bg-[#F51843] p-2 -ml-4 rounded-full text-3xl font-semibold cursor-pointer">
                <IoIosArrowRoundForward />
                </div>
                  
              </div>
              <div>
                {/* <input type="checkbox" checked="" className="checkbox" /> */}
                <p className="text-[#A59EAF]">
                  I agree the <a href="#" className="underline text-[#A59EAF] hover:text-white duration-300">Privacy Policy</a>
                </p>
              </div>
              <div  className="flex items-center gap-x-3 text-3xl mt-5 mb-11 ">
                <span data-testid="facebook-icon" className="border border-[#a59eafa2] hover:border-white duration-300 p-3 rounded-full cursor-pointer">
                  <FaFacebookF className="text-[17px]" />
                </span>

                <span data-testid="instagram-icon" className="border border-[#a59eafa2] hover:border-white duration-300 p-3 rounded-full cursor-pointer">
                  <FaInstagram className="text-[17px]" />
                </span>

                <span data-testid="twitter-icon" className="border border-[#a59eafa2] hover:border-white duration-300 p-3 rounded-full cursor-pointer">
                  <FaTwitter className="text-[17px]" />
                </span>

                <span data-testid="linkedin-icon" className="border border-[#a59eafa2] hover:border-white duration-300 p-3 rounded-full cursor-pointer">
                  <FaLinkedin className="text-[17px]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
