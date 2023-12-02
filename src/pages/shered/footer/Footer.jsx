import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const mediaImage = "https://i.ibb.co/z2QnSQg/wave.png";
  const footerText = "text-lg text-gray-300 tracking-wide mb-5";
  const footerHead = "text-xl font-bold mb-5";
  const footerLinks = "flex flex-col gap-y-3 text-gray-300 text-lg text-white";

  const footerStyle = {
    backgroundImage: `url(${mediaImage})`,
  };

  return (
    <div style={footerStyle} className="relative bg-no-repeat bg-cover bg-center h-[1700px] lg:h-[600px] ">
      <footer className="  absolute text-white bottom-0 lg:left-36 flex flex-col justify-center lg:w-[1300px] mx-auto p-5 lg:p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          <div>
            <p className={footerHead}>Office</p>
            <p className={footerText}>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992 <br />
              Plot No.10, Pratap Nagar, Tedhi Pulia Ring Road, Vikas Nagar,
              Lucknow, Uttar Pradesh – 226022
            </p>
            <p className={footerText}>info@refletivedesign.in</p>
            <p className={footerText}>+91-8858230920 +91-8858130920</p>
          </div>
          <div>
            <header className={footerHead}>Visit Us</header>
            <div className={footerLinks}>
              <a className="link link-hover text-white">Home</a>
              <a className="link link-hover text-white">Services</a>
              <a className="link link-hover text-white">About Us</a>
              <a className="link link-hover text-white">Portfolio</a>
              <a className="link link-hover text-white">Contacts</a>
              <a className="link link-hover text-white">Blogs</a>
            </div>
          </div>
          <div>
            <header className={footerHead}>Our Services</header>
            <div className={footerLinks}>
              <a className="link link-hover text-white">Social Media Marketing</a>
              <a className="link link-hover text-white">SEO</a>
              <a className="link link-hover text-white">Graphic Designing</a>
              <a className="link link-hover text-white">Website Designing</a>
              <a className="link link-hover text-white">3D Walkthrough</a>
              <a className="link link-hover text-white">Video Editing & Animation</a>
            </div>
          </div>
          <div>
            <header className={footerHead}>Newsletter</header>
            <div className={footerLinks}>
              <div className="flex gap-5 items-center">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs bg-white"
                />
                <div className="bg-[#F51843] p-3 rounded-full text-3xl font-semibold">
                <IoIosArrowRoundForward></IoIosArrowRoundForward>
                </div>
                  
              </div>
              <div>
                {/* <input type="checkbox" checked="" className="checkbox" /> */}
                <p>
                  I agree the <a href="#" className="underline">Privacy Policy</a>
                </p>
              </div>
              <div className="flex items-center gap-x-3 text-3xl mt-5 mb-11 ">
                <FaFacebookF></FaFacebookF>
                <FaInstagram></FaInstagram>
                <FaTwitter></FaTwitter>
                <FaLinkedin></FaLinkedin>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
